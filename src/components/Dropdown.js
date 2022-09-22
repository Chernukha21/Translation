import React from 'react';

const Dropdown = ({options=[],changeHandler, value}) => {
    return (
        <select onChange={changeHandler} value={value}>
            {options.map(option => <option key={option.value} value={option.value}>{option.value}</option>)}
        </select>
    );
};

export default Dropdown;