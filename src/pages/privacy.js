import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import Layout from '../components/Layout';

class Volunteer extends React.Component {
    render() {
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
                    title={`Volunteer | ${siteTitle}`}
                />
                <h2>A Note on Privacy</h2>
                <p style={{
                        textAlign: 'center',
                    }}>
                    We are a registered non-profit organization pledged to enable people to
                    communicate freely in the digital era, without having to worry about their privacy,
                    and the potential loss of their rights over the content they produce.
                    <br/><br/>
                    We don't collect any personal information or usage data about the visitors of this website
                    or our other applications. One exception is users sending us bug reports from the mobile application,
                    which includes usage logs, but it's stripped from sensitive data, and it can be reviewed before sending.
                </p>
            </Layout>
        );
    }
}

export default Volunteer;

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
