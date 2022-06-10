import { Menubar } from "./Menubar";
import logo from "../img/logo.png";
import "./Header.scss";

export function Header(props) {

    return (
        <header>
            <div className="container">
                <a href="./"><img src={logo} alt="Logo" /></a>
                <Menubar menu={props.itensMenu} />
            </div>
        </header>
    )
}