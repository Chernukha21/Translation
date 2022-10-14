import React,{useEffect} from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import './App.css';
import MainPage from "./page/Main.page";
import AboutPage from "./page/About.page";
import ResolveTranslation from "./ResolveTranslation";
import ReactFlagsSelect from 'react-flags-select';
import {callTranslation} from "./redux/reducer";
import Frame from "./Frame";


const Portal = (props) => {
    const node = document.querySelector('div');
    document.body.appendChild(node);
    return ReactDOM.createPortal(props.children, node);
}



function App() {
    const initialLanguage = useSelector(state => state.languageKey);
    const dispatch = useDispatch();
    const translation = useSelector(state => state.translation);

    useEffect(() => {
        document.title = translation.MAIN_PAGE_TITLE;
    },[translation.MAIN_PAGE_TITLE]);

    function handleSelectChange(languageKey) {
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
                            {ResolveTranslation("NAV_MENU_TITLE_MAIN")}
                        </Link>
                    </button>
                    <button>
                        <Link to="/about">
                            {ResolveTranslation("NAV_MENU_TITLE_ABOUT")}
                        </Link>
                    </button>
                    {renderTranslationDropdown()}
                </header>
                <Routes>
                    <Route exact path="/" element={<MainPage/>}/>
                    <Route exact path="/about" element={<AboutPage/>}/>
                </Routes>
                <footer>{renderTranslationDropdown('footer_dropdown')}</footer>
            </Router>
            <Portal>
                <Frame/>
            </Portal>
        </div>
    );
}

export default App;


