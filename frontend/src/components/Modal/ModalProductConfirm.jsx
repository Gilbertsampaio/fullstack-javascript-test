import { useState } from "react";
import { FiTrash, FiTrash2, FiX } from "react-icons/fi";
import Modal from "react-modal";
import { useModal } from "../../hooks/useModal";
import { useProducts } from "../../hooks/useProducts";
import { ModalButton } from "../Button/ModalButton";
import { DangerButton } from "../Button/DangerButton";

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
                className="react-modal-close del"
            >
                <FiX />
            </button>

            <form className="formProduct" onSubmit={handleFormProductConfirm}>
                <h2><FiTrash2 /> Excluir Produto</h2>

                <div className="form-group">Deseja mesmo excluir o produto <b>{name}</b>?</div>
                <div className="modalConfirm">
                    <div>
                        <ModalButton className="secundaryButton" type="reset"
                            onClick={handleCloseModalProductConfirm}
                        >
                            Cancelar
                        </ModalButton>
                    </div>
                    <div>
                        <DangerButton type="submit">Excluir</DangerButton>
                    </div>
                </div>
            </form>
        </Modal>
    );
}