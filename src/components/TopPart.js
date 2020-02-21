import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import Image from 'gatsby-image';
import Navbar from './Navbar';
import { useStaticQuery, graphql } from "gatsby"
import { PADDING_SIZE_CSS_EXPRESSION, CONTENT_MAX_WIDTH, Colors } from '../data/style'

const MainSection = ({ title, subTitle }) => {
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
                backgroundColor: Colors.HEAD_BACKGROUND_COLOR,
                width: '87.5%',
            }}
        >
            {title &&
                <h1
                    style={{
                        fontSize: 'min(50px, max(30px, 10vw))',
                        fontFamily: 'Jost',
                        textAlign: 'center',
                        marginBottom: 0,
                    }}
                >
                    {title}
                </h1>
            }
            <p
                style={{
                    fontSize: 'min(max(18px, 4vw), 30px)',
                    paddingTop: 10,
                    textAlign: 'center'
                }}
            >
                {subTitle}
            </p>
        </div>
    )
}

export const TopPart = ({ fluidImage, pageTitle, title, subTitle }) => {
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
                }}
            >
                <Navbar />
                {
                    fluidImage &&
                        <div style={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'row',
                        }}>
                            <div>
                                <Image fluid={fluidImage} style={{
                                    maxWidth: 552,
                                    maxHeight: 492,
                                    width: '80vw',
                                }} />
                            </div>
                        </div>
                }
                <MainSection title={title} subTitle={subTitle} />
            </div>
        </Fragment>
    )
}
