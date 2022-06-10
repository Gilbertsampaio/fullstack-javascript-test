
import "./Menubar.scss";

export function Menubar(props) {

    return (
        <ul>
            {props.menu.map(menuItem => (
                <li key={menuItem.label}>
                    <a onClick={menuItem.command}>{menuItem.icon} {menuItem.label}</a>
                </li>
            ))}
        </ul>
    )
}