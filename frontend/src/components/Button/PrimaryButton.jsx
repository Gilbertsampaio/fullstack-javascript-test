import "./PrimaryButton.scss";

export function PrimaryButton({ children, ...rest }) {
    return (
        <button className="primaryButton" {...rest}>
            {children}
        </button>
    )
}