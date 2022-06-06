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
                </tbody>
            </table>
        </main>
    )

}