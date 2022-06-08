import ReactTooltip from "react-tooltip";
import { FaWhatsapp } from "react-icons/fa";
import "./Footer.scss";

export function Footer() {
    return (
        <footer>
            <div className="rodape">
                Projeto para Desenvolvedor Pleno JAVASCRIPT
                <a
                    target="_blank"
                    href="https://wa.me/48999113040"
                    rel="noreferrer"
                    data-tip="Entre em contato com o Desenvolvedor"
                    data-offset="{'top': 0, 'left': 0}"
                    data-place={'left'}
                    onMouseLeave={() => {
                        setTimeout(() => ReactTooltip.hide(), 50);
                    }}>
                    <FaWhatsapp /> Gilbert Sampaio
                </a>
            </div>
        </footer>
    )
}