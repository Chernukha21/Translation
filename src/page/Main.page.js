import React from 'react';
import Text from "../components/Text";
import {useSelector} from "react-redux";

const Main = () => {
    let {MAIN_PAGE_TITLE, MAIN_PAGE_DESCRIPTION} = useSelector(state => state.translations);
    return (
        <>
            <main>
                <Text >{MAIN_PAGE_TITLE} </Text>
                <Text>{MAIN_PAGE_DESCRIPTION}</Text>
            </main>
        </>
    );
};

export default Main;