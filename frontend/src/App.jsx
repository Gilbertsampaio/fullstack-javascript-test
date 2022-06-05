import { Header } from "./components/Header";
import ListProducts from "./components/List/ListProducts";
import { ModalProduct } from "./components/Modal/ModalProduct";
import { ModalProvider } from "./hooks/useModal";
import { ProductsProvider } from "./hooks/useProducts";

function App() {

	return (
		<ModalProvider>
			<ProductsProvider>
				<div className="container">
					<Header />
					<ListProducts />
				</div>
				<ModalProduct />
			</ProductsProvider>
		</ModalProvider>
	);
}

export default App;
