import React from 'react';
import ResolveTranslation from './ResolveTranslation';
const Frame = () => {
    const bannerTitle = ResolveTranslation('BANNER_TITLE');
    return (
        <div className="frame">
            <iframe src={`https://chernukha21.github.io/query/?title=${bannerTitle}`} width="100%" height="100%"></iframe>
        </div>
    )
};

export default Frame;