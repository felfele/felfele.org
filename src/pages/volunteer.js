import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import Layout from '../components/Layout';
import { Row } from 'react-flexbox-grid';
import { Link } from 'gatsby';

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
                <h2>Volunteer</h2>
                <p style={{
                        textAlign: 'center',
                    }}>
                    We are a registered non-profit organization pledged to enable people to
                    communicate freely in the digital era, without having to worry about their privacy,
                    and the potential loss of their rights over the content they produce.
                    <br/>
                    We are looking for volunteers in several areas, including evangelism, support,
                    software development, or technical writing. Don't hesitate to <Link to={'/contact'}>contact</Link> us if
                    you share our vision!
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
