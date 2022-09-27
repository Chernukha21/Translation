const  initialState = {
    selectedLanguageKey: 'gb',
}

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

