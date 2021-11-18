import React from 'react';
import logo from "../../../assets/teamtreehouselogo.png";
function TechdegreeToggle() {
    return ( 
        <div className="techdegree-toggle side-panel-child">
            <div className="td-toggle-info-container">
                <img src={logo} alt="" />
                <p className="current-td-copy">Frontend Web development TD</p>
                <i className="fas fa-angle-down"></i>
                <div className="td-toggle-dropdown">
                    <ul>
                        <li>Frontend Web development TD</li>
                        <li>Web development TD</li>
                    </ul>
                </div>
            </div>
        </div>
     );
}

export default TechdegreeToggle;