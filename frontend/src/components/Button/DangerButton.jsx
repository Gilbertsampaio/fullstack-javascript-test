import "./StylesButtons.scss";

export function DangerButton({ children, ...rest }) {
    return (
        <button className="dangerButton" {...rest}>
            {children}
        </button>
    )
}