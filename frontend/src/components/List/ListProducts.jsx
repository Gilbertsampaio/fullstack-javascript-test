import { CardProduct } from "../Cards/CardProduct";
import { useProducts } from "../../hooks/useProducts";
import { useModal } from "../../hooks/useModal";
import { ModalButton } from "../Button/ModalButton";
import { FiPlus } from "react-icons/fi";
import ReactTooltip from "react-tooltip";

import "./ListProducts.scss";

export default function ListProducts() {

    const { products } = useProducts();
    const { handleOpenModalProduct } = useModal();
    const totalProd = products ? products.length <= 9 && products.length !== 0 ? '0' + products.length : products.length : "";

    return (
        <>
            <div className="containerButton">
                <h2>Lista de Produtos <span>({totalProd})</span></h2>
                <ModalButton className="primaryButton"
                    onClick={() => handleOpenModalProduct(null, 0)}
                    data-tip="Cadastrar registro"
                    data-offset="{'top': 0, 'left': 0}"
                    onMouseLeave={() => {
                        setTimeout(() => ReactTooltip.hide(), 50);
                    }}
                >
                    <FiPlus />
                    Adicionar produto
                </ModalButton>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Descrição</th>
                        <th>Opção</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <CardProduct key={product.id} product={product} />
                    ))}
                    {products.length === 0 && <tr className="product">
                        <td colSpan={5} className="center">Não existem produtos cadastrados</td>
                    </tr>
                    }
                </tbody>
            </table>
        </>
    )
}