import React from 'react';
import {useSelector} from "react-redux";

const useResolveTranslation = tKey => {
    const translation = useSelector(state => state.translation) || {};
    console.log({tKey, 'tt':translation[tKey], translation})
    return translation[tKey]
};

export default useResolveTranslation;