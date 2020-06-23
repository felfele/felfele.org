import React, { Fragment } from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import '../styles/carousel.css'
import { Carousel } from 'react-responsive-carousel';
import BackgroundImage from 'gatsby-background-image'

import { Row } from '../components/Row';
import { SectionSeparator } from '../components/Section';
import {
    Colors,
    CONTENT_MAX_WIDTH,
    VERTICAL_HALF_PADDING,
    VERTICAL_PADDING,
    NICHE_VERTICAL_PADDING,
    PADDING_CSS_EXPRESSION,
    MIN_SECTION_PADDING,
    FONT_SIZE_D14_M12,
    FONT_SIZE_D18_M14,
    FONT_SIZE_D18_M16,
    FONT_SIZE_D14_M10,
    FONT_SIZE_D24_M16,
} from '../data/style';
import { HelmetWithMetadata } from "../components/HelmetWithMetadata";
import { SubscribeInput } from '../components/SubscribeInput'

import { calcVerticalSize } from '../utils/calc'

import TidyIcon from '../assets/tidy.svg'
import FocusIcon from '../assets/focus.svg'
import InspiredIcon from '../assets/inspired.svg'
import RetrieveIcon from '../assets/retrieve.svg'
import ControlIcon from '../assets/control.svg'
import LockIcon from '../assets/lock.svg'
import FacebookIcon from '../assets/facebook.svg'
import TwitterIcon from '../assets/twitter_white.svg'
import InstagramIcon from '../assets/instagram.svg'
import GithubIcon from '../assets/github_white.svg'
import EmailIcon from '../assets/email.svg'
import LeftArrow from '../assets/left-arrow.svg'
import RightArrow from '../assets/right-arrow.svg'

import NicheLogo from '../assets/niche-green-logo.svg'
import ByFelfeleLogo from '../assets/by-felfele-white.svg'

import 'typeface-youngserif'
import 'typeface-spacegrotesk'

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
            fontFamily: 'Space Text',
            fontWeight: 700,
            fontSize: 24,
            color: Colors.NICHE_BLUE,
            marginTop: 10,
            marginBottom: 0,
        }}>
            {title}
        </h3>
        <p style={{
            fontFamily: 'Space Text',
            fontSize: FONT_SIZE_D18_M16,
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
            paddingLeft: MIN_SECTION_PADDING,
            paddingRight: MIN_SECTION_PADDING,
        }}
    >{children}</div></div>
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
        fontFamily: 'Space Text',
        fontWeight: 300,
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
            marginTop: calcVerticalSize(120),
            marginBottom: calcVerticalSize(10),
            marginLeft: 0,
            marginRight: 0,
            fontSize: 'calc(1.2rem + 6.6vmin)',
        }}>{title}
        </H1>

        <H2 style={{
            color: 'white',
            fontSize: 'calc(0.8rem + 1.98vmin)',
            marginTop: calcVerticalSize(15),
            marginBottom: 30,
            marginLeft: 0,
            marginRight: 0,
            fontWeight: 300,
        }}>{body}
        </H2>
    </div>
)

