import React, { Fragment } from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

import { Row } from '../components/Row';
import { SectionSeparator } from '../components/Section';
import { Colors, CONTENT_MAX_WIDTH } from '../data/style';
import { Ruler } from '../components/Ruler';

import TidyIcon from '../assets/tidy.svg'
import FocusIcon from '../assets/focus.svg'
import InspiredIcon from '../assets/inspired.svg'
import RetrieveIcon from '../assets/retrieve.svg'
import ControlIcon from '../assets/control.svg'
import LockIcon from '../assets/lock.svg'

import NichePinkLogo from '../assets/niche-pink-logo.svg'
import ByFelfeleLogo from '../assets/by-felfele.svg'
import NichePinkBigIcon from '../assets/niche-pink-big-icon.svg'
import FelfeleLogo from '../assets/images/felfele-logo.svg'

import 'typeface-youngserif'
import 'typeface-karla'

const Section = ({ icon, title, body }) => (
    <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        maxWidth: 360,
    }}>
        <div style={{
            width: 60,
            height: 60,
        }}>
            <img src={icon} />
        </div>
        <h3 style={{
            fontFamily: 'YoungSerif',
            fontSize: 24,
            color: Colors.NICHE_PINK,
            marginTop: 10,
            marginBottom: 0,
        }}>
            {title}
        </h3>
        <p style={{
            fontFamily: 'Karla',
            fontSize: 18,
            color: 'black',
        }}>{body}</p>
    </div>
)

const ResponsiveDiv = ({style, children}) => (
    <div
        style={{
            maxWidth: CONTENT_MAX_WIDTH,
            marginLeft: 'auto',
            marginRight: 'auto',
            ...style,
        }}
    >{children}</div>
)

const MainSection = ({title, body}) => (
    <div
        style={{
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: CONTENT_MAX_WIDTH,
            marginLeft: 'auto',
            marginRight: 'auto',
        }}
    >
        <p style={{
            fontFamily: 'YoungSerif',
            fontSize: 50,
            color: 'black',
            maxWidth: 760,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 80,
            textAlign: 'center',
        }}>{title}
        </p>

        <p style={{
            fontFamily: 'Karla',
            fontSize: 30,
            color: 'black',
            maxWidth: 760,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 80,
            textAlign: 'center',
        }}>{body}
        </p>

    </div>
)

const TopText = ({title, body}) => (
    <div>
        <p style={{
            fontFamily: 'YoungSerif',
            fontSize: 50,
            color: 'white',
            maxWidth: 760,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 80,
            textAlign: 'center',
        }}>{title}
        </p>

        <p style={{
            fontFamily: 'Karla',
            fontSize: 30,
            color: Colors.NICHE_PINK,
            maxWidth: 760,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 20,
            marginBottom: 85,
            textAlign: 'center',
        }}>{body}
        </p>
    </div>
)

const Top = ({fluidImage}) => (
    <ResponsiveDiv
        style={{
            minHeight: 300,
            flex: 1,
            flexDirection: 'column',
        }}
    >
        <div
            style={{
                flexDirection: 'row',
                flex: 1,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 40,
                marginTop: 65,
            }}
        >
            <div style={{
                padding: 0,
                margin: 0,
                paddingLeft: 10,
                width: 109,
                height: 30,
            }}>
                <Link to='/niche'>
                    <img src={NichePinkLogo} width={109} height={30}/>
                </Link>
            </div>
            <div style={{
                padding: 0,
                margin: 0,
                width: 109,
                height: 15,
            }}>
                <Link to='/'>
                    <img src={ByFelfeleLogo} />
                </Link>
            </div>
        </div>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 85,
        }}>
            <img src={NichePinkBigIcon} />
        </div>
        <TopText
            title='Socialize without compromise'
            body='Niche allows families, friends, or any group of people with a common interest to privately share, curate, and recall the things that matter to them.'
        />
    </ResponsiveDiv>
)

