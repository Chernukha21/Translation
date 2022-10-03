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
    const titles = useSelector(state => state.translations);
    const dispatch = useDispatch();

    async function handleSelectChange(value) {
        dispatch(callTranslation(value))
    }


    const translationDropdown = <ReactFlagsSelect
        className="dropdown"
        selected={initialLanguage}
        countries={["GB", "TR", "UA"]}
        onSelect={handleSelectChange}
        optionsSize={14}
    />;

    return (
        <div className="App">
            <Router>
                <header>
                    <button>
                        <Link to="/">
                            <Text children={titles}>{titles.NAV_MENU_TITLE_MAIN}</Text>
                        </Link>
                    </button>
                    <button>
                        <Link to="/about">
                            <Text children={titles}>{titles.NAV_MENU_TITLE_ABOUT}</Text>
                        </Link>
                    </button>
                    {translationDropdown}
                </header>
                <Routes>
                    <Route exact path="/" element={<MainPage/>}/>
                    <Route exact path="/about" element={<AboutPage/>}/>
                </Routes>
                <footer>{translationDropdown}</footer>
            </Router>
        </div>
    );
}

export default App;


