import React from "react";

import './index.css';

export default function (props) {
    const {
        inputType = "text",
        labelValue,
        isRequired = false,
        warningMessage = "Поле является обязательным",
        name,
        setData,
        validation,
        errors = ["123"],
        ...otherProps
    } = props
    return (
        <div className="input-group">
            <input onChange={e => setData(state => ({
                ...state,
                [name]: e.target.value,
                validations: validation ? state.validations.push({field: name, validation: validation}) : state.validations
            }))} name="bare"
                   className="custom-input-input" type={inputType} required/>
            <label className="custom-input-label">{labelValue}</label>
            {errors.map(message => <span className="custom-input-error">{message}</span>)}
        </div>
    )
};
