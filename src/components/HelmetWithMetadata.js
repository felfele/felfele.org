import React from 'react';
import Helmet from 'react-helmet';

export const HelmetWithMetadata = ({ pageTitle, imageSrc, siteMetadata }) => {
    const meta = siteMetadata;
    const htmlTitle = pageTitle != null
        ? pageTitle
        : meta.title;
    const name = meta.name != null
        ? meta.name
        : meta.title;
    const image = meta.siteUrl + imageSrc;
    return (
        <Helmet>
            <title>{htmlTitle}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <meta name="description" content={meta.description} />
            <meta property="og:title" content={meta.title} />
            <meta property="og:site_name" content={name} />
            <meta property="og:description" content={meta.description} />
            <meta property="og:image" content={image} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@FelfeleOrg" />
            <meta name="twitter:title" content={meta.title} />
            <meta name="twitter:description" content={meta.description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};
