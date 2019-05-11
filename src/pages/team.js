import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import Layout from '../components/Layout';
import { teamData } from './../data/team';
import { rhythm } from '../utils/typography';

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
                    justifyContent: 'space-between',
                }}>
                    <div>
                        <h2>Team</h2>
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
                    width: rhythm(4),
                    height: rhythm(4),
                    borderRadius: rhythm(2),
                }}
                src={data.image}
            />
            {Object.keys(data.data).map(key => {
                if (data.data[key]) {
                    return <p style={{ marginBottom: '0.5rem' }}>{data.data[key]}</p>;
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
