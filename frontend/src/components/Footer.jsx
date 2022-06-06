import { FaWhatsapp } from "react-icons/fa";
import "./Footer.scss";

export function Footer() {
    return (
        <footer>
            <div className="rodape">
                Projeto para Desenvolvedor Pleno JAVASCRIPT <a target="_blank" href="https://wa.me/48999113040" rel="noreferrer"><FaWhatsapp /> Gilbert Sampaio</a>
            </div>
        </footer>
    )
}