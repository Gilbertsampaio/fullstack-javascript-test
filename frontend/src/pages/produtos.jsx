import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import ListProducts from "../components/List/ListProducts";
import { ModalProduct } from "../components/Modal/ModalProduct";
import { ModalProductConfirm } from "../components/Modal/ModalProductConfirm";
import { ModalProvider } from "../hooks/useModal";
import { ProductsProvider } from "../hooks/useProducts";

function App() {

	return (
		<>
			<ModalProvider>
				<ProductsProvider>
					<ListProducts />
					<ModalProduct />
					<ModalProductConfirm />
				</ProductsProvider>
			</ModalProvider>
		</>
	);
}

export default App;