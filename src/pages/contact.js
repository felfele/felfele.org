import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import Layout from '../components/Layout';
import { contactData, businessData } from './../data/contact';
import { UniversalLink } from '../components/Button';

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
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingBottom: 50,
                }}>
                    <h1 style={{ fontFamily: 'YoungSerif' }}>Contact</h1>
                    <br />
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            flexWrap: 'wrap',
                            textAlign: 'center'
                        }}
                    >

                        <div>
                            <h3 style={{ fontFamily: 'YoungSerif' }}>Get in touch</h3>
                            {Object.keys(contactData).map(key => {
                                if (contactData[key]) {
                                    return (
                                        <p>
                                            <b>{key}: </b>
                                            <UniversalLink
                                                link={contactData[key]}
                                                target="_new"
                                            >
                                                {contactData[key]}
                                            </UniversalLink>
                                        </p>
                                    );
                                }
                            })}
                            {
                                <p>
                                    <b>slack: </b>
                                    <UniversalLink
                                        link='https://join.slack.com/t/felfele/shared_invite/enQtNTM1MjUwNTI1NzI5LTY5Yjg0YmVjN2MyN2MzMzc0Y2RkMGRiYzE0N2U0ZjgwNmYxMTQ3YjUwMDg1MGFiZTZlMWViZjU2MWJjY2Y0OTY'
                                    >
                                        invitation
                                    </UniversalLink>
                            </p>
                            }
                        </div>
                        <div>
                            <h3 style={{ fontFamily: 'YoungSerif' }}>Business Info</h3>
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
                    </div>
                </div>
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
