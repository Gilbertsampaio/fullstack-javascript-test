import "./Breadcrumb.scss";


export function Breadcrumb(props) {

    const pagHome = props.pag[0].command;
    let pagAtual = "";

    if (props.atual.location.pagaberta) {
        pagAtual = props.atual.location.pagaberta
    } else {
        switch (props.atual.location.pathname) {
            case "/":
                pagAtual = "Home"
                break;
            case "/sobre":
                pagAtual = "Sobre"
                break;
            case "/produtos":
                pagAtual = "Produtos"
                break;
            case "/contato":
                pagAtual = "Contato"
                break;
            default:
                break;
        }
    }

    return (

        <div className="boxDescricao">
            <div>Administre as informações sobre os produtos
                <span>
                    <a onClick={pagHome}>Home</a> / {pagAtual}
                </span>
            </div>
        </div>
    )
}