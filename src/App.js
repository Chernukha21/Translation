import './App.css';
import Main from "./components/pages/Main.page";
import About from "./components/pages/About.page";
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import Text from "./components/Text";
import Dropdown from "./components/Dropdown";
import {languages} from "./translation";
import React,{useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeLanguageAction} from "./redux/reducer";



function App() {
    let languageKey = useSelector(state => state.selectedLanguageKey);
    const dispatch = useDispatch();

    function handleSelectChange(event) {
        dispatch(changeLanguageAction(event.target.value));
    }
    useEffect(() => {
        localStorage.setItem("languageKey", JSON.stringify(languageKey));
        console.log(localStorage.languageKey);
    },[languageKey]);
    useEffect(() => {
        languageKey  = JSON.parse(localStorage.getItem('languageKey'));
    }, []);

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

export default App;


