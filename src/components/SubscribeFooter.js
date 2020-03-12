import React, { Fragment } from 'react'
import { useMediaQuery } from 'react-responsive'
import {
    Colors,
    MIN_SECTION_PADDING,
    CONTENT_MAX_WIDTH,
    VERTICAL_HALF_PADDING,
    VERTICAL_PADDING,
} from '../data/style'

import { calcVerticalSize } from '../utils/calc'

import TwitterWhiteLogo from '../assets/twitter_white.svg'
import GithubWhiteLogo from '../assets/github_white.svg'
import { UniversalLink } from './Button'
import { subscribeEmail } from '../utils/subscribe'

const SubscribeBox = ({}) => (
    <div
        style={{
            paddingTop: 20,
            display: 'flex',
            flexDirection: 'row',
        }}
    >
        <input
            style={{
                borderColor: Colors.NICHE_PINK,
                backgroundColor: Colors.BACKGROUND_COLOR,
                borderWidth: 0,
                borderStyle: 'solid',
                borderBottomLeftRadius: 0,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                height: 30,
                maxWidth: '80vw',
                minWidth: 160,
                padding: 0,
                margin: 0,
                paddingLeft: calcVerticalSize(10),
                fontFamily: 'Nunito Sans',
                fontSize: 14,
                color: '#212121',
            }}
            placeholder='Your email'
            id='subscribe-box-input'
        />
        <div
            style={{
                maxWidth: '10vw',
                minWidth: 100,
                fontFamily: 'Jost',
                fontSize: 10,
                backgroundColor: Colors.SUBSCRIBE_FOOTER_BACKGROUND_COLOR,
                marginLeft: calcVerticalSize(10),
                color: 'white',
                borderColor: 'white',
                borderWidth: 1,
                borderStyle: 'solid',
                cursor: 'pointer',
                flex: 0.3,
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onClick={() => subscribeEmail('subscribe-box-input')}
        >SUBSCRIBE</div>
    </div>
)

const LogoWithLink = ({logo, link, text, style}) => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'inherit',
            height: 24,
            ...style,
        }}
    >
        <img src={logo} />
        <UniversalLink
            link={link}
            style={{
                paddingLeft: 7,
                fontFamily: 'Jost',
                fontSize: 14,
                color: 'white',
            }}
        >{text}</UniversalLink>
    </div>
)

const DesktopBR = ({}) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile
        ? <Fragment>&nbsp;</Fragment>
        : <br/>
}

export const SubscribeFooter = ({}) => (
    <div
        style={{
            backgroundColor: Colors.SUBSCRIBE_FOOTER_BACKGROUND_COLOR,
            paddingBottom: VERTICAL_PADDING,
        }}
    >
        <footer
            className='footer'
            style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingLeft: MIN_SECTION_PADDING,
                paddingRight: MIN_SECTION_PADDING,
                maxWidth: CONTENT_MAX_WIDTH,
                display: 'flex',
                justifyContent: 'space-between',
                // alignItems: 'flex-end',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                }}
            >
                <p
                    style={{
                        fontFamily: 'Jost',
                        fontWeight: 500,
                        fontSize: 12,
                        color: 'white',
                        paddingTop: VERTICAL_HALF_PADDING,
                        margin: 0,
                    }}
                >NEWS &amp; EARLY ACCESS</p>
                <SubscribeBox />
                <p
                    style={{
                        fontFamily: 'Nunito Sans',
                        fontSize: 14,
                        color: '#BBBBBB',
                        paddingTop: 10,
                        margin: 0,
                    }}
                >
                    Get important announcements and early access to our apps.
                    <DesktopBR/>
                    We will never spam or share your email with anyone else.

                </p>
            </div>

            <div
                className='subscribe-footer'
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <div
                    className='grid'
                    style={{
                        display: 'flex',
                        paddingTop: calcVerticalSize(80),
                        alignItems: 'flex-start',
                    }}
                >
                    <LogoWithLink
                        logo={TwitterWhiteLogo}
                        link='https://twitter.com/FelfeleOrg'
                        text='@FelfeleOrg'
                    />
                    <div
                        style={{
                            width: calcVerticalSize(40),
                            height: calcVerticalSize(40),
                        }}
                    ></div>
                    <LogoWithLink
                        logo={GithubWhiteLogo}
                        link='https://github.com/felfele'
                        text='github.com/felfele'
                    />
                </div>
                <div
                    style={{
                        paddingTop: 34,
                    }}
                >
                    <p
                        style={{
                            fontFamily: 'Nunito Sans',
                            fontSize: 14,
                            color: '#BBBBBB',
                            margin: 0,
                        }}
                    >© 2020 Felfele Foundation
                    </p>
                </div>
            </div>
        </footer>
    </div>
)
