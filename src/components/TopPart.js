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

export const HelmetWithMetadata = ({pageTitle, link, imageSrc, siteMetadata}) => {
    const {site, felfeleImage} = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                   title
                   description
                   siteUrl
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
    const meta = {
        ...site.siteMetadata,
        ...siteMetadata,
    }
    const htmlTitle = pageTitle != null
        ? pageTitle + ' | ' + meta.title
        : meta.title
    const name = meta.name != null
        ? meta.name
        : meta.title
    const image = meta.siteUrl + imageSrc != null
        ? imageSrc
        : felfeleImage.childImageSharp.sizes.src
    return (
        <Helmet link={link}>
            <title>{htmlTitle}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <meta name="description" content={meta.description} />
            <meta property="og:title" content={htmlTitle}/>
            <meta property="og:site_name" content={name}/>
            <meta property="og:description" content={meta.description}/>
            <meta property="og:image" content={image}/>
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:site" content="@FelfeleOrg"/>
            <meta name="twitter:title" content={htmlTitle}/>
            <meta name="twitter:description" content={meta.description}/>
            <meta name="twitter:image" content={image}/>
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
