import englishConfig from "../english_config"

const  initialState = {
    languageKey: "GB",
    translations: {
        ...englishConfig
    }
}

const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return {
                ...state,
                translations: {
                   ...action.payload
                }
            }
        default:
            return state;
    }
}
// export const changeLanguageAction = (value) => ({type: CHANGE_LANGUAGE, payload: {selectedLanguageKey: value}});
export default reducer;

