import { useProducts } from "../hooks/useProducts";
import "./Breadcrumb.scss";

export function Breadcrumb() {

    const { products } = useProducts();
    const s = products.length > 1 ? 's' : '';

    return (
        <div className="boxDescricao">
            <div>Administre as informações sobre os produtos 
                <span>
                    <a href="/">Home</a> / {products.length <= 9 && products.length !== 0 ? '0' + products.length : products.length} Produto{s}
                </span>
            </div>
        </div>
    )
}