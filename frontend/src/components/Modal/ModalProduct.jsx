import { useState } from "react";
import { FiEdit, FiEdit2, FiPlus, FiX } from "react-icons/fi";
import Modal from "react-modal";
import { useModal } from "../../hooks/useModal";
import { useProducts } from "../../hooks/useProducts";
import { ModalButton } from "../Button/ModalButton";
import cogoToast from "cogo-toast";

import "./ModalProduct.scss";

Modal.setAppElement('*');

export function ModalProduct() {
    const { products, createProduct, updateProduct } = useProducts();
    const { idEditableProduct, isModalProductOpen, handleCloseModalProduct } = useModal();
    const [id, setId] = useState(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const icone = id ? <FiEdit /> : <FiPlus />;
    let tipoAlerta = "";
    let msg = "";

    const handleClick = (tipoAlerta) => {

        let options = {}

        switch (tipoAlerta) {

            case "primary":
                msg = 'Registro alterado com sucesso';
                options = {
                    'heading': 'Editar registro'
                }
                cogoToast.info(msg, options);
                break;

            case "success":
                msg = 'Registro cadastrado com sucesso';
                options = {
                    'heading': 'Cadastrar registro'
                }
                cogoToast.success(msg, options);
                break;

            case "danger":
                msg = 'Registro removido com sucesso';
                options = {
                    'heading': 'Excluir registro'
                }
                cogoToast.error(msg, options);
                break;

            case "warning":
                msg = 'Erro ao executar ação';
                options = {
                    'heading': 'Atenção'
                }
                cogoToast.warn(msg, options);
                break;

            case "loading":
                msg = 'Carregando informação...';
                options = {
                    'heading': 'Aguarde'
                }
                cogoToast.loading(msg, options);
                break;

            default:
                break;
        }

    };


    async function handleFormProduct(event) {
        event.preventDefault();

        if (id) {
            await updateProduct(id, {
                name,
                description,
                price
            });

            tipoAlerta = 'primary';

        } else {
            await createProduct({
                name,
                description,
                price
            });

            tipoAlerta = 'success';

        }

        handleClick(tipoAlerta);
        setName("");
        setDescription("");
        setPrice("");

        handleCloseModalProduct();
    }

    function handleOnAfterOpen() {
        if (idEditableProduct) {
            const { id, name, description, price } = products.find(p => p.id === idEditableProduct);
            setId(id);
            setName(name);
            setDescription(description);
            setPrice(price);
        } else {
            setId(null);
            setName("");
            setDescription("");
            setPrice("");
        }
    }

    return (
        <Modal
            isOpen={isModalProductOpen}
            onRequestClose={handleCloseModalProduct}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            onAfterOpen={handleOnAfterOpen}
        >
            <button
                type="button"
                onClick={handleCloseModalProduct}
                className={id ? "react-modal-close" : "react-modal-close add"}
            >
                <FiX />
            </button>

            <form className="formProduct" onSubmit={handleFormProduct}>
                <h2>{icone} {id ? "Editar" : "Cadastrar"} Produto</h2>

                <div className="form-group">
                    <input
                        id="name"
                        placeholder="Nome"
                        value={name}
                        onChange={event => setName(event.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <textarea id="description" placeholder="Descrição" value={description} rows="5" onChange={event => setDescription(event.target.value)} required />
                </div>

                <div className="form-group">
                    <input
                        placeholder="0,00"
                        type="number"
                        value={price}
                        onChange={event => setPrice(event.target.value)}
                        required
                    />
                </div>

                <ModalButton className={id ? "primaryButton" : "successButton"} type="submit">{id ? "Salvar" : "Cadastrar"}</ModalButton>
            </form>
        </Modal>
    );
}