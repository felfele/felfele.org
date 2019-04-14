import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import Layout from '../components/Layout';
import { contactData, businessData } from './../data/contact';
import { Row } from 'react-flexbox-grid';

class Contact extends React.Component {
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
                    title={`Contact | ${siteTitle}`}
                />
                <Row around='xs'>
                    <div>
                        <h2>Contact</h2>
                        <br />

                        {Object.keys(contactData).map(key => {
                            if (contactData[key]) {
                                return (
                                    <p>
                                        <b>{key}: </b>
                                        <a
                                            href={contactData[key]}
                                            target="_new"
                                        >
                                            {contactData[key]}
                                        </a>
                                    </p>
                                );
                            }
                        })}
                        {
                            <p>
                                <b>slack: </b>
                                <a
                                    href='https://join.slack.com/t/felfele/shared_invite/enQtNTM1MjUwNTI1NzI5LTY5Yjg0YmVjN2MyN2MzMzc0Y2RkMGRiYzE0N2U0ZjgwNmYxMTQ3YjUwMDg1MGFiZTZlMWViZjU2MWJjY2Y0OTY'
                                >
                                    invitation
                                </a>
                        </p>
                        }
                    </div>
                    <div>
                        <h2>Business Info</h2>
                        <br />

                        {Object.keys(businessData).map(key => {
                            if (businessData[key]) {
                                return (
                                    <p>
                                        <b>{key}: </b>
                                        <r>{businessData[key]}</r>
                                    </p>
                                );
                            }
                        })}
                    </div>
                </Row>
            </Layout>
        );
    }
}

export default Contact;

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
