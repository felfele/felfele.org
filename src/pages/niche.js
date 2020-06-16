import React, { Fragment } from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { Row } from '../components/Row';
import { SectionSeparator } from '../components/Section';
import {
    Colors,
    CONTENT_MAX_WIDTH,
    VERTICAL_HALF_PADDING,
    VERTICAL_PADDING,
    PADDING_CSS_EXPRESSION,
    MIN_SECTION_PADDING,
    FONT_SIZE_D14_M12,
    FONT_SIZE_D18_M14,
    FONT_SIZE_D14_M10,
    FONT_SIZE_D24_M14,
} from '../data/style';
import { HelmetWithMetadata } from '../components/TopPart'
import { SubscribeInput } from '../components/SubscribeInput'

import { calcVerticalSize } from '../utils/calc'

import TidyIcon from '../assets/tidy.svg'
import FocusIcon from '../assets/focus.svg'
import InspiredIcon from '../assets/inspired.svg'
import RetrieveIcon from '../assets/retrieve.svg'
import ControlIcon from '../assets/control.svg'
import LockIcon from '../assets/lock.svg'
import FacebookIcon from '../assets/facebook.svg'
import LikeIcon from '../assets/like.svg'
import TwitterIcon from '../assets/twitter_white.svg'
import InstagramIcon from '../assets/instagram.svg'
import GithubIcon from '../assets/github_white.svg'
import EmailIcon from '../assets/email.svg'
import LeftArrow from '../assets/left-arrow.svg'
import RightArrow from '../assets/right-arrow.svg'

import NicheLogo from '../assets/niche-green-logo.svg'
import ByFelfeleLogo from '../assets/by-felfele-white.svg'

import GirlWithBalloonImage from '../assets/images/girl-with-balloon.png'

import CarouselImage1 from '../assets/images/carousel_1.png'
import CarouselImage2 from '../assets/images/carousel_2.png'
import CarouselImage3 from '../assets/images/carousel_3.png'
import CarouselImage4 from '../assets/images/carousel_4.png'
import CarouselImage5 from '../assets/images/carousel_5.png'
import CarouselImage6 from '../assets/images/carousel_6.png'
import CarouselImage7 from '../assets/images/carousel_7.png'

import 'typeface-youngserif'
import 'typeface-karla'
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
            marginTop: calcVerticalSize(90),
            marginBottom: calcVerticalSize(10),
            marginLeft: 0,
            marginRight: 0,
            fontSize: 'calc(2.0rem + 5.4vmin)',
        }}>{title}
        </H1>

        <H2 style={{
            color: 'white',
            fontSize: 'calc(0.91rem + 1.98vmin)',
            marginTop: 0,
            marginLeft: 0,
            marginRight: 0,
            fontWeight: 300,
        }}>{body}
        </H2>
    </div>
)

const HeroImage = ({backgroundImage}) => (
    <div style={{
        margin: 0,
        padding: 0,
        backgroundColor: Colors.NICHE_BLACK + '40',
        display: 'flex',
        flex: 1,
        flexGrow: 1,
        backgroundImage: `url(${GirlWithBalloonImage})`,
        backgroundPositionX: 'center',
        backgroundPositionY: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundBlendMode: 'overlay',
        left: 0,
        top: 0,
        width: '100%',
        height: '72vh',
        minWidth: '100%',
        minHeight: '100%',
    }}>
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
                    paddingRight: MIN_SECTION_PADDING,
                }}>
                    <Link to='/'>
                        <img src={ByFelfeleLogo} className='by-felfele-image' />
                    </Link>
                </div>
            </div>
            <TopText
                title='Barely social media'
                body='Niche allows families, friends, or any group of people with a common interest to privately share, curate, and recall the things that matter to them.'
            />
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
            paddingLeft: MIN_SECTION_PADDING,
            paddingRight: MIN_SECTION_PADDING,
        }}
    >
        <p
            style={{
                color: Colors.NICHE_BLUE,
                fontFamily: 'Space Text',
            }}
        ><b style={{fontFamily: 'Space Text'}}
        >Coming soon!</b> Niche is currently in private beta. We’ll be announcing cool stuff soon, <a style={{fontFamily: 'Space Text'}} href='#stayintouch'>stay in touch!</a></p>
    </div>
)

const CarouselPage = ({image, title, text}) => (
    <div
        style={{
            flexDirection: 'row',
            display: 'flex',
            backgroundColor: 'white',
            paddingBottom: VERTICAL_PADDING,
            paddingLeft: 100,
            paddingRight: 100,
        }}
    >
        <img
            style={{
                display: 'flex',
                paddingLeft: 10,
                width: 360,
            }}
            src={image}
            height={700}
        />
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                paddingLeft: 44,
                paddingRigth: 40,
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
                marginTop: 30,
                fontFamily: 'Space Text',
                fontWeight: 300,
                fontSize: FONT_SIZE_D24_M14,
                color: Colors.NICHE_BLUE,
                textAlign: 'left',
            }}
            >{text}</p>
        </div>

    </div>
)

