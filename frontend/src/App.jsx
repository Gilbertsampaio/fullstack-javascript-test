import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import ListProducts from "./components/List/ListProducts";
import { ModalProduct } from "./components/Modal/ModalProduct";
import { ModalProductConfirm } from "./components/Modal/ModalProductConfirm";
import { ModalProvider } from "./hooks/useModal";
import { ProductsProvider } from "./hooks/useProducts";

function App() {

	return (
		<ModalProvider>
				<ProductsProvider>
					<Header />
					<ListProducts />
					<Footer />
					<ModalProduct />
					<ModalProductConfirm />
				</ProductsProvider>
			</ModalProvider>
	);
}

export default App;
