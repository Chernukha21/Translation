import React from 'react';
import useResolveTranslation from "../ResolveTranslation";

const Main = () => {
    return (
        <>
            <main>
                {useResolveTranslation("MAIN_PAGE_TITLE")}
                {useResolveTranslation("MAIN_PAGE_DESCRIPTION")}
            </main>
        </>
    );
};

export default Main;