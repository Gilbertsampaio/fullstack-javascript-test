import { useModal } from "../hooks/useModal";
import { useProducts } from "../hooks/useProducts";
import { PrimaryButton } from "./Button/PrimaryButton";

import "./Header.scss";

export function Header() {
    const { products } = useProducts();
    const { handleOpenModalProduct } = useModal();

    return (
        <header>
            <h1>Produtos ({products.length})</h1>
            <PrimaryButton
                onClick={() => handleOpenModalProduct()}
            >
                Adicionar produto
            </PrimaryButton>
        </header>
    )
}