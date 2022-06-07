import "./StylesButtons.scss";

export function SuccessButton({ children, ...rest }) {
    return (
        <button className="successButton" {...rest}>
            {children}
        </button>
    )
}