import React from 'react';
function ValidatorList() {
    return ( 
        <div className="validator-list side-panel-child">
            <ul>
                <li>
                    <a href="" target="_blank">
                        <p className="link-title">HTML Validator</p>
                        <p className="link">https://validator.w3.or.....</p>
                    </a>
                </li>
                <li>
                    <a href="" target="_blank">
                        <p className="link-title">CSS Validator</p>
                        <p className="link">https://validator.w3.or.....</p>
                    </a>
                </li>
                <li>
                    <a href="" target="_blank">
                        <p className="link-title">JavaScript Validator</p>
                        <p className="link">https://validator.w3.or.....</p>
                    </a>
                </li>
            </ul>
        </div>
     );
}

export default ValidatorList;