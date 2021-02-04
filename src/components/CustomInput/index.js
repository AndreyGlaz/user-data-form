import React from "react";

import './index.css';

export default function (props) {
    const {inputType = "text", labelValue, ...otherProps} = props
    return (
        <div className="input-group">
            <input className="custom-input-input" type={inputType} required/>
            <label className="custom-input-label">{labelValue}</label>
        </div>
    )
};
