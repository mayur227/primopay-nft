import React from 'react';
import { Helmet } from 'react-helmet';

import faviconUrl from '../../../assets/images/favicon/favicon.ico';
import appletouchicon from '../../../assets/images/favicon/apple-touch-icon.png';
import icon32 from '../../../assets/images/favicon/favicon-32x32.png';
import icon16 from '../../../assets/images/favicon/favicon-16x16.png';
import manifest from '../../../assets/images/favicon/site.webmanifest';
import maskicon from '../../../assets/images/favicon/safari-pinned-tab.svg';

const HeadTag = (props) => {
    const {pageTitle} = props;
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{`PrimoPay NFT :: ${pageTitle}`}</title>
        </Helmet>
    )
}

export default HeadTag;



