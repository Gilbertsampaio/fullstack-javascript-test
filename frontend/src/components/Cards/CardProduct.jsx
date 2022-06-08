import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useModal } from "../../hooks/useModal";
import ReactTooltip from "react-tooltip";

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
                        onClick={() => handleOpenModalProduct(product.id, 0)}
                        data-tip="Cancelar exclusão"
                        data-offset="{'top': 0, 'left': 0}"
                        onMouseLeave={() => {
                            setTimeout(() => ReactTooltip.hide(), 50);
                        }}
                    >
                        <FiEdit />
                    </button>
                    <button
                        className="deleteProduct"
                        onClick={() => handleOpenModalProduct(product.id, 1)}
                        data-tip="Excluir registro"
                        data-offset="{'top': 0, 'left': 0}"
                        onMouseLeave={() => {
                            setTimeout(() => ReactTooltip.hide(), 50);
                        }}

                    >
                        <FiTrash2 />

                    </button>
                    <ReactTooltip />
                </div>
            </td>
        </tr>
    )
}