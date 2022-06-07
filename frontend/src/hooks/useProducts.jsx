import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const ProductsContext = createContext({});

export function ProductsProvider({children}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    async function getProducts() {
        const { data } = await api.get("/product");
        setProducts(data);
    }

    async function createProduct(data) {
        await api.post("/product", {
            ...data
        });
        getProducts();
    }

    async function removeProduct(id) {
        const response = await api.delete(`/product/${id}`);
        getProducts();
        return {
            message: response.data.message,
            status:  response.status
        };
    }

    async function updateProduct(id, data) {
        await api.put(`/product/${id}`, {
            ...data
        });
        getProducts();
    }

    return (
        <ProductsContext.Provider value={{ products, createProduct, removeProduct, updateProduct }}>
            { children }
        </ProductsContext.Provider>
    );
}

export function useProducts() {
    const context = useContext(ProductsContext);
    return context;
}