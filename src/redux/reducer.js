import translation from "../english_config";

export const initialState = {
    languageKey: 'GB',
    translation
}

const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

const translationMapper = {
    "UA": "ukraine_config",
    "TR": "turkish_config",
    "GB": "english_config"
}

export function callTranslation(languageKey) {
    const customConfigPath = translationMapper[languageKey];
    return dispatch => {
        fetch(`https://raw.githubusercontent.com/Chernukha21/${customConfigPath}/master/translation.json`)
            .then(response => response.json())
            .then(translation => {
                dispatch({
                    type: CHANGE_LANGUAGE, payload: {
                        translation,
                        languageKey
                    }
                });
            }).catch(err => {
            console.log(err);
        })
    }
}
export default reducer;

