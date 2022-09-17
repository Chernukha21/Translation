import React from 'react';
import Text from "../Text";
import {useSelector} from "react-redux";

const Main = () => {
    let languageKey = useSelector(state => state.selectedLanguageKey);
    return (
        <>
            <main>
                <Text translationKey="MAIN_PAGE_TITLE" languageKey={languageKey}/>
                <Text translationKey="MAIN_PAGE_DESCRIPTION" languageKey={languageKey}/>
            </main>
        </>
    );
};

export default Main;