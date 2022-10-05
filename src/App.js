import React from "react";
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import './App.css';

import MainPage from "./page/Main.page";
import AboutPage from "./page/About.page";

import Text from "./components/Text";
import ReactFlagsSelect from 'react-flags-select';
import {callTranslation} from "./redux/reducer";

function App() {
    const initialLanguage = useSelector(state => state.languageKey);
    const dispatch = useDispatch();

    async function handleSelectChange(languageKey) {
        dispatch(callTranslation(languageKey))
    }

    const renderTranslationDropdown = (className) => (
        <ReactFlagsSelect
            className={`dropdown ${className}`}
            selected={initialLanguage}
            countries={["GB", "TR", "UA"]}
            onSelect={handleSelectChange}
            optionsSize={14}
        />
    );

    return (
        <div className="App">
            <Router>
                <header>
                    <button>
                        <Link to="/">
                            <Text tKey="NAV_MENU_TITLE_MAIN" />
                        </Link>
                    </button>
                    <button>
                        <Link to="/about">
                            <Text tKey="NAV_MENU_TITLE_ABOUT" />
                        </Link>
                    </button>
                    {renderTranslationDropdown()}
                </header>
                <Routes>
                    <Route exact path="/" element={<MainPage/>}/>
                    <Route exact path="/about" element={<AboutPage/>}/>
                </Routes>
                <iframe src={`https://chernukha21.github.io/query/?title=${Text({tKey: 'BANNER_TITLE'})}`} frameborder="0"></iframe>
                <footer>{renderTranslationDropdown('footer_dropdown')}</footer>
            </Router>
        </div>
    );
}

export default App;


