import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Screenshot from './../assets/images/screenshot.png';
import ScreenshotMobile from './../assets/images/screenshot-mobile.png';
import Layout from '../components/Layout';
import { Button } from '../components/Button';
import Android from './../assets/android.svg';
import Apple from './../assets/apple.svg';

export const APP_STORE_LINK = 'https://testflight.apple.com/join/hWiCVkWz';
export const PLAY_STORE_LINK = 'https://play.google.com/store/apps/details?id=org.felfele.mobile';

const WIDTH_THRESHOLD = 1100;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
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
        if (this.state.width === 0) return null;
        const siteTitle = get(this, 'props.data.site.siteMetadata.title');
        const siteDescription = get(
            this,
            'props.data.site.siteMetadata.description'
        );
        return (
            <Layout>
                <Helmet
                    htmlAttributes={{ lang: 'en' }}
                    meta={[{ name: 'description', content: siteDescription }]}
                    title={`App | ${siteTitle}`}
                />
                {this.state.width > WIDTH_THRESHOLD ?
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingTop: 30,
                    paddingBottom: 50,
                }}>
                    <div style={{
                        flexDirection: 'column',
                        flex: 1,
                    }}>
                        <TaglineContent fontSize={76}/>
                        <ButtonGroup/>
                        <IntroTextContent/>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1,
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        paddingTop: 40,
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
                    </div>
                </div> :
                <div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        paddingBottom: 50,
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
                                <TaglineContent fontSize={48}/>
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
                            <ButtonGroup/>
                            <IntroTextContent/>
                        </div>
                    </div>
                </div>}
            </Layout>
        );
    }
}

export default App;

const TaglineContent = ({ fontSize }) => (
    <h1
        style={{
            fontSize: fontSize,
            fontFamily: 'YoungSerif',
            lineHeight: 1.18,
        }}
    >
        Nonprofit.<br/>
        Slow media.<br/>
        Decentralized.
    </h1>
);

const ButtonGroup = () => (
    <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingTop: 20,
        paddingBottom: 20,
    }}>
        <Button
            link={APP_STORE_LINK}
            icon={Apple}
            label='Get for iOS'
            border={true}
        />
        <Button
            link={PLAY_STORE_LINK}
            icon={Android}
            label='Get for Android'
            border={true}
        />
    </div>
);

const IntroTextContent = () => (
    <React.Fragment>
        <h3
            style={{
                fontFamily: 'YoungSerif',
                fontSize: 27,
            }}
        >
            Social media that doesn't suck.
        </h3>
        <div
            style={{
                paddingBottom: 50,
            }}
        >
            As a nonprofit, we have no incentive to sell your data. Guaranteeing your
            privacy and rights over your content is at the core of our <a href='/'>foundation</a>. Felfele
            relies on a decentralized and fully encrypted content distribution platform called
            <a href='https://swarm.ethereum.org' target='_new'> Swarm</a> — technically eliminating any chance of fraud, censorship or third-party
            interference with your data. More broadly, we value human's attention time and
            intend to build a <a href='http://en.slow-media.net/manifesto' target='_new'>slow media</a> experience that's enriching and sustainable.
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