const HeroImage = ({backgroundImage}) => (
    <BackgroundImage
        style={{
            margin: 0,
            padding: 0,
            backgroundColor: Colors.NICHE_BLACK + '40',
            display: 'flex',
            flex: 1,
            flexGrow: 1,
            // backgroundImage: `url(${GirlWithBalloonImage})`,
            backgroundPositionX: 'center',
            backgroundPositionY: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundBlendMode: 'overlay',
            left: 0,
            top: 0,
            width: '100%',
            minHeight: '76vmin',
            minWidth: '100%',
        }}
        fluid={backgroundImage}
    >
        <ResponsiveDiv
            style={{
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
                        <img src={NicheLogo} className='niche-image' />
                    </Link>
                </div>
                <div style={{
                    padding: 0,
                    margin: 0,
                }}>
                    <Link to='/'>
                        <img src={ByFelfeleLogo} className='by-felfele-image' />
                    </Link>
                </div>
            </div>
            <TopText
                title='Barely social media'
                body='Niche allows families, friends, or any group of people with a common interest to privately share, curate, and recall the things that matter to them, safely.'
            />
        </ResponsiveDiv>
    </BackgroundImage>

)

const ComingSoonBanner = () => (
    <div
        style={{
            backgroundColor: Colors.NICHE_GREEN,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: MIN_SECTION_PADDING,
            paddingRight: MIN_SECTION_PADDING,
            paddingTop: calcVerticalSize(30),
            paddingBottom: calcVerticalSize(30),
        }}
    >
        <p
            style={{
                color: Colors.NICHE_BLUE,
                fontFamily: 'Space Text',
                margin: 0,
            }}
        >
            <b style={{fontFamily: 'Space Text'}}>Coming soon!</b>&nbsp;
            Niche is currently in private beta. We’ll be announcing cool stuff soon,&nbsp;
            <a
                style={{fontFamily: 'Space Text'}}
                href='#stayintouch'
            >stay in touch!</a>
        </p>
    </div>
)

const CarouselPage = ({image, title, text}) => (
    <div
        className='flex-layout'
        style={{
            display: 'flex',
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: VERTICAL_PADDING,
        }}
    >
        <div
            style={{
                marginLeft: '10vmin',
            }}
        />
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Image
                className='carousel-screenshot'
                style={{
                    display: 'flex',
                }}
                fluid={image}
            />
        </div>
        <div
            style={{
                marginLeft: '4vmin',
            }}
        />
        <div
            style={{
                width: '1vmax',
                height: '1.5vmax',
            }}
        />
        <div
            className='layout'
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: 0,
            }}
        >
            <H1
                style={{
                    fontSize: 'calc(0.81rem + 1.88vmin)',
                    color: Colors.NICHE_BLUE,
                    textAlign: 'left',
                    marginLeft: 0,
                    marginBottom: 0,
                }}
            >{title}</H1>
            <p style={{
                marginTop: calcVerticalSize(30),
                fontFamily: 'Space Text',
                fontWeight: 300,
                fontSize: FONT_SIZE_D24_M16,
                color: Colors.NICHE_BLUE,
                textAlign: 'left',
            }}
            >{text}</p>
        </div>
        <div
            style={{
                marginRight: '10vmin',
            }}
        />
    </div>
)

const CarouselArrow = ({image, style, onClick}) => (
    <img
        style={{
            position: 'absolute',
            top: '28vh',
            zIndex: 1,
            width: '6vh',
            pointerEvents: 'all',
            cursor: 'pointer',
            ...style,
        }}
        src={image}
        onClick={onClick}
    />
)

const INDICATOR_SIZE = (mul = 1) => `${Math.floor(100 * (mul * 1)) / 100}vh`
const CarouselIndicator = ({isSelected, onClick}) => (
    <li
        className='dot'
        style={{
            width: INDICATOR_SIZE(),
            height: INDICATOR_SIZE(),
            backgroundColor: isSelected ? Colors.NICHE_BLUE : 'white',
            borderColor: Colors.NICHE_BLUE,
            borderWidth: 0.9,
            borderStyle: 'solid',
            borderRadius: '50%',
            pointerEvents: 'all',
            cursor: 'pointer',
            boxShadow: 'unset',
            opacity: 'unset',
            transition: 'revert',
            marginLeft: INDICATOR_SIZE(0.5),
            marginRight: INDICATOR_SIZE(0.5),
        }}
        onClick={onClick}
    />
)

const ProductCarousel = ({data}) => (
    <ResponsiveDiv
        style={{
            backgroundColor: 'white',
            paddingTop: VERTICAL_PADDING,
            paddingBottom: MIN_SECTION_PADDING,
        }}
    >
        <Carousel
            showStatus={false}
            showThumbs={false}
            showArrows={true}
            infiniteLoop={true}
            autoPlay={true}
            swipeable={false}
            interval={10 * 1000}
            renderArrowPrev={(clickHandler) => <CarouselArrow image={LeftArrow} style={{left: 0}} onClick={clickHandler} />}
            renderArrowNext={(clickHandler) => <CarouselArrow image={RightArrow} style={{right: 0}} onClick={clickHandler} />}
            renderIndicator={(clickHandler, isSelected) => <CarouselIndicator isSelected={isSelected} onClick={clickHandler} />}
        >
            <CarouselPage
                image={data.carousel1.childImageSharp.fluid}
                title='Dedicated spaces to share what matters'
                text='Niche allows you to share the important things safetly, with those who matter most. With end to end encryption and decentralised data, you can rest easy knowing your data is safe and confidential. '
            />
            <CarouselPage
                image={data.carousel2.childImageSharp.fluid}
                title='Perfect for families'
                text={`Let's face it, the internet can be a scary place. With Niche, you can share intimate family moments with your partner, your kids, and even your mother in law (or not?). You choose who can see what. `}
            />
            <CarouselPage
                image={data.carousel3.childImageSharp.fluid}
                title='Limitless posibilities'
                text='Spaces can be designed however you see fit. Plan an event, collect line up information, remember your good times... '
            />
            <CarouselPage
                image={data.carousel4.childImageSharp.fluid}
                title='For sharing music'
                text={`Remember that song someone messaged you last week that you forgot to listen to? Exactly... Niche is not chat, when you share something, it won't get lost into the endless chat abyss, and can be found at a moment's notice.`}
            />
            <CarouselPage
                image={data.carousel5.childImageSharp.fluid}
                title='Perfect for sharing holiday snaps'
                text='The line between work and play these days is blurred, and we all have that aunt or collegue that knows a little bit too much about your personal life... With Niche, just make a space, upload your stuff, and choose who sees. No more creepers. '
            />
            <CarouselPage
                image={data.carousel6.childImageSharp.fluid}
                title='Curate your hobbies'
                text='Love to cook? Have a green thumb? Converting a campervan? Niche is designed so that you can collect content (in whatever form that may take) which displays intuitively and beautifully. Focus on what matters most. '
            />
            <CarouselPage
                image={data.carousel7.childImageSharp.fluid}
                title='Back to the good ole days'
                text='Remember walls? Since Niche will never push notifications at you, messages are there for whenever you feel like checking. No rush, man. '
            />
        </Carousel>
    </ResponsiveDiv>
)

