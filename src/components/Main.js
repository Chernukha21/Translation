import React,{useEffect} from 'react';
import Text from "./Text";
import Dropdown from "./Dropdown";
import {useDispatch, useSelector} from "react-redux";
import {changeLanguageAction} from '../redux/reducer';
import {Link} from "react-router-dom";

export const languages = [
    {value: "ua", title: "ukrainian"},
    {value: "en", title: "english"},
    {value: "arb", title: "arabian"},
];
const Main = () => {
    let languageKey = useSelector(state => state.selectedLanguageKey);
    useEffect(() => {
        localStorage.setItem("languageKey", JSON.stringify(languageKey));
        console.log(localStorage.languageKey);
    },[languageKey]);
    useEffect(() => {
        languageKey  = JSON.parse(localStorage.getItem('items'));
    }, []);
    const dispatch = useDispatch();
    function handleSelectChange(event) {
        dispatch(changeLanguageAction(event.target.value));
    }
    return (
        <>
            <header>
                <button><Link exact to="/"><Text translationKey="NAV_MENU_TITLE_MAIN" languageKey={languageKey}/></Link>
                </button>
                <button><Link exact to="/about"><Text translationKey="NAV_MENU_TITLE_ABOUT" languageKey={languageKey}/></Link>
                </button>
                <Dropdown options={languages} value={languageKey} changeHandler={handleSelectChange}/>
            </header>
            <main>
                <Text translationKey="MAIN_PAGE_TITLE" languageKey={languageKey}/>
                <Text translationKey="MAIN_PAGE_DESCRIPTION" languageKey={languageKey}/>
            </main>
            <footer>
                <Dropdown options={languages} value={languageKey} changeHandler={handleSelectChange}/>
            </footer>
        </>
    );
};

export default Main;