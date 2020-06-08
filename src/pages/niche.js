import React, { Fragment } from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

import { Row } from '../components/Row';
import { SectionSeparator } from '../components/Section';
import {
    Colors,
    CONTENT_MAX_WIDTH,
    NICHE_VERTICAL_PADDING,
    VERTICAL_HALF_PADDING,
    VERTICAL_PADDING,
    PADDING_CSS_EXPRESSION,
    MIN_SECTION_PADDING,
    FONT_SIZE_D14_M12,
    FONT_SIZE_D18_M14,
} from '../data/style';
import { Ruler } from '../components/Ruler';
import { HelmetWithMetadata } from '../components/TopPart'
import { SubscribeFooter } from '../components/SubscribeFooter';
import { SubscribeInput } from '../components/SubscribeInput'

import { calcVerticalSize } from '../utils/calc'

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

import GirlWithBalloonImage from '../assets/images/girl-with-balloon.png'

import 'typeface-youngserif'
import 'typeface-karla'
import { MobileOnly, DesktopOnly } from '../components/Responsive';

const Section = ({ icon, title, body }) => (
    <div
        style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
        }}
    >
        <div style={{
            width: 60,
            height: 60,
        }}>
            <img src={icon} />
        </div>
        <h3 style={{
            fontFamily: 'YoungSerif',
            fontSize: 24,
            color: Colors.NICHE_BLUE,
            marginTop: 10,
            marginBottom: 0,
        }}>
            {title}
        </h3>
        <p style={{
            fontFamily: 'Karla',
            fontSize: 18,
            color: Colors.NICHE_BLUE,
        }}>{body}</p>
    </div>
)

const ResponsiveDiv = ({style, children, id}) => (
    <div
        id={id}
        style={{
            margin: 0,
            padding: 0,
            ...style,
        }}
    ><div
        style={{
            maxWidth: CONTENT_MAX_WIDTH,
            marginLeft: 'auto',
            marginRight: 'auto',
            ...style,
        }}
    >{children}</div></div>
)

const MainSection = ({title, body}) => (
    <div
        style={{
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: CONTENT_MAX_WIDTH,
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: MIN_SECTION_PADDING,
            paddingRight: MIN_SECTION_PADDING,
        }}
    >
        <H1 style={{
            color: 'black',
            marginTop: VERTICAL_PADDING,
            marginBottom: `calc((${PADDING_CSS_EXPRESSION}) / 8)`,
            fontSize: 'calc(1.2rem + 2.86vmin)',
        }}>{title}
        </H1>

        <H2 style={{
            color: 'black',
            margin: 0,
        }}>{body}
        </H2>

    </div>
)

const H1 = ({style, children}) => (
    <h1 style={{
        fontFamily: 'YoungSerif',
        fontWeight: 500,
        fontSize: 'calc(1.3rem + 4.6vmin)',
        color: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
        ...style,
    }}>{children}
    </h1>
)

const H2 = ({style, children}) => (
    <h2 style={{
        fontFamily: 'Karla',
        fontWeight: 500,
        fontSize: 'calc(1.1rem + 1.0vmin)',
        color: Colors.NICHE_PINK,
        marginLeft: 'auto',
        marginRight: 'auto',
        ...style,
    }}>{children}
    </h2>
)

const TopText = ({title, body}) => (
    <div>
        <H1 style={{
            color: 'white',
            marginTop: calcVerticalSize(210),
            marginBottom: calcVerticalSize(10),
            marginLeft: 0,
            marginRight: 0,
            fontSize: 'calc(1.7rem + 4.0vmin)',
        }}>{title}
        </H1>

        <H2 style={{
            color: 'white',
            fontSize: 'calc(0.81rem + 1.58vmin)',
            marginTop: 0,
            marginLeft: 0,
            marginRight: 0,
        }}>{body}
        </H2>
    </div>
)

