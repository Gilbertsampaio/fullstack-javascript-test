import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useModal } from "../../hooks/useModal";

import "./CardProduct.scss";

export function CardProduct({ product }) {

    const { handleOpenModalProduct } = useModal();

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
                        onClick={() => handleOpenModalProduct(product.id, 0)}
                    >
                        <FiEdit />
                    </button>
                    <button
                        title="Excluir"
                        className="deleteProduct"
                        onClick={() => handleOpenModalProduct(product.id, 1)}
                    >
                        <FiTrash2 />
                    </button>
                </div>
            </td>
        </tr>


    )

}