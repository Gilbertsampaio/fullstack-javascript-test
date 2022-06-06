import { FiPlus } from "react-icons/fi";
import { useModal } from "../hooks/useModal";
import { useProducts } from "../hooks/useProducts";
import { PrimaryButton } from "./Button/PrimaryButton";

import "./Header.scss";

export function Header() {
    const { products } = useProducts();
    const { handleOpenModalProduct } = useModal();

    return (
        <header>
            <div className="container">
            <h1>Produtos <span>({products.length <= 9 ? '0'+products.length : products.length})</span></h1>
            <PrimaryButton
                onClick={() => handleOpenModalProduct()}
            >
                <FiPlus />
                Adicionar produto
            </PrimaryButton>
            </div>
        </header>
    )
}