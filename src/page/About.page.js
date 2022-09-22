import React from 'react';
import {useSelector} from "react-redux";
import Text from "../components/Text";

const AboutPage = ({options}) => {
    const languageKey = useSelector(state => state.selectedLanguageKey);
    return (
        <>
            <main>
                <Text languageKey={languageKey} translationKey="ABOUT_PAGE_CONTACT_TITLE"/>
            </main>
        </>
    );
};

export default AboutPage;