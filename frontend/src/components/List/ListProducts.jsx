import { CardProduct } from "../Cards/CardProduct";
import { useProducts } from "../../hooks/useProducts";

import "./ListProducts.scss";

export default function ListProducts() {

    const { products } = useProducts();

    return (
        <div className="listProducts">
            {products.map(product => (
                <CardProduct key={product.id} product={product} />
            ))}
        </div>
    )

}