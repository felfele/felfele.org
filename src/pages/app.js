import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import get from 'lodash/get';
// import font file
import 'typeface-roboto';
import Screenshot from './../assets/images/screenshot.png';
import ScreenshotMobile from './../assets/images/screenshot-mobile.png';
import FelfeleLogo from './../assets/logo_with_text.svg';
import Github from './../assets/github.png';
import Android from './../assets/android.png';
import AppStore from './../assets/appstore.png';
import Dollar from './../assets/dollar.png';
import Twitter from './../assets/twitter-bird.png';
import Phone from './../assets/baseline-smartphone-24-px.svg'
import {
    isIOS,
} from 'react-device-detect';

const APP_STORE_LINK = 'https://testflight.apple.com/join/hWiCVkWz';
const PLAY_STORE_LINK = 'https://play.google.com/store/apps/details?id=org.felfele.mobile';

const WIDTH_THRESHOLD = 1100;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0
        };
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title');
        const siteDescription = get(
            this,
            'props.data.site.siteMetadata.description'
        );
        return (
            <div style={ this.state.width > WIDTH_THRESHOLD ? {
                paddingTop: 100,
                paddingLeft: 130,
                paddingRight: 130,
                paddingBottom: 100,
            } : { padding: 20 }}>
                <Helmet
                    htmlAttributes={{ lang: 'en' }}
                    meta={[{ name: 'description', content: siteDescription }]}
                    title={`App | ${siteTitle}`}
                />
                {this.state.width > WIDTH_THRESHOLD ?
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    fontFamily: 'Roboto',
                }}>
                    <div style={{
                        flexDirection: 'column',
                        flex: 1,
                    }}>
                        <img src={FelfeleLogo} style={{ paddingBottom: 70 }}/>
                        <div style={{
                            paddingBottom: 50,
                            fontWeight: 900,
                            fontSize: 70,
                            lineHeight: 1.07,
                        }}>
                            <TaglineContent/>
                        </div>
                        <IntroTextContent/>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1,
                        justifyContent: 'space-between',
                    }}>
                        <div style={{
                                    width: 473,
                                    height: 573,
                                    marginLeft: 60,
                        }}>
                            <img
                                style={{
                                    width: 473,
                                    height: 573,
                                }}
                                src={Screenshot}
                            />
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: 473,
                            justifyContent: 'space-evenly',
                        }}>
                            <Action
                                href={APP_STORE_LINK}
                                imageProps={{
                                    src: AppStore,
                                    style: { width: 40, height: 40 }
                                }}
                                boldText='Download'
                                regularText='for iOS'
                            />
                            <Action
                                href={PLAY_STORE_LINK}
                                imageProps={{
                                    src: Android,
                                    style: { width: 40, height: 40 }
                                }}
                                boldText='Download'
                                regularText='for Android'
                            />
                            <Action
                                href='https://github.com/felfele/felfele'
                                imageProps={{
                                    src: Github,
                                    style: { width: 40, height: 40 }
                                }}
                                boldText='Contribute'
                                regularText='on Github'
                            />
                            <Action
                                href='https://twitter.com/felfeleapp'
                                imageProps={{
                                    src: Twitter,
                                    style: { width: 40, height: 40 }
                                }}
                                boldText='Follow us'
                                regularText='on Twitter'
                            />
                            <Action
                                href='https://felfele.org/donate'
                                imageProps={{
                                    src: Dollar,
                                    style: { width: 40, height: 40 }
                                }}
                                boldText='Make'
                                regularText='a donation'
                            />
                        </div>
                    </div>
                </div> :
                <div>
                    <div style={{
                        paddingBottom: 50,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <img src={FelfeleLogo} style={{ marginBottom: 0 }}/>
                        <DownloadButton/>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        fontFamily: 'Roboto',
                    }}>
                        <div style={{
                            flexDirection: 'column',
                            flex: 1,
                        }}>
                            <div style={{
                                    paddingBottom: 30,
                                    fontWeight: 900,
                                    fontSize: 40,
                                    lineHeight: 1.07,
                            }}>
                                <TaglineContent/>
                            </div>
                            <div style={{
                                        width: 229,
                                        height: 278,
                                        marginBottom: 30,
                            }}>
                                <img
                                    style={{
                                        width: 229,
                                        height: 278,
                                    }}
                                    src={ScreenshotMobile}
                                />
                            </div>
                            <IntroTextContent/>
                        </div>
                    </div>
                </div>}
            </div>
        );
    }
}

export default App;

const DownloadButton = () => (
    <a
        style={{
            color: '#4a4a4a',
            fontSize: 12,
            fontWeight: 'bold',
        }}
        href={isIOS ? APP_STORE_LINK : PLAY_STORE_LINK} target='_new'
    >
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        }}>
            <img src={Phone} style={{ paddingRight: 4, margin: 0 }}/>
            GET THE APP
        </div>
        </a>
);

const TaglineContent = () => (
    <div>
        Nonprofit.<br/>
        Slow media.<br/>
        Decentralized.
    </div>
);

const IntroTextContent = () => (
    <React.Fragment>
        <div>
            <b>Social media that doesn't suck.</b>
        </div>
        <div style={{
            paddingBottom: 50,
        }}>
            As a nonprofit, we have no incentive to sell your data. Guaranteeing your
            privacy and rights over your content is at the core of our <a href='/'>foundation</a>. Felfele
            relies on a decentralized and fully encrypted content distribution platform called
            <a href='https://swarm.ethereum.org' target='_new'> Swarm</a> — technically eliminating any chance of fraud, censorship or third-party
            interference with your data. More broadly, we value human's attention time and
            intend to build a <a href='http://en.slow-media.net/manifesto' target='_new'>slow media</a> experience that's enriching and sustainable.
        </div>
        <div>
            <b>Don’t be a stranger.</b>
        </div>
        <div>
            That's a long journey, and we're just at the beginning. If this resonates with you,
            support the project. Download our alpha release <a href={APP_STORE_LINK} target='_new'>for iOS </a>
            or <a href={PLAY_STORE_LINK} target='_new'>Android</a> and help us with
            testing, <a href='https://github.com/felfele/felfele' target='_new'>contribute</a> to our open-source development, help us
            <a href='https://twitter.com/felfeleapp' target='_new'> spread the word</a> or <a href='/donate' target='_new'>make a donation</a> to the foundation.
        </div>
    </React.Fragment>
);

const Action = (props) => {
    return (
        <a href={props.href} target='_new'>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontSize: 14,
                color: '#4a4a4a',
                lineHeight: 'normal',
            }}>
                <ImageContainer {...props.imageProps}/>
                <div style={{ fontWeight: 'bold', paddingTop: 10 }}>{props.boldText}</div>
                <div>{props.regularText}</div>
            </div>
        </a>
    );
}

const ImageContainer = (props) => {
    const { style, ...rest } = props;
    return (
        <div style={style}>
            <img
                {...rest}
            />
        </div>
    );
}

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`;