const Niche = ({ data }) => (
    <Fragment>
        <div style={{
            margin: 0,
            padding: 0,
            backgroundColor: Colors.NICHE_BLACK,
            display: 'flex',
        }}>
            <Top />
        </div>
        <div style={{
            position: 'relative',
        }}>
            <div>
                <div style={{
                    margin: 0,
                    padding: 0,
                    backgroundColor: Colors.NICHE_BLACK,
                    display: 'flex',
                    height: '14.1vmin',
                }}></div>
                <div style={{
                    margin: 0,
                    padding: 0,
                    backgroundColor: Colors.NICHE_PINK,
                    display: 'flex',
                    height: '55vmin',
                }}></div>
                <div style={{
                    margin: 0,
                    padding: 0,
                    backgroundColor: Colors.BACKGROUND_COLOR,
                    display: 'flex',
                    height: '14vmin',
                }}></div>
            </div>
            <div style={{
                zIndex: 1,
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}
                >
                    <Image
                        fluid={data.nichePhoneMockups.childImageSharp.fluid}
                        style={{
                            maxWidth: 1000,
                            maxHeight: 800,
                            width: '80vmin',
                        }}
                        imgStyle={{
                            objectFit: 'contain',
                        }}
                    />
                </div>
            </div>
        </div>

        <div style={{
            backgroundColor: Colors.BACKGROUND_COLOR,
        }}>
            <MainSection
                title='Share meaningfully'
                body='Create dedicated pages for events, trips, parties, or any particular interest, and assemble visually-pleasing collections of curated content.'
            />
            <Row>
                <Section
                    icon={TidyIcon}
                    title='Keep things tidy'
                    body='Create dedicated pages for your events and interests. Share each page privately with relevant people. Niche helps you keep focus and share more consciously.'
                />
                <SectionSeparator/>
                <Section
                    icon={FocusIcon}
                    title='Focus on content'
                    body='See what’s shared without being distracted by comments or obstrusive interface. Each page showcases a collection of pure content that’s a joy to browse.'
                />
                <SectionSeparator/>
                <Section
                    icon={InspiredIcon}
                    title='Get inspired'
                    body='Customize your pages design to look and feel exactly as you want. Niche gives you absolute freedom to express yourself with your own style.'
                />
            </Row>

            <Row>
                <Section
                    icon={RetrieveIcon}
                    title='Retrieve what you need'
                    body='Organized pages with search and filters help you retrieve effortlessly what you need. No need to dig through messy chat history or crowded inboxes. '
                />
                <SectionSeparator/>
                <Section
                    icon={ControlIcon}
                    title='Control your time'
                    body='Check things when it’s the right moment for you. Niche is not pushing notifications or fighting for your attention, set your own reminder rules for each page.'
                />
                <SectionSeparator/>
                <Section
                    icon={LockIcon}
                    title='Piece of mind'
                    body='Everything shared with Niche is end-to-end encrypted, meaning that no one can ever access your content, except the people you explicitly share it with.'
                />
            </Row>

            <Ruler
                style={{
                    marginTop: 100,
                }}
            />

            <div
                style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxWidth: CONTENT_MAX_WIDTH,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                <p style={{
                    fontFamily: 'Karla',
                    fontSize: 18,
                    color: 'black',
                    maxWidth: 760,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 80,
                    textAlign: 'center',
                }}>Niche is currently under development by Felfele, a non-profit foundation building decentralized social apps with an emphasis on freedom and privacy. If you’d like to be notified about releases and get early access you can subscribe to our mailing list.
                </p>

                <div
                    style={{
                        maxWidth: 560,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        alignItems: 'center',
                        marginTop: 50,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'stretch'
                    }}
                >
                    <input
                        style={{
                            borderColor: Colors.NICHE_PINK,
                            borderWidth: 1,
                            borderStyle: 'solid',
                            borderBottomLeftRadius: 9,
                            borderTopLeftRadius: 9,
                            height: 43,
                            maxWidth: 400,
                            flex: 1,
                            padding: 0,
                            margin: 0,
                            paddingLeft: 20,
                            fontFamily: 'Karla',
                            fontSize: 18,
                            color: '#00000077',
                        }}
                        placeholder='Your email address'
                    />
                    <input
                        style={{
                            width: 124,
                            height: 45,
                            fontFamily: 'Karla',
                            fontSize: 18,
                            backgroundColor: Colors.NICHE_PINK,
                            color: 'white',
                            border: 'none',
                            borderBottomRightRadius: 9,
                            borderTopRightRadius: 9,
                            cursor: 'pointer',
                            padding: 0,
                        }}
                        value='Subscribe'
                        type='submit'
                    />

                </div>

                <p style={{
                    fontFamily: 'Karla',
                    fontSize: 18,
                    color: 'black',
                    maxWidth: 760,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 25,
                    textAlign: 'center',
                }}>We will never spam or share your email with anyone else.
                </p>
            </div>

            <Ruler
                style={{
                    marginTop: 80,
                }}
            />

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 50,
                    paddingLeft: 20,
                    paddingRight: 20,
                    maxWidth: CONTENT_MAX_WIDTH,
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: 90,
                    }}
                >
                    <Link
                        to='/niche'
                        style={{
                            color: Colors.NICHE_PINK,
                            flexDirection: 'row',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <img src={NichePinkLogo} style={{ width: 100, marginBottom: 0, fill: Colors.NICHE_PINK }}/>
                    </Link>
                    <Link
                        to='/'
                    >
                        <img src={FelfeleLogo} style={{ width: 100, marginBottom: 0, fill: Colors.NICHE_PINK }}/>
                    </Link>
                </div>
            </div>
        </div>
    </Fragment>
)

export default Niche;

export const query = graphql`
    query {
        nichePhoneMockups: file(
            relativePath: { eq: "niche-phone-mockups.png" },
            sourceInstanceName: { eq: "images" }
            ) {
            childImageSharp {
                fluid(maxWidth: 560, quality: 100) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
    }
`;
