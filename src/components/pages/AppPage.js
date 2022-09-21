import React,{useEffect} from "react";
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import Main from "./Main.page";
import About from "./About.page";
import Text from "../Text";
import Dropdown from "../Dropdown";
import {languages} from "../../translation";
import {changeLanguageAction} from "../../redux/reducer";
import './App.css';


function AppPage() {
    let languageKey = useSelector(state => state.selectedLanguageKey);
    const dispatch = useDispatch();
    function handleSelectChange(event) {
        dispatch(changeLanguageAction(event.target.value));
    }


    return (
        <div className="App">
            <Router>
                <header>
                    <button>
                        <Link exact to="/">
                            <Text translationKey="NAV_MENU_TITLE_MAIN" languageKey={languageKey}/>
                        </Link>
                    </button>
                    <button>
                        <Link exact to="/about">
                            <Text translationKey="NAV_MENU_TITLE_ABOUT" languageKey={languageKey}/>
                        </Link>
                    </button>
                    <Dropdown options={languages} value={languageKey} changeHandler={handleSelectChange}/>
                </header>
                <Routes>
                    <Route exact path="/" element={<Main/>}/>
                    <Route exact path="/about" element={<About/>}/>
                </Routes>
                <footer>
                    <Dropdown options={languages} value={languageKey} changeHandler={handleSelectChange}/>
                </footer>
            </Router>
        </div>
    );
}

export default AppPage;


