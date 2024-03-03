import "assets/dropdown-item.css"

const open = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
};

const DropdownItem = ({ text, redirect, textColor = "black" }: { text: string, redirect: string, textColor: string }) => {
    return (
        <div className="dropdown-item-wrapper" onClick={() => { open(redirect) }}>
            <img className="dropdown-item-image"></img>
            <p className="dropdown-item-name" style={{ color: textColor }}>{text}</p>
        </div>
    );
}

export default DropdownItem;