import { CardProduct } from "../Cards/CardProduct";
import { useProducts } from "../../hooks/useProducts";

import "./ListProducts.scss";

export default function ListProducts() {

    const { products } = useProducts();

    return (
        <main>
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
                    <tr className={products.length === 0 ? 'product' : 'product d-none'}>
                        <td colSpan={5} className="center">Não existem produtos cadastrados</td>
                    </tr>
                </tbody>
            </table>
        </main>
    )

}