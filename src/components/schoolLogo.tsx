import "assets/school-logo.css"
import schoolLogo from 'assets/school-logo.png'
import React from "react";

const SchoolLogo = ({ style }: { style: React.CSSProperties | undefined }) => {
    return (
        <div className="school-logo-wrapper" style={style}>
            <img className="school-logo" src={schoolLogo}></img>
        </div>
    );
};

export default SchoolLogo;