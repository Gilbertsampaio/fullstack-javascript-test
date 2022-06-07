import { FiPlus } from "react-icons/fi";
import { useModal } from "../hooks/useModal";
import { useProducts } from "../hooks/useProducts";
import { ModalButton } from "./Button/ModalButton";

import "./Header.scss";

export function Header() {
    const { products } = useProducts();
    const { handleOpenModalProduct } = useModal();

    return (
        <header>
            <div className="container">
            <h1>Produtos <span>({products.length <= 9 && products.length !== 0 ? '0'+products.length : products.length})</span></h1>
            <ModalButton className="primaryButton"
                onClick={() => handleOpenModalProduct(null, 0)}
            >
                <FiPlus />
                Adicionar produto
            </ModalButton>
            </div>
        </header>
    )
}