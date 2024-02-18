import React from 'react';
import 'assets/engaged-button.css'

const EngagedButton = ({ text, onClick, additionalStyle }: { text: string, onClick: React.MouseEventHandler, additionalStyle: React.CSSProperties }) => {
    return (
        <div className="engaged-button" onClick={onClick} style={additionalStyle}>
            <h1 className="engaged-button-text">{text}</h1>
        </div>
    );
}

export default EngagedButton;