const initialState = {
    languageKey: "",
    translations: {}
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
    const customConfigPath = translationMapper[languageKey]
    return dispatch => {
        fetch(`https://raw.githubusercontent.com/Chernukha21/${customConfigPath}/master/translation.json`)
            .then(response => response.json())
            .then(translations => {
                console.log(translations);
                dispatch({
                    type: CHANGE_LANGUAGE, payload: {
                        translations,
                        languageKey
                    }
                });
            }).catch(err => {
            console.log(err);
        })
    }
}

export default reducer;

