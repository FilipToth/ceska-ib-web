import 'assets/engaged-button.css'

const EngagedButton = ({ text, onClick, additionalStyle }) => {
    return (
        <div className="engaged-button" onClick={onClick} style={additionalStyle}>
            <p1 className="engaged-button-text">{text}</p1>
        </div>
    );
}

export default EngagedButton;