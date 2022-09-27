import React from 'react';
import {useSelector} from "react-redux";

import translation from "../translation";

const Text = ({translationKey}) => {
    let languageKey = useSelector(state => state.selectedLanguageKey);

    return <div>{translation[translationKey][languageKey] || `translation doesn't exist`}</div>
};

export default Text;