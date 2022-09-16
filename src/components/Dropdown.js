import React from 'react';

const Dropdown = ({options,changeHandler}) => {
    return (
        <select onChange={changeHandler}>
            {options.map(option => <option key={option.value} value={option.value}>{option.title}</option>)}
        </select>
    );
};

export default Dropdown;