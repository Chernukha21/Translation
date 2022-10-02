export async function callTranslation(customConfigPath) {
    return dispatch => {
        fetch(`https://raw.githubusercontent.com/Chernukha21/${customConfigPath}/main/translation.json`)
            .then(response => response.json())
            .then(translation => {
            dispatch(translation);
        }).catch(err => {
            console.log(err);
        })
    }
}