const Top = ({}) => (
    <div style={{
        margin: 0,
        padding: 0,
        backgroundColor: Colors.NICHE_BLACK,
        display: 'flex',
    }}>
        <ResponsiveDiv
            style={{
                flex: 1,
                flexDirection: 'column',
                paddingLeft: MIN_SECTION_PADDING,
                paddingRight: MIN_SECTION_PADDING,
            }}
        >
            <div
                style={{
                    flexDirection: 'row',
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    height: 40,
                    marginTop: '4vmax',
                }}
            >
                <div style={{
                    padding: 0,
                    margin: 0,
                }}>
                    <Link to='/niche'>
                        <img src={NichePinkLogo} className='niche-image' />
                    </Link>
                </div>
                <div style={{
                    padding: 0,
                    margin: 0,
                    paddingRight: MIN_SECTION_PADDING,
                }}>
                    <Link to='/'>
                        <img src={ByFelfeleLogo} className='by-felfele-image' />
                    </Link>
                </div>
            </div>
            <div
                className='image-layout'
                style={{
                    display: 'flex',
                    marginTop: VERTICAL_PADDING,
                }}
            >
                <img src={NichePinkBigIcon} className='niche-logo-image' />
            </div>
            <TopText
                title='Barely social media'
                body='Niche allows families, friends, or any group of people with a common interest to privately share, curate, and recall the things that matter to them.'
            />
            <SubscribeTop />
        </ResponsiveDiv>
    </div>
)

const HeroImageOriginal = ({ fluidImage }) => (
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
                    fluid={fluidImage}
                    style={{
                        width: '80vmin',
                    }}
                    imgStyle={{
                        objectFit: 'contain',
                    }}
                />
            </div>
        </div>
    </div>
)

const SubscribeTop = () => (
    <div
        style={{
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: CONTENT_MAX_WIDTH,
            marginLeft: 'auto',
            marginRight: 'auto',
        }}
    >
        <p
            className='para'
            style={{
                fontFamily: 'Karla',
                fontSize: FONT_SIZE_D18_M14,
                color: '#F9F9F9',
                marginTop: calcVerticalSize(48),
                marginBottom: calcVerticalSize(20),
            }}
        >GET NEWS &amp; EARLY ACCESS
        </p>

        <SubscribeInput
            id='niche-top-subscribe'
            inputStyle={{
                borderColor: 'white',
                fontSize: FONT_SIZE_D18_M14,
            }}
            buttonStyle={{
                fontSize: FONT_SIZE_D18_M14,
            }}
        />

        <p
            className='para'
            style={{
                fontFamily: 'Karla',
                fontSize: FONT_SIZE_D14_M12,
                color: '#9B9B9B',
                marginTop: calcVerticalSize(20),
                marginBottom: NICHE_VERTICAL_PADDING,
                paddingLeft: 0,
                paddingRight: 0,
            }}>We will never spam or share your email.
        </p>
    </div>
)

const HeroImage = ({backgroundImage}) => (
    <div style={{
        margin: 0,
        padding: 0,
        backgroundColor: Colors.NICHE_BLACK,
        display: 'flex',
        flex: 1,
        flexGrow: 1,
        backgroundImage: `url(${GirlWithBalloonImage})`,
        backgroundPositionX: 'center',
        backgroundPositionY: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        left: 0,
        top: 0,
        width: '100%',
        height: '70vh',
        minWidth: '100%',
        minHeight: '100%',
    }}>
        <ResponsiveDiv
            style={{
                flex: 1,
                flexDirection: 'column',
                paddingLeft: MIN_SECTION_PADDING,
                paddingRight: MIN_SECTION_PADDING,
            }}
        >
            <div
                style={{
                    flexDirection: 'row',
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    height: 40,
                    marginTop: '4vmax',
                }}
            >
                <div style={{
                    padding: 0,
                    margin: 0,
                }}>
                    <Link to='/niche'>
                        <img src={NichePinkLogo} className='niche-image' />
                    </Link>
                </div>
                <div style={{
                    padding: 0,
                    margin: 0,
                    paddingRight: MIN_SECTION_PADDING,
                }}>
                    <Link to='/'>
                        <img src={ByFelfeleLogo} className='by-felfele-image' />
                    </Link>
                </div>
            </div>
            {/* <div
                className='image-layout'
                style={{
                    display: 'flex',
                    marginTop: VERTICAL_PADDING,
                }}
            >
                <img src={NichePinkBigIcon} className='niche-logo-image' />
            </div> */}
            <TopText
                title='Barely social media'
                body='Niche allows families, friends, or any group of people with a common interest to privately share, curate, and recall the things that matter to them.'
            />
            {/* <SubscribeTop /> */}
        </ResponsiveDiv>
    </div>

)