const SubscribeBanner = ({title, body}) => (
    <ResponsiveDiv
        id='stayintouch'
        style={{
            backgroundColor: Colors.NICHE_GREEN,
            paddingBottom: VERTICAL_PADDING,
        }}
    >
        <H1 style={{
            color: Colors.NICHE_BLUE,
            paddingTop: VERTICAL_PADDING,
            marginBottom: VERTICAL_HALF_PADDING,
            fontSize: 'calc(0.92rem + 1.98vmin)',
        }}>{title}
        </H1>

        <H2 style={{
            color: Colors.NICHE_BLUE,
            paddingBottom: VERTICAL_HALF_PADDING,
            margin: 0,
            fontWeight: 350,
            fontSize: FONT_SIZE_D24_M16
        }}>{body}
        </H2>

        <SubscribeInput
            id='niche-subscribe'
            inputStyle={{
                borderColor: 'white',
                fontFamily: 'Space Text',
                fontSize: FONT_SIZE_D18_M14,
            }}
            buttonStyle={{
                fontFamily: 'Space Text',
                fontSize: FONT_SIZE_D18_M14,
                backgroundColor: Colors.NICHE_BLUE,
                color: 'white',
            }}
        />

        <p
            className='para'
            style={{
                fontFamily: 'Space Text',
                fontSize: FONT_SIZE_D14_M12,
                color: Colors.NICHE_BLUE,
                marginTop: calcVerticalSize(20),
            }}>We will never spam or share your email.
        </p>
    </ResponsiveDiv>
)

const SpreadTheWordBanner = () => (
    <div
        className='flex-layout'
        style={{
            backgroundColor: '#29235C',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: MIN_SECTION_PADDING,
            paddingRight: MIN_SECTION_PADDING,
            paddingTop: calcVerticalSize(30),
            paddingBottom: calcVerticalSize(30),
        }}
    >
        <div
            style={{
                height: calcVerticalSize(30),
            }}
        />

        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <b style={{
                fontFamily: 'Space Text',
                color: 'white',
            }}>Like this?
            </b>
            <p
                style={{
                    color: 'white',
                    fontFamily: 'Space Text',
                    marginTop: 0,
                    marginBottom: 0,
                }}
            >
            &nbsp;Help us spread the word!
            </p>
        </div>
        <div
            style={{
                width: 20,
                height: 10,
            }}
        />
        <div
        >
            <a
                style={{
                    backgroundColor: Colors.NICHE_BLUE,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: 10,
                    paddingRight: 13,

                }}
                href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ffelfele.org%2Fniche'
                target='_blank'
                rel='nofollow'
            >
                <img src={FacebookIcon} width={22} height={22} />
                <p
                    style={{
                        color: 'white',
                        fontFamily: 'Space Text',
                        paddingLeft: 10,
                        marginTop: 5,
                        marginBottom: 5,
                    }}
                >Share on Facebook</p>
            </a>
        </div>
        <div
            style={{
                height: calcVerticalSize(30),
            }}
        />
    </div>
)

const FooterIcon = ({link, icon, width = 26, style}) => (
    <div
        style={{
            paddingRight: 30,
            ...style,
        }}
    >
        <a
            href={link}
        >
            <img
                src={icon}
                width={width}
            />
        </a>
    </div>
)

