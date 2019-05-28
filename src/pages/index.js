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
                    fontSize={this.state.width > WIDTH_THRESHOLD ? 54 : 48}
                    title='Socialize without compromise'
                    body="We build services that empower anyone to communicate without being exploited — services that respect people's time, privacy and rights over their content."
                />
                <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: this.state.width > WIDTH_THRESHOLD ? 'row' : 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',

                }}>
                    <Section
                        title='People first'
                        body='We focus on services that put people in control and empower free communication. We defend human attention adn privacy, not profit.'
                    />
                    <Section
                        title='Self-sustaining'
                        body='We use peer-to-peer storage and incentivize resource sharing to make structural consts trivial. No one has to trade their personal data.'
                    />
                    <Section
                        title='Future-proof'
                        body='A fully decentralized and open architecture makes the network stronger — no vulnerable hubs, no data loss, no downtime, and no censorship.'
                    />
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    paddingTop: 40,
                    paddingBottom: 40,
                    margin: -8,
                }}>
                    <Button
                        target='/app'
                        icon={Phone}
                        label='Get the app'
                        border={true}
                    />
                    <Button
                        target='/donate'
                        icon={Heart}
                        label='Make a donation'
                        border={true}
                    />
                </div>
            </Layout>
        );
    }
}

const MainSection = ({ title, body, fontSize }) => {
    return (
        <div>
            <h1 style={{ fontSize }}>{title}</h1>
            <p style={{ fontSize: 22 }}>{body}</p>
        </div>
    );
}

const Section = ({ title, body }) => {
    return (
        <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 300,
        }}>
            <h3 style={{ lineHeight: 0 }}>{title}</h3>
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
