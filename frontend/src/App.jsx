import React, { Component } from 'react';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { withRouter } from 'react-router-dom';
import { FiBox, FiHome, FiPhone, FiUser } from 'react-icons/fi';
class App extends Component {

	render() {

		const menuitems = [
			{
				label: 'Home',
				icon: <FiHome />,
				command: () => this.props.history.push('/')
			},
			{
				label: 'Sobre',
				icon: <FiUser />,
				command: () => this.props.history.push('/sobre')
			},
			{
				label: 'Produtos',
				icon: <FiBox />,
				command: () => this.props.history.push('/produtos')
			},
			{
				label: 'Contato',
				icon: <FiPhone />,
				command: () => this.props.history.push('/contato')
			}
		];

		return (
			<div className="App">
				<Header itensMenu={menuitems} />
				<Footer />
				<div id="main">
					<main>
						<div id="content">
							{this.props.children}
						</div>
					</main>
				</div>
			</div>
		);
	}
}

export default withRouter(App);