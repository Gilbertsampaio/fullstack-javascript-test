import { useState } from "react";
import { FiX } from "react-icons/fi";
import Modal from "react-modal";
import { useModal } from "../../hooks/useModal";
import { useProducts } from "../../hooks/useProducts";
import { PrimaryButton } from "../Button/PrimaryButton";

import "./ModalProduct.scss";

Modal.setAppElement('*');

export function ModalProduct() {
    const { products, createProduct, updateProduct } = useProducts();

    const { idEditableProduct, isModalProductOpen, handleCloseModalProduct } = useModal();

    const [id, setId] = useState(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    async function handleFormProduct(event) {
        event.preventDefault();

        if (id) {
            await updateProduct(id, {
                name,
                description,
                price
            });
        } else {
            await createProduct({
                name,
                description,
                price
            });
        }

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
                className="react-modal-close"
            >
                <FiX />
            </button>

            <form className="formProduct" onSubmit={handleFormProduct}>
                <h2>{id ? "Editar" : "Cadastrar"} Produto</h2>

                <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input
                        id="name"
                        value={name}
                        onChange={event => setName(event.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Descrição</label>
                    <textarea id="description" value={description} rows="3" onChange={event => setDescription(event.target.value)} required />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Preço (R$)</label>
                    <input
                        placeholder="0,00"
                        type="number"
                        value={price}
                        onChange={event => setPrice(event.target.value)}
                        required
                    />
                </div>

                <PrimaryButton type="submit">Salvar</PrimaryButton>
            </form>
        </Modal>
    );
}