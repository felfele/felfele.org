import React, { Fragment } from 'react';

import '../styles/styles.css';
import '../styles/fonts.css';

import 'typeface-karla'

import Navbar from './Navbar';
import { useStaticQuery, graphql } from "gatsby"
import { VERTICAL_PADDING, CONTENT_MAX_WIDTH, Colors } from '../data/style'
import { HelmetWithMetadata } from './HelmetWithMetadata';


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

export const TopPart = ({
    icon,
    iconStyle,
    pageTitle,
    title,
    subTitle,
    style,
    textColor,
    titleStyle,
}) => {
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
    const { siteMetadata } = site
    const imageSrc = felfeleImage.childImageSharp.sizes.src
    const pageTitleWithMeta = pageTitle != null
        ? pageTitle + ' | ' + siteMetadata.title
        : siteMetadata.title
    return (
        <Fragment>
            <HelmetWithMetadata
                pageTitle={pageTitleWithMeta}
                siteMetadata
                imageSrc
            />

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
}
