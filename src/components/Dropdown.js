import React from 'react';
import { Gb,Ua,Sa } from "react-flags-select";
// countries={[...languages.map(el => el.value.toUpperCase())]}

const Dropdown = ({options=[],changeHandler, defaultValue}) => {
    return (
        <select className="select" onChange={changeHandler} value={defaultValue}>
            {options.map(option => <option key={option.value} value={option.value}>{option.value}</option>)}
        </select>
    );
};

export default Dropdown;