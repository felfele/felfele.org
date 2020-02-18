import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import { CONTENT_MAX_WIDTH, WIDTH_THRESHOLD, Colors } from '../data/style';
import { Button } from '../components/Button';
import { Ruler } from '../components/Ruler';
import Footer from '../components/Footer';
import Illustration from '../assets/images/felfele-illustration.png';
import NicheLogoImage from '../assets/images/niche-logo-image.png';
import FelfeleLabImage from '../assets/images/felfele-lab-image.png'

const Row = ({width, children}) => (
    <div style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 80,
        maxWidth: CONTENT_MAX_WIDTH,
        flex: 1,
        display: 'flex',
        flexDirection: width > WIDTH_THRESHOLD ? 'row' : 'column',
        justifyContent: 'space-between',
        alignItems:  width > WIDTH_THRESHOLD ? 'normal' : 'center',
    }}>
        {children}
    </div>
);

class SiteIndex extends React.Component {
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
            <div style={{
                fontFamily: 'Nunito Sans',
                color: 'black',
                // margin: -8,
            }}>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>
                <Navbar/>
                <div style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'row',
                }}>
                    <div>
                        <img src={Illustration} style={{
                            width: 552,
                            height: 492,
                        }}
                        />
                    </div>
                </div>
                <MainSection
                    fontSize={this.state.width > WIDTH_THRESHOLD ? 50 : 48}
                    title='SOCIALIZE WITHOUT COMPROMISE'
                    body="Our nonprofit foundation builds and supports products that let humans connect, share, and inspire each other, without being exploited by technology."
                />
                <div style={{
                    backgroundColor: Colors.BACKGROUND_COLOR,
                }}>
                    <Row width={this.state.width}>
                        <SectionWithImageAndLink
                            title='GET OUR APP'
                            text='Niche is a decentralized sharing application empowering private communities to share content with absolute privacy, in a calm and fully customizable environment.'
                            link='/niche'
                            label='LEARN MORE'
                            image={NicheLogoImage}
                        />
                        <SectionSeparator/>
                        <SectionWithImageAndLink
                            title='EXPERIMENT &amp; COLLABORATE'
                            text='We share our work openly in our product lab. Anyone can access our Github repositories along with other product experiments that might be inspiring to you.'
                            link='/lab'
                            label='CHECK FELFELE LAB'
                            image={FelfeleLabImage}
                        />
                    </Row>

                    <Ruler/>

                    <Row width={this.state.width}>
                        <Section
                            title='NOT FOR PROFIT'
                            body='Seeking profit while building social media often leads to decisions and compromises that we refuse to make. We value freedom and the satisfaction to work on projects with positive social impact over quick profits.'
                        />
                        <SectionSeparator/>
                        <Section
                            title='OPEN SOURCE'
                            body='We’re developing open protocols and libraries for building decentralized social applications. By sharing our work, we hope to inspire other people, ease collaboration, and support similar projects.'
                        />
                        <SectionSeparator/>
                        <Section
                            title='INDEPENDENT'
                            body='We believe in small and independent communities. In the spirit of the early internet, we intend to bring some freedom and diversity in spaces currently dominated by Orwellian tech giants.'
                        />
                    </Row>

                    <Ruler/>

                    <Footer/>
                </div>
            </div>
        );
    }
}

const MainSection = ({ title, body, fontSize }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 80,
                maxWidth: CONTENT_MAX_WIDTH,
                backgroundColor: Colors.HEAD_BACKGROUND_COLOR,
                width: '100%',
            }}
        >
            <h1
                style={{
                    fontSize: fontSize,
                    fontFamily: 'Jost',
                    textAlign: 'center',
                    marginBottom: 0,
                }}
            >
                {title}
            </h1>
            <p
                style={{
                    fontSize: 30,
                    marginTop: 0,
                    textAlign: 'center'
                }}
            >
                {body}
            </p>
        </div>
    );
}

const Section = ({ title, body }) => {
    return (
        <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 370,
        }}>
            <h3
                style={{
                    lineHeight: 0,
                    fontSize: 21,
                    fontFamily: 'Jost',
                    marginBottom: 12,
                }}
            >
                {title}
            </h3>
            <p>{body}</p>
        </div>
    );
};

const SectionSeparator = () => <div style={{
    width: 40,
    height: 40,
}}></div>;


const SectionWithImageAndLink = ({ title, text, image, link, label}) => {
    return (
        <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 560,
            alignItems: 'flex-start',
        }}>
            <img src={image} width={560} />
            <h3
                style={{
                    lineHeight: 0,
                    fontSize: 21,
                    fontFamily: 'Jost',
                    marginBottom: 12,
                }}
            >
                {title}
            </h3>
            <p>{text}</p>
            <Button
                link={link}
                label={label}
                border={true}
            />
        </div>
    );
};

export default SiteIndex;

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
