import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {changeLanguageAction} from "./redux/reducer";

import './App.css';

import MainPage from "./page/Main.page";
import AboutPage from "./page/About.page";

import Text from "./components/Text";
import Dropdown from "./components/Dropdown";

import defaultTranslation from "./translation";
import {customConfigPath} from "./config";


function App() {
    let languageKey = useSelector(state => state.selectedLanguageKey);
    const [languages, setLanguages] = useState([defaultTranslation.language]);
    const [translations, setTranslations] = useState(defaultTranslation);
    const dispatch = useDispatch();

    function handleSelectChange(event) {
        dispatch(changeLanguageAction(event.target.value));
    }

    useEffect(() => {
        async function callTranslation() {
            const response = await fetch(`https://raw.githubusercontent.com/Chernukha21/${customConfigPath}/main/translation.json`)
            const customTranslation = await response.json();
            let keys = Object.keys(defaultTranslation)
            keys = keys.filter(key => key !== 'language');
            const translation = {};
            keys.forEach(key => {
                translation[key] = Object.assign(defaultTranslation[key], customTranslation[key]);
            })
            const languages = [
                customTranslation['language'], defaultTranslation['language']
            ]
            setLanguages(languages);
            setTranslations(translation);
        }
        callTranslation();
    }, [])

    const translationDropdown = <Dropdown options={languages} value={languageKey} changeHandler={handleSelectChange}/>;
    return (
        <div className="App">
            <Router>
                <header>
                    <button>
                        <Link to="/">
                            <Text translationKey="NAV_MENU_TITLE_MAIN" />
                        </Link>
                    </button>
                    <button>
                        <Link to="/about">
                            <Text translationKey="NAV_MENU_TITLE_ABOUT" />
                        </Link>
                    </button>
                    {translationDropdown}
                </header>
                <Routes>
                    <Route exact path="/" element={<MainPage/>}/>
                    <Route exact path="/about" element={<AboutPage/>}/>
                </Routes>
                <footer>
                    {translationDropdown}
                </footer>
            </Router>
        </div>
    );
}

export default App;