const CarouselArrow = ({image, style, onClick}) => (
    <img
        style={{
            position: 'absolute',
            top: '40%',
            zIndex: 1,
            width: 62,
            pointerEvents: 'all',
            cursor: 'pointer',
            ...style,
        }}
        src={image}
        width={62}
        height={62}
        onClick={onClick}
    />
)

const CarouselIndicator = ({isSelected, onClick}) => (
    <li
        className='dot'
        style={{
            width: 14,
            height: 14,
            backgroundColor: isSelected ? Colors.NICHE_BLUE : 'white',
            borderColor: Colors.NICHE_BLUE,
            borderWidth: 1,
            borderStyle: 'solid',
            borderRadius: '50%',
            pointerEvents: 'all',
            cursor: 'pointer',
            boxShadow: 'unset',
            opacity: 'unset',
            transition: 'revert',
        }}
        onClick={onClick}
    />
)

const ProductCarousel = () => (
    <ResponsiveDiv
        style={{
            backgroundColor: 'white',
            paddingTop: VERTICAL_PADDING,
        }}
    >
        <Carousel
            showStatus={false}
            showThumbs={false}
            showArrows={true}
            infiniteLoop={true}
            autoPlay={true}
            interval={10 * 1000}
            swipeable={true}
            renderArrowPrev={(clickHandler) => <CarouselArrow image={LeftArrow} style={{left: 0}} onClick={clickHandler} />}
            renderArrowNext={(clickHandler) => <CarouselArrow image={RightArrow} style={{right: 0}} onClick={clickHandler} />}
            renderIndicator={(clickHandler, isSelected) => <CarouselIndicator isSelected={isSelected} onClick={clickHandler} />}
        >
            <CarouselPage
                image={CarouselImage1}
                title='Dedicated spaces to share what matters'
                text='Niche allows you to share the important things safetly, with those who matter most. With end to end encryption and decentralised data, you can rest easy knowing your data is safe and confidential. '
            />
            <CarouselPage
                image={CarouselImage2}
                title='Perfect for families'
                text={`Let's face it, the internet can be a scary place. With Niche, you can share intimate family moments with your partner, your kids, and even your mother in law (or not?). You choose who can see what. `}
            />
            <CarouselPage
                image={CarouselImage3}
                title='Limitless posibilities'
                text='Spaces can be designed however you see fit. Plan an event, collect line up information, remember your good times... '
            />
            <CarouselPage
                image={CarouselImage4}
                title='For sharing music'
                text={`Remember that song someone messaged you last week that you forgot to listen to? Exactly... Niche is not chat, when you share something, it won't get lost into the endless chat abyss, and can be found at a moment's notice.`}
            />
            <CarouselPage
                image={CarouselImage5}
                title='Perfect for sharing holiday snaps'
                text='The line between work and play these days is blurred, and we all have that aunt or collegue that knows a little bit too much about your personal life... With Niche, just make a space, upload your stuff, and choose who sees. No more creepers. '
            />
            <CarouselPage
                image={CarouselImage6}
                title='Curate your hobbies'
                text='Love to cook? Have a green thumb? Converting a campervan? Niche is designed so that you can collect content (in whatever form that may take) which displays intuitively and beautifully. Focus on what matters most. '
            />
            <CarouselPage
                image={CarouselImage7}
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
            marginBottom: `calc((${PADDING_CSS_EXPRESSION}) / 8)`,
            fontSize: 'calc(0.91rem + 1.98vmin)',
        }}>{title}
        </H1>

        <H2 style={{
            color: Colors.NICHE_BLUE,
            paddingBottom: VERTICAL_HALF_PADDING,
            margin: 0,
            fontWeight: 350,
            fontSize: 'calc(0.41rem + 1.58vmin)'
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
        style={{
            backgroundColor: '#29235C',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '8vh',
            flexDirection: 'row',
            paddingLeft: MIN_SECTION_PADDING,
            paddingRight: MIN_SECTION_PADDING,
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
            }}
        >
        &nbsp;Help us spread the word!
        </p>
        <a
            style={{
                backgroundColor: Colors.NICHE_BLUE,
                height: '3.5vh',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 20,
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
                }}
            >Share on Facebook</p>
        </a>
    </div>
)

const FooterIcon = ({link, icon, width = 26, style}) => (
    <a
        href={link}
        style={{
            paddingRight: 30,
            ...style,
        }}
    ><img src={icon} width={width} /></a>
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
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <FooterIcon link='https://twitter.com/@FelfeleOrg' icon={TwitterIcon} />
            <FooterIcon link='https://facebook.com/WeAreNiche' icon={FacebookIcon} />
            <FooterIcon link='https://instagram.com/We_Are_Niche' icon={InstagramIcon} />
            <FooterIcon link='https://github.com/felfele/niche' icon={GithubIcon} />
            <FooterIcon link='mailto: hello@felfele.org' icon={EmailIcon} style={{paddingRight: 0}} />
            <p
                style={{
                    color: 'white',
                    fontFamily: 'Space Text',
                    fontSize: FONT_SIZE_D14_M10,
                }}
            >&nbsp;hello@felfele.org</p>
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
            pageTitle='Niche'
        />
        <HeroImage backgroundImage={'../assets/images/girl-with-balloon.png'} />
        <ComingSoonBanner/>
        <ProductCarousel/>
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
