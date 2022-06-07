import "./StylesButtons.scss";

export function ModalButton({ children, ...rest }) {
    return (
        <button {...rest}>
            {children}
        </button>
    )
}