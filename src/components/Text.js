import React from 'react';
import {useSelector} from "react-redux";

const resolveTranslation = tKey => {
    const translation = useSelector(state => state.translation) || {};
    console.log({tKey, translation})
    return translation[tKey]
};

export default Text;