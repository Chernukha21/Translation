import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Dropdown from "./Dropdown";
import {languages} from './Main';
import Translation from "../translation";
import Text from "./Text";
import {changeLanguageAction} from "../redux/reducer";
const About = ({options}) => {
    const languageKey = useSelector(state => state.selectedLanguageKey);
    const dispatch = useDispatch();
    function handleSelectChange(event) {
        dispatch(changeLanguageAction(event.target.value));
    }
    return (
        <>
            <header>
                <Dropdown options={languages} changeHandler={handleSelectChange}/>
                <button><Link to="/">Back</Link></button>
            </header>
            <main>
                <Text languageKey={languageKey} translationKey="ABOUT_PAGE_TITLE"/>
                <Text languageKey={languageKey} translationKey="ABOUT_PAGE_CONTACT_TITLE"/>
            </main>
            <footer>
                <Dropdown options={languages}/>
            </footer>
        </>
    );
};

export default About;