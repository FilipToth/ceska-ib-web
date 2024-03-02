import "assets/dropdown-item.css"

const open = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
};

const DropdownItem = ({ text, redirect }: { text: string, redirect: string }) => {
    return (
        <div className="dropdown-item-wrapper" onClick={() => { open(redirect) }}>
            <img className="dropdown-item-image"></img>
            <p className="dropdown-item-name">{text}</p>
        </div>
    );
}

export default DropdownItem;