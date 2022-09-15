import './App.css';
import {useState} from "react";



function App() {
    const languages = [
        {value: "ua", title: "ukrainian"},
        {value: "en", title: "english"},
        {value: "arb", title: "arabian"},
    ];
    let translations = {
        title: {
            ua: "про",
            en: "about",
            arb: "about на арабском"
        },
        service: {
            ua: "послуги",
            en: "service",
            arb: "service на арабском"
        },
        order: {
            ua: "замовити",
            en: "order",
            arb: "order на арабском"
        }
    }

    let [languageKey, setLanguageKey] = useState('ua');
    function handleSelectChange(event) {
        setLanguageKey(event.target.value);
    }
    const values = Object.values(translations);
    console.log(values);

    return (
        <div className="App">
            <div>{languageKey}</div>
            <select value={languageKey} onChange={handleSelectChange}>
                {languages.map(e =><option key={e.value} value={e.value}>{e.title}</option>)}
            </select>
            <div>{translations.title[languageKey]}</div>
            <div>{translations.service[languageKey]}</div>
            <div>{translations.order[languageKey]}</div>
        </div>
    );
}

export default App;


function Text(props) {
//         return <div>{translation[props.key][selectedLanguageKey]}
//         }
//     translations.title ==  translations[translationTitle]  == translations["title"]
//     alex.car.name == alex['car']['name'] == alex[key1][key2]
    {/*"MAIN.PAGE.TITLE": {},*/}
    {/*"MAIN.PAGE.DESCRIPTION": {},*/}
    {/*"ABOUT.PAGE.TITLE": {},*/}
    {/*"ABOUT.PAGE.CONTACT.TITLE": {},*/}
//"NAV.MENU.TITLE.ABOUT": {},
//"NAV.MENU.TITLE.MAIN": {},