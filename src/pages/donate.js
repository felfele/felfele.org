import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import Layout from '../components/Layout';
import { bankingData, ethereumData } from './../data/donate';

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
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    paddingBottom: 50,
                    alignItems: 'center',
                    textAlign: 'center',
                }}
                >

                    <h1 style={{
                        fontSize: 76,
                        fontFamily: 'YoungSerif',
                        marginBottom: 0,
                    }}
                    >
                        Make a donation
                    </h1>
                    <p style={{
                        fontSize: 27,
                        fontWeight: 'normal',
                        marginTop: 0,
                    }}>
                        We are proudly nonprofit and we stand for uncompromised social media.
                        We build Felfele because we care and it’s thanks to people like you that we can continue developing it.
                    </p>
                    <div>
                        <h3 style={{
                            fontFamily: 'YoungSerif',
                            fontSize: 27,
                            marginBottom: 0,
                        }}>
                            Bank Transfer
                        </h3>
                        <br />
                        {Object.keys(bankingData).map(key => {
                            if (bankingData[key]) {
                                return (
                                    <p style={{ fontSize: 18, margin: 0 }}>
                                        <b>{key}: </b>
                                        <r>{bankingData[key]}</r>
                                    </p>
                                );
                            }
                        })}
                    </div>
                    <div>
                    <h3 style={{
                            fontFamily: 'YoungSerif',
                            fontSize: 27,
                            marginBottom: 0,
                        }}>
                            Ethereum Transaction
                        </h3>
                        <br />
                        {Object.keys(ethereumData).map(key => {
                            if (ethereumData[key]) {
                                return (
                                    <p style={{ fontSize: 18, margin: 0 }}>
                                        <b>{key}: </b>
                                        <r>{ethereumData[key]}</r>
                                    </p>
                                );
                            }
                        })}
                    </div>
                </div>
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
