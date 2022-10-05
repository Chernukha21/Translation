import React from 'react';
import useResolveTranslation from "../useResolveTranslation";

const AboutPage = ({options}) => {
    return (
        <>
            <main>
                {useResolveTranslation("ABOUT_PAGE_CONTACT_TITLE")}
            </main>
        </>
    );
};

export default AboutPage;