import React, {useEffect, useState} from 'react';
import ResolveTranslation from "../ResolveTranslation";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";


const AboutPage = () => {
    const translation = useSelector(state => state.translation);
    useEffect(() => {
        document.title = translation.NAV_MENU_TITLE_ABOUT;
    },[translation.NAV_MENU_TITLE_ABOUT]);

    return (
        <>
            <main>
                {ResolveTranslation("ABOUT_PAGE_CONTACT_TITLE")}
            </main>
        </>
    );
};

export default AboutPage;