import "./Breadcrumb.scss";

export function Breadcrumb(props) {

    const totalProd = props.totalProd ? props.totalProd.length <= 9 && props.totalProd.length !== 0 ? '0' + props.totalProd.length : props.totalProd.length : "";
    const s = totalProd > 1 ? 's' : '';
    const tituloPag = props.pag + s;

    return (
        <div className="boxDescricao">
            <div>Administre as informações sobre os produtos
                <span>
                    <a href="/">Home</a> / {totalProd} {tituloPag}
                </span>
            </div>
        </div>
    )
}