import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import Navbar from './Navbar';
import { useStaticQuery, graphql } from "gatsby"
import { PADDING_SIZE_CSS_EXPRESSION, CONTENT_MAX_WIDTH, Colors } from '../data/style'

const MainSection = ({ title, subTitle, textColor = '#000000' }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingBottom: PADDING_SIZE_CSS_EXPRESSION,
                maxWidth: CONTENT_MAX_WIDTH,
                width: '87.5%',
            }}
        >
            {title &&
                <h1
                    style={{
                        color: textColor,
                        paddingTop: 20,
                        fontFamily: 'Jost',
                        textAlign: 'center',
                        marginBottom: 0,
                        fontWeight: 700,
                        fontSize: '4.3vmax',
                    }}
                >
                    {title}
                </h1>
            }
            <p
                style={{
                    paddingTop: 10,
                    textAlign: 'center',
                    color: textColor,
                    fontFamily: 'Jost',
                    fontWeight: 500,
                    fontSize: '2.4vmax',
                }}
            >
                {subTitle}
            </p>
        </div>
    )
}

export const HelmetWithMetadata = ({pageTitle}) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                   title
                   description
                }
            }
        }
    `)
    const htmlTitle = pageTitle != null
        ? pageTitle + ' | ' + data.site.siteMetadata.title
        : data.site.siteMetadata.title
    return (
        <Helmet>
            <title>{htmlTitle}</title>
            <meta name="description" content={data.site.siteMetadata.description} />
        </Helmet>
    )
}

export const TopPart = ({
    icon,
    iconStyle,
    pageTitle,
    title,
    subTitle,
    style,
    textColor,
}) => (
    <Fragment>
        <HelmetWithMetadata pageTitle={pageTitle} />

        <div
            style={{
                width: '100%',
                backgroundColor: 'white',
                ...style,
            }}
        >
            <Navbar textColor={textColor} />
            {
                icon &&
                    <div style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 80,
                        ...iconStyle,
                    }}>
                        <div>
                            {icon}
                        </div>
                    </div>
            }
            <MainSection title={title} subTitle={subTitle} textColor={textColor} />
        </div>
    </Fragment>
)
