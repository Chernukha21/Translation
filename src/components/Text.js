import React from 'react';
import {useSelector} from "react-redux";

const Text = ({tKey}) => {
    const translation = useSelector(state => state.translation) || {};
    console.log({tKey, translation})
    return <span>{translation[tKey]}</span>
};

export default Text;