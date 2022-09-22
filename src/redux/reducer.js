import defaultTranslation from "../translation";
import {customConfigPath} from "../config";
const  initialState = {
    selectedLanguageKey: 'en',
}
console.log({initialState});
const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return {
                ...state,
                selectedLanguageKey: action.payload.selectedLanguageKey
            }
        default:
            return state;
    }
}
export const changeLanguageAction = (value) => ({type: CHANGE_LANGUAGE, payload: {selectedLanguageKey: value}});
export default reducer;


// async function getTranslation() {
//     const response = await fetch(`https://raw.githubusercontent.com/Chernukha21/${customConfigPath}/main/translation.json`)
//     const customTranslation = await response.json();
//     let keys = Object.keys(defaultTranslation)
//     keys = keys.filter(key => key !== 'language');
//     const translation = {};
//     keys.forEach(key => {
//         translation[key] = Object.assign(defaultTranslation[key], customTranslation[key]);
//     })
//     const languages = [
//         customTranslation['language'],defaultTranslation['language']
//     ]
//     return {
//         languages,
//         translation
//     };
// }