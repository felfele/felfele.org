import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import { WIDTH_THRESHOLD } from '../components/Navbar';
import { Button } from '../components/Button';
import Phone from './../assets/baseline-smartphone-24-px.svg'
import Heart from './../assets/heart.svg'

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
            <Layout>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>
                <MainSection
                    fontSize={this.state.width > WIDTH_THRESHOLD ? 50 : 48}
                    title='SOCIALIZE WITHOUT COMPROMISE'
                    body="Our nonprofit foundation builds and supports products that let humans connect, share, and inspire each other, without being exploited by technology."
                />
                <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: this.state.width > WIDTH_THRESHOLD ? 'row' : 'column',
                    justifyContent: 'space-between',
                    alignItems:  this.state.width > WIDTH_THRESHOLD ? 'normal' : 'center',

                }}>
                    <Section
                        title='NOT FOR PROFIT'
                        body='Seeking profit while building social media often leads to decisions and compromises that we refuse to make. We value freedom and the satisfaction to work on projects with positive social impact over quick profits.'
                    />
                    <Section
                        title='OPEN SOURCE'
                        body='We’re developing open protocols and libraries for building decentralized social applications. By sharing our work, we hope to inspire other people, ease collaboration, and support similar projects.'
                    />
                    <Section
                        title='INDEPENDENT'
                        body='We believe in small and independent communities. In the spirit of the early internet, we intend to bring some freedom and diversity in spaces currently dominated by Orwellian tech giants.'
                    />
                </div>
            </Layout>
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
