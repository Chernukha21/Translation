import React from 'react';
import {useSelector} from "react-redux";
import Text from "../components/Text";

const AboutPage = ({options}) => {
    const{ABOUT_PAGE_CONTACT_TITLE}  = useSelector(state => state.translations);

    console.log(ABOUT_PAGE_CONTACT_TITLE)
    return (
        <>
            <main>
                <Text>{ABOUT_PAGE_CONTACT_TITLE}</Text>
            </main>
        </>
    );
};

export default AboutPage;