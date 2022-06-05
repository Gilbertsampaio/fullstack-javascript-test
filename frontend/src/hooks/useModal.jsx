import { createContext, useContext, useState } from "react";

const ModalContext = createContext({});

export function ModalProvider({children}) {
    const [isModalProductOpen, setIsModalProductOpen] = useState(false);
    const [idEditableProduct, setIdEditableProduct] = useState(null);

    function handleOpenModalProduct(idProduct = null) {
		setIsModalProductOpen(true);
        setIdEditableProduct(idProduct);
	}

	function handleCloseModalProduct() {
		setIsModalProductOpen(false);
        setIdEditableProduct(null);
	}

    return (
        <ModalContext.Provider value={{ idEditableProduct, isModalProductOpen, handleOpenModalProduct, handleCloseModalProduct }}>
            { children }
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);
    return context;
}