import "./StylesButtons.scss";

export function SecundaryButton({ children, ...rest }) {
    return (
        <button className="secundaryButton" {...rest}>
            {children}
        </button>
    )
}