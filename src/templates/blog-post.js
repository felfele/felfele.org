import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';

import Layout from '../components/Layout';

class BlogPostTemplate extends React.Component {
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
        const post = this.props.data.markdownRemark;
        const siteTitle = get(this.props, 'data.site.siteMetadata.title');
        const siteDescription = post.excerpt;
        const { previous, next } = this.props.pageContext;

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <Helmet
                    htmlAttributes={{ lang: 'en' }}
                    meta={[{ name: 'description', content: siteDescription }]}
                    title={`${post.frontmatter.title} | ${siteTitle}`}
                />
                <Link to="/blog">&larr; Blog</Link>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        flexBasis: 'auto',
                    }}
                >
                    <h1>{post.frontmatter.title}</h1>
                    <p>
                        {post.frontmatter.date}
                    </p>
                    <div
                        style={{
                            alignItems: 'center',
                            justifyItems: 'center',
                            maxWidth: 800,
                            width: this.state.width - 20,
                            color: '#21004F',
                        }}
                        dangerouslySetInnerHTML={{ __html: post.html }}
                    />
                    <hr/>
                    <ul
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            listStyle: 'none',
                            padding: 0,
                        }}
                    >
                        <li>
                            {previous && (
                                <Link to={previous.frontmatter.path} rel="prev">
                                    ← {previous.frontmatter.title}
                                </Link>
                            )}
                        </li>
                        <li>
                            {next && (
                                <Link to={next.frontmatter.path} rel="next">
                                    {next.frontmatter.title} →
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </Layout>
        );
    }
}

export default BlogPostTemplate;

export const query = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        markdownRemark(frontmatter: { path: { eq: $slug } }) {
            id
            excerpt
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                path
            }
            fields {
                slug
            }
        }
    }
`;
