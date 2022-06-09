import { FiHome, FiPhone, FiUser } from "react-icons/fi";
import logo from "../img/logo.png";
import "./Header.scss";

export function Header() {

    return (
        <header>
            <div className="container">
                <img src={logo} alt="Logo" />
                <ul>
                    <li><a href="./"><FiHome /> Home Inicial</a></li>
                    <li><a href="./"><FiUser /> Conheça-nos</a></li>
                    <li><a href="./"><FiPhone /> Contatos</a></li>
                </ul>
            </div>
        </header>
    )
}