const Footer = () => (
    <ResponsiveDiv
        style={{
            backgroundColor: Colors.NICHE_BLUE,
            paddingTop: VERTICAL_PADDING,
            paddingBottom: VERTICAL_PADDING,
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}
    >
        <div
            className='flex-layout niche-footer layout'
            style={{
                display: 'flex',
                padding: 0,
            }}
        >
            <div
                style={{
                    flexDirection: 'row',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <FooterIcon link='https://twitter.com/@FelfeleOrg' icon={TwitterIcon} style={{paddingTop: 2}}/>
                <FooterIcon link='https://facebook.com/WeAreNiche' icon={FacebookIcon} />
                <FooterIcon link='https://instagram.com/We_Are_Niche' icon={InstagramIcon} />
                <FooterIcon link='https://github.com/felfele/niche' icon={GithubIcon} />
            </div>
            <div
                style={{
                    height: 30,
                    width: 0,
                }}
            />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <FooterIcon link='mailto: hello@felfele.org' icon={EmailIcon} style={{paddingRight: 10}} />
                <p
                    style={{
                        color: 'white',
                        fontFamily: 'Space Text',
                        fontSize: 14,
                        margin: 0,
                    }}
                >hello@felfele.org</p>
            </div>
        </div>
        <div
            style={{
                paddingTop: VERTICAL_HALF_PADDING,
                alignItems: 'center',
                alignContent: 'center',
            }}
        >
            <p style={{
                fontFamily: 'Space Text',
                fontSize: FONT_SIZE_D14_M10,
                color: '#A2A2A2',
                textAlign: 'center',
            }}>
                © 2020 Niche is a non-profit and open-source project supported by the&nbsp;
                <a style={{
                    fontFamily: 'Space Text',
                    fontSize: FONT_SIZE_D14_M10,
                    color: '#A2A2A2',
                    }}
                    href='/'
                >Felfele Foundation.</a>
            </p>
        </div>
    </ResponsiveDiv>
)

const Niche = ({ data }) => (
    <Fragment>
        <HelmetWithMetadata
            imageSrc={data.metaImage.childImageSharp.sizes.src}
            pageTitle='Niche — Barely social media'
            siteMetadata={{
                title: 'Barely social media',
                description: 'Niche allows families, friends, or any group of people with a common interest to privately share, curate, and recall the things that matter to them, safely.',
                siteUrl: 'https://new.felfele.org',
                name: 'Niche',
            }}
        />
        <HeroImage backgroundImage={data.heroImage.childImageSharp.fluid} />
        <ComingSoonBanner/>
        <ProductCarousel data={data} />
        <div style={{
            backgroundColor: Colors.BACKGROUND_COLOR,
            paddingBottom: VERTICAL_HALF_PADDING,
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

export const carouselImage = graphql`
    fragment carouselImage on File {
        childImageSharp {
            fluid(maxWidth: 560, quality: 70) {
                ...GatsbyImageSharpFluid_noBase64,
            }
        }
    }
`

export const query = graphql`
    query {
        heroImage: file(
            relativePath: { eq: "girl-with-balloon.jpg" },
            sourceInstanceName: { eq: "images" }
            ) {
            childImageSharp {
                fluid(maxWidth: 1200, quality: 50) {
                    ...GatsbyImageSharpFluid,
                }
            }
        }
        metaImage: file(
            relativePath: { eq: "NicheMetadata.jpg" },
            sourceInstanceName: { eq: "images" }
            ) {
            childImageSharp {
                sizes(maxWidth: 1200, quality: 100) {
                    src
                }
            }
        }
        carousel1: file
            (
                relativePath: { eq: "carousel_1.png" },
                sourceInstanceName: { eq: "images" }
            ) {
            ...carouselImage
        }
        carousel2: file(
                relativePath: { eq: "carousel_2.png" },
                sourceInstanceName: { eq: "images" }
            ) {
            ...carouselImage
        }
        carousel3: file(
                relativePath: { eq: "carousel_3.png" },
                sourceInstanceName: { eq: "images" }
            ) {
            ...carouselImage
        }
        carousel4: file(
            relativePath: { eq: "carousel_4.png" },
            sourceInstanceName: { eq: "images" }
            ) {
            ...carouselImage
        }
        carousel5: file(
            relativePath: { eq: "carousel_5.png" },
            sourceInstanceName: { eq: "images" }
            ) {
            ...carouselImage
        }
        carousel6: file(
            relativePath: { eq: "carousel_6.png" },
            sourceInstanceName: { eq: "images" }
            ) {
            ...carouselImage
        }
        carousel7: file(
            relativePath: { eq: "carousel_7.png" },
            sourceInstanceName: { eq: "images" }
            ) {
            ...carouselImage
        }
    }
`;
