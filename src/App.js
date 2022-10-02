import React from "react";
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
// import {changeLanguageAction} from "./redux/reducer";

import './App.css';

import MainPage from "./page/Main.page";
import AboutPage from "./page/About.page";

import Text from "./components/Text";
import ReactFlagsSelect from 'react-flags-select';
import {callTranslation} from "./actions";

const translationMapper = {
    "UA": "ukraine_config",
    "TR": "turkish_config",
    "GB": "english_config"
}


function App() {
    const initialLanguage = useSelector(state => state.languageKey);
    const dispatch = useDispatch();

    async function handleSelectChange(value) {
    console.log(translationMapper[value])
        dispatch(callTranslation(translationMapper[value]))
    }



    const translationDropdown = <ReactFlagsSelect
                                    className="dropdown"
                                    selected={initialLanguage}
                                    countries={[...Object.keys(translationMapper)]}
                                    // onSelect={(code) => dispatch(changeLanguageAction(code.toLowerCase()))}
                                    onSelect={handleSelectChange}
                                    optionsSize={14}
                                />;

    return (
        <div className="App">
            <Router>
                <header>
                    <button>
                        <Link to="/">
                            <Text>main</Text>
                        </Link>
                    </button>
                    <button>
                        <Link to="/about">
                            <Text>about</Text>
                        </Link>
                    </button>
                    {translationDropdown}
                </header>
                <Routes>
                    <Route exact path="/" element={<MainPage/>}/>
                    <Route exact path="/about" element={<AboutPage/>}/>
                </Routes>
                {/*<footer>{translationDropdown}</footer>*/}
            </Router>
        </div>
    );
}

export default App;


