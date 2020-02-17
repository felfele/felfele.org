import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import Layout from '../components/Layout';
import { teamData } from './../data/team';

class Team extends React.Component {
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
                    title={`Team | ${siteTitle}`}
                />
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <h1 style={{ fontFamily: 'Jost' }}>Team</h1>
                        <br />
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            maxWidth: 600,
                            justifyContent: 'center',
                        }}>
                        {Object.keys(teamData).map(key => {
                            if (teamData[key]) {
                                return <Avatar data={teamData[key]}/>;
                            }
                        })}
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

const Avatar = ({ data }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 15,
        }}>
            <img
                style={{
                    width: 112,
                    height: 112,
                    borderRadius: 66,
                }}
                src={data.image}
            />
            {Object.keys(data.data).map(key => {
                if (data.data[key]) {
                    return <p style={{ marginBottom: 0 }}>{data.data[key]}</p>;
                }
            })}
        </div>
    );
}

export default Team;

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
