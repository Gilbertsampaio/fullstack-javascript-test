import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useModal } from "../../hooks/useModal";
import { useProducts } from "../../hooks/useProducts";

import "./CardProduct.scss";

export function CardProduct({ product }) {

    const { removeProduct } = useProducts();
    const { handleOpenModalProduct } = useModal();

    async function handleDeleteProduct(id) {
        await removeProduct(id);
    }

    return (
        <tr key={product.id} className="product">
            <td>{product.name}</td>
            <td>
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(product.price)}
            </td>
            <td>{product.description}</td>
            <td>
                <div className="actions">
                    <button
                        title="Editar"
                        onClick={() => handleOpenModalProduct(product.id)}
                    >
                        <FiEdit />
                    </button>
                    <button
                        title="Excluir"
                        className="deleteProduct"
                        onClick={() => { if (window.confirm(`Deseja mesmo excluir o produto ${product.name}?`)) { handleDeleteProduct(product.id) } }}
                    >
                        <FiTrash2 />
                    </button>
                </div>
            </td>
        </tr>


    )

}