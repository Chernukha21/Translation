import React from 'react';
import translation from "../translation";

const Text = ({translationKey, languageKey}) => {
    return (
        <div>{translation[translationKey][languageKey]}</div>
    );
};

export default Text;