import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/sobre';
import Produtos from './pages/produtos';
import Contato from './pages/contatos';

import "./styles/global.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Router>
			<App>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/sobre" component={Sobre} />
					<Route path="/Produtos" component={Produtos} />
					<Route path="/contato" component={Contato} />
				</Switch>
			</App>
		</Router>
	</React.StrictMode>
)