const ComingSoonBanner = () => (
    <div
        style={{
            backgroundColor: Colors.NICHE_GREEN,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '8vh',
        }}
    >
        <p
            style={{
                color: Colors.NICHE_BLUE,
            }}
        ><b>Coming soon!</b> Niche is currently in private beta. We’ll be announcing cool stuff soon, <a href='#stayintouch'>stay in touch!</a></p>
    </div>
)

const Carousel = () => (
    <ResponsiveDiv
        style={{
            backgroundColor: 'white',
            height: '92vh'
        }}
    >

    </ResponsiveDiv>
)

const SubscribeBanner = ({title, body}) => (
    <ResponsiveDiv
        id='stayintouch'
        style={{
            backgroundColor: Colors.NICHE_GREEN,
            paddingBottom: VERTICAL_HALF_PADDING,
        }}
    >
        <H1 style={{
            color: Colors.NICHE_BLUE,
            paddingTop: VERTICAL_PADDING,
            marginBottom: `calc((${PADDING_CSS_EXPRESSION}) / 8)`,
            fontSize: 'calc(1.2rem + 2.86vmin)',
        }}>{title}
        </H1>

        <H2 style={{
            color: Colors.NICHE_BLUE,
            margin: 0,
            paddingBottom: VERTICAL_HALF_PADDING,
        }}>{body}
        </H2>

        <SubscribeInput
            id='niche-subscribe'
            inputStyle={{
                borderColor: 'white',
                fontSize: FONT_SIZE_D18_M14,
            }}
            buttonStyle={{
                fontSize: FONT_SIZE_D18_M14,
                backgroundColor: Colors.NICHE_BLUE,
                color: 'white',
            }}
        />

        <p
            className='para'
            style={{
                fontFamily: 'Karla',
                fontSize: FONT_SIZE_D14_M12,
                color: Colors.NICHE_BLUE,
                marginTop: calcVerticalSize(20),
                paddingLeft: 0,
                paddingRight: 0,
            }}>We will never spam or share your email.
        </p>
    </ResponsiveDiv>
)

const SpreadTheWordBanner = () => (
    <div
        style={{
            backgroundColor: '#29235C',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '8vh',
        }}
    >
        <p
            style={{
                color: 'white',
            }}
        ><b>Like this?</b> Help us spread the word!</p>
    </div>
)

const Footer = () => (
    <ResponsiveDiv
        style={{
            backgroundColor: Colors.NICHE_BLUE,
            paddingBottom: VERTICAL_HALF_PADDING,
        }}
    >
    </ResponsiveDiv>
)

const Niche = ({ data }) => (
    <Fragment>
        <HelmetWithMetadata
            pageTitle='Niche'
        />
        <HeroImage backgroundImage={'../assets/images/girl-with-balloon.png'} />
        <ComingSoonBanner/>
        <Carousel/>
        <div style={{
            backgroundColor: Colors.BACKGROUND_COLOR,
        }}>
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
                    body='See what’s shared without being distracted by comments or obtrusive interface. Each page showcases a collection of pure content that’s a joy to browse.'
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
                    title='Peace of mind'
                    body='Everything shared with Niche is end-to-end encrypted, meaning that no one can ever access your content, except the people you explicitly share it with.'
                />
            </Row>
        </div>
        <SubscribeBanner
            title='Stay in touch!'
            body='We’re going to launch our Kickstarter campaign and release our public beta in the coming weeks. Subscribe to our private mailing list for early access and news!'
        />
        <SpreadTheWordBanner/>
        <Footer/>
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
        heroImage: file(
            relativePath: { eq: "girl-with-balloon.png" },
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
