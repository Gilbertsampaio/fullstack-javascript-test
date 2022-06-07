import { createContext, useContext, useState } from "react";

const ModalContext = createContext({});

export function ModalProvider({children}) {
    const [isModalProductOpen, setIsModalProductOpen] = useState(false);
    const [isModalProductConfirmOpen, setIsModalProductConfirmOpen] = useState(false);
    const [idEditableProduct, setIdEditableProduct] = useState(null);

    function handleOpenModalProduct(idProduct = null, confirm) {
        if(confirm === 0) {
            setIsModalProductOpen(true);
            setIdEditableProduct(idProduct);
        } else {
            setIsModalProductConfirmOpen(true);
            setIdEditableProduct(idProduct);
        }
	}

	function handleCloseModalProduct() {
		setIsModalProductOpen(false);
        setIdEditableProduct(null);
	}

    function handleCloseModalProductConfirm() {
		setIsModalProductConfirmOpen(false);
        setIdEditableProduct(null);
	}

    return (
        <ModalContext.Provider value={{ idEditableProduct, isModalProductOpen, handleOpenModalProduct, handleCloseModalProduct, isModalProductConfirmOpen, handleCloseModalProductConfirm }}>
            { children }
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);
    return context;
}