import React,{useEffect} from 'react';
import useResolveTranslation from "../ResolveTranslation";
import {useSelector} from "react-redux";

const AboutPage = () => {
    const translation = useSelector(state => state.translation);

    useEffect(() => {
        document.title = translation.NAV_MENU_TITLE_ABOUT;
    },[translation.NAV_MENU_TITLE_ABOUT]);

    return (
        <>
            <main>
                {useResolveTranslation("ABOUT_PAGE_CONTACT_TITLE")}
            </main>
        </>
    );
};

export default AboutPage;