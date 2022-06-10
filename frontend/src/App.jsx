import React, { Component } from 'react';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { withRouter } from 'react-router-dom';
import { FiBox, FiHome, FiPhone, FiUser } from 'react-icons/fi';
import { Breadcrumb } from './components/Breadcrumb';
class App extends Component {

	render() {

		const menuitems = [
			{
				label: 'Home',
				icon: <FiHome />,
				command: () => [this.props.history.push('/'), this.props.history.push({ pagaberta: 'Home' })]
			},
			{
				label: 'Sobre',
				icon: <FiUser />,
				command: () => [this.props.history.push('/sobre'), this.props.history.push({ pagaberta: 'Sobre' })]
			},
			{
				label: 'Produtos',
				icon: <FiBox />,
				command: () => [this.props.history.push('/produtos'), this.props.history.push({ pagaberta: 'Produtos' })]
			},
			{
				label: 'Contato',
				icon: <FiPhone />,
				command: () => [this.props.history.push('/contato'), this.props.history.push({ pagaberta: 'Contato' })],
			}
		];

		return (
			<div className="App">
				<Header itensMenu={menuitems} />
				<Breadcrumb pag={menuitems} atual={this.props.history} />
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