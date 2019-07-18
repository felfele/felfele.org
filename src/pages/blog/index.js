import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';

import Layout from '../../components/Layout';

class BlogIndex extends React.Component {
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
        const posts = get(this, 'props.data.allMarkdownRemark.edges');

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <Helmet
                    htmlAttributes={{ lang: 'en' }}
                    meta={[{ name: 'description', content: siteDescription }]}
                    title={`Blog | ${siteTitle}`}
                />
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <h1
                        style={{
                            fontSize: 76,
                            fontFamily: 'YoungSerif',
                            marginBottom: 0,
                        }}
                    >
                        Blog
                    </h1>
                    {posts.map(({ node }) => {
                        const title =
                            get(node, 'frontmatter.title') || node.frontmatter.path;
                        return (
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    maxWidth: 800,
                                }}
                                key={node.frontmatter.path}
                            >
                                <h3
                                    style={{
                                        fontFamily: 'YoungSerif',
                                        fontSize: 27,
                                        marginBottom: 0,
                                    }}
                                >
                                    <Link
                                        style={{ boxShadow: 'none' }}
                                        to={node.frontmatter.path}
                                    >
                                        {title}
                                    </Link>
                                </h3>
                                {node.frontmatter.featuredImage != null &&
                                <div style={{
                                    maxWidth: 500,
                                    width: this.state.width > 520 ? 500 : this.state.width - 20,
                                    paddingTop: 20,
                                    paddingBottom: 20,
                                }}>
                                    <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid}/>
                                </div>
                                }
                                <small>{node.frontmatter.date}</small>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: node.excerpt,
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            </Layout>
        );
    }
}

export default BlogIndex;

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
                description
            }
        }
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { type: { eq: "post" } } }
        ) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        path
                        type
                        featuredImage {
                            childImageSharp {
                                fluid(maxWidth: 500) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
