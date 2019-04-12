import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import Layout from '../components/Layout';
import { bankingData, ethereumData } from './../data/donate';
import { Row } from 'react-flexbox-grid';

class Donate extends React.Component {
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
                    title={`Donate | ${siteTitle}`}
                />
                <h2>Donate</h2>
                <p style={{
                        textAlign: 'center',
                    }}>
                    We are a registered non-profit organization pledged to enable people to
                    communicate freely in the digital era, without having to worry about their privacy,
                    and the potential loss of their rights over the content they produce.
                    The cost of maintaining the infrastructure to operate such services decreased to
                    levels that literally every little bit counts. Donating $10 can be sufficient for securing
                    user data for 1000 people.
                </p>
                <Row around='xs'>
                    <div>
                        <h2>Bank Transfer</h2>
                        <br />
                        {Object.keys(bankingData).map(key => {
                            if (bankingData[key]) {
                                return (
                                    <p>
                                        <b>{key}: </b>
                                        <r>{bankingData[key]}</r>
                                    </p>
                                );
                            }
                        })}
                    </div>
                    <div>
                        <h2>Ethereum Transaction</h2>
                        <br />
                        {Object.keys(ethereumData).map(key => {
                            if (ethereumData[key]) {
                                return (
                                    <p>
                                        <b>{key}: </b>
                                        <r>{ethereumData[key]}</r>
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

export default Donate;

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
