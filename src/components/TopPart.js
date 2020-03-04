import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import Image from 'gatsby-image';
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
                        fontSize: '2.0rem',
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

export const TopPart = ({
    fluidImage,
    pageTitle,
    title,
    subTitle,
    style,
    imgStyle,
    textColor,
}) => {
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
        <Fragment>
            <Helmet>
                <title>{htmlTitle}</title>
                <meta name="description" content={data.site.siteMetadata.description} />
            </Helmet>

            <div
                style={{
                    width: '100%',
                    backgroundColor: 'white',
                    ...style,
                }}
            >
                <Navbar textColor={textColor} />
                {
                    fluidImage &&
                        <div style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <div>
                                <Image
                                    fluid={fluidImage}
                                    style={{
                                        maxWidth: 552,
                                        maxHeight: 450,
                                        width: '80vw',
                                        ...imgStyle,
                                    }}
                                    imgStyle={{
                                        objectFit: 'contain',
                                    }}
                                />
                            </div>
                        </div>
                }
                <MainSection title={title} subTitle={subTitle} textColor={textColor} />
            </div>
        </Fragment>
    )
}
