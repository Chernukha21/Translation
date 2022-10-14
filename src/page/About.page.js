import React,{useEffect} from 'react';
import ResolveTranslation from "../ResolveTranslation";
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
const AboutPage = () => {
    const translation = useSelector(state => state.translation);
    const [searchParams, setSearchParams] = useSearchParams({});
    setSearchParams({ hello: "world"});
    console.log(searchParams);
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