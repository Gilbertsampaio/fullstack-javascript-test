import { useState } from "react";
import { FiX } from "react-icons/fi";
import Modal from "react-modal";
import { useModal } from "../../hooks/useModal";
import { useProducts } from "../../hooks/useProducts";
import { PrimaryButton } from "../Button/PrimaryButton";
import { SecundaryButton } from "../Button/SecundaryButton";

import "./ModalProduct.scss";

Modal.setAppElement('*');

export function ModalProductConfirm() {
    const { products, removeProduct } = useProducts();

    async function handleDeleteProduct(id) {
        await removeProduct(id);
    }

    const { idEditableProduct, isModalProductConfirmOpen, handleCloseModalProductConfirm } = useModal();

    const [id, setId] = useState(null);
    const [name, setName] = useState("");


    async function handleFormProductConfirm(event) {
        event.preventDefault();
        handleDeleteProduct(id);
        handleCloseModalProductConfirm();
    }

    function handleOnAfterOpen() {
        const { id, name } = products.find(p => p.id === idEditableProduct);
        setId(id);
        setName(name);
    }

    return (
        <Modal
            isOpen={isModalProductConfirmOpen}
            onRequestClose={handleCloseModalProductConfirm}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            onAfterOpen={handleOnAfterOpen}
        >
            <button
                type="button"
                onClick={handleCloseModalProductConfirm}
                className="react-modal-close"
            >
                <FiX />
            </button>

            <form className="formProduct" onSubmit={handleFormProductConfirm}>
                <h2>Excluir Produto</h2>

                <div className="form-group">Deseja mesmo excluir o produto <b>{name}</b>?</div>
                <div className="modalConfirm">
                    <div>
                        <SecundaryButton type="reset"
                            onClick={handleCloseModalProductConfirm}
                        >
                            Cancelar
                        </SecundaryButton>
                    </div>
                    <div>
                        <PrimaryButton type="submit">Excluir</PrimaryButton>
                    </div>
                </div>
            </form>
        </Modal>
    );
}