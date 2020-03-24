import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import '../styles/styles.css';
import '../styles/fonts.css';

import Navbar from './Navbar';
import { useStaticQuery, graphql } from "gatsby"
import { VERTICAL_PADDING, CONTENT_MAX_WIDTH, Colors } from '../data/style'


const TitleContainer = ({ children, style }) => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: CONTENT_MAX_WIDTH,
            width: '87.5%',
            ...style,
        }}
    >{children}
    </div>
)

const Title = ({ title, style }) => (
    <Fragment>
    {
        title &&
            <TitleContainer style={style} >
                <h1
                    style={{
                        color: 'black',
                        fontFamily: 'Jost',
                        marginTop: 0,
                        marginBottom: 0,
                        paddingTop: VERTICAL_PADDING,
                        fontWeight: 700,
                        fontSize: 'calc(1.2rem + 2.4vmin)',
                    }}
                >
                    {title}
                </h1>
            </TitleContainer>
    }
    </Fragment>
)

const SubTitle = ({ subTitle, style }) => (
    <Fragment>
    {
        subTitle &&
            <TitleContainer style={style} >
                <h2
                    style={{
                        paddingTop: VERTICAL_PADDING,
                        color: 'black',
                        fontFamily: 'Jost',
                        fontWeight: 500,
                        fontSize: 'calc(1.1rem + 1.7vmin)',
                        marginBottom: 0,
                        marginTop: 0,
                    }}
                >
                    {subTitle}
                </h2>
            </TitleContainer>
    }
    </Fragment>
)

export const HelmetWithMetadata = ({pageTitle, link}) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                   title
                   description
                }
            }
            felfeleImage: file(
                relativePath: { eq: "felfele-illustration.png" },
                sourceInstanceName: { eq: "images" }
                ) {
                childImageSharp {
                    sizes(maxWidth: 1000) {
                        src
                    }
                }
            }
        }
    `)
    const htmlTitle = pageTitle != null
        ? pageTitle + ' | ' + data.site.siteMetadata.title
        : data.site.siteMetadata.title
    return (
        <Helmet link={link}>
            <title>{htmlTitle}</title>
            <meta name="description" content={data.site.siteMetadata.description} />
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <meta property="og:title" content={htmlTitle}/>
            <meta property="og:site_name" content={data.site.siteMetadata.title}/>
            <meta property="og:description" content={data.site.siteMetadata.description}/>
            <meta property="og:image" content={`${data.felfeleImage.childImageSharp.sizes.src}`}/>
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:site" content="@FelfeleOrg"/>
            <meta name="twitter:title" content={htmlTitle}/>
            <meta name="twitter:description" content={data.site.siteMetadata.description}/>
            <meta name="twitter:image" content={`${data.felfeleImage.childImageSharp.sizes.src}`}/>
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
    titleStyle,
}) => (
    <Fragment>
        <HelmetWithMetadata pageTitle={pageTitle} />

        <div
            style={{
                width: '100%',
                backgroundColor: 'white',
                paddingBottom: VERTICAL_PADDING,
                ...style,
            }}
        >
            <Navbar textColor={textColor} />
            <Title title={title} style={titleStyle} />
            {
                icon &&
                    <div style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: VERTICAL_PADDING,
                        ...iconStyle,
                    }}>
                        <div>
                            {icon}
                        </div>
                    </div>
            }
            <SubTitle subTitle={subTitle} style={titleStyle} />
        </div>
    </Fragment>
)
