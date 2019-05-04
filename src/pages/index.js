import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';

class SiteIndex extends React.Component {
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
                <Section
                    title='Welcome to the Felfele Foundation'
                    body='We are a non-profit organization building services that gives you a similar level of privacy when you are with your friends and family in person.
                        We believe in the future the cost of services will be marginal and it will be so easy to pay for it, that nobody will think about it anymore.
                        We are building services where you are in control, and nobody can access, or stop you from accessing your data, not even us.'
                />
                <Section
                    title='The Felfele Mobile App'
                    body='A decentralized social network where people can exchange thoughts. without compromising their privacy. Built on top of Swarm, mobile first.'
                />
                <Section
                    title='Are you interested in shaping the future with us?'
                    body='The need for human communication is constant and technology enabled us to build tools to serve this need.
                        Historically this evolved to practices that takes away our rights to privacy and control, because that was the only economic way to build these tools in a global scale.
                        Fortunately there are better ways to achieve this now, which respect your privacy and let you stay in control.
                        We commit to working towards this future by making new technologies and services available at a price that’s affordable for everyone.'
                />
            </Layout>
        );
    }
}

const Section = ({ title, body }) => {
    return (
        <React.Fragment>
            <h3>{title}</h3>
            <p>{body}</p>
        </React.Fragment>
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
