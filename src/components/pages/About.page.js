import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Dropdown from "../Dropdown";
import {languages} from '../../translation';
import Text from "../Text";
import {changeLanguageAction} from "../../redux/reducer";

const AboutPage = ({options}) => {
    const languageKey = useSelector(state => state.selectedLanguageKey);
    return (
        <>
            <main>
                <Text languageKey={languageKey} translationKey="ABOUT_PAGE_TITLE"/>
                <Text languageKey={languageKey} translationKey="ABOUT_PAGE_CONTACT_TITLE"/>
            </main>
        </>
    );
};

export default AboutPage;