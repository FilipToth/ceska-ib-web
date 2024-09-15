import "assets/dropdown-item.css"
import { redirect } from "utils/helpers";

const DropdownItem = ({ text, url, icon, textColor = "black" }: { text: string, url: string, icon: string, textColor: string }) => {
    return (
        <div className="dropdown-item-wrapper" onClick={() => { redirect(url) }}>
            <img className="dropdown-item-image" src={icon}></img>
            <p className="dropdown-item-name" style={{ color: textColor }}>{text}</p>
        </div>
    );
}

export default DropdownItem;