import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import {rhythm} from '../utils/typography';

/**
 * Builds the index page of the blog
 * @return {React.ReactNode} node
 */
const BlogIndex = ({data, location}) => {
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="All posts" keywords={['blog', 'gatsby', 'javascript', 'react']} />
            <Bio />
            {posts.map(({node}) => {
                const title = node.frontmatter.title || node.fields.slug;
                return (
                    <div key={node.fields.slug}>
                        <h3
                            style={{
                                marginBottom: rhythm(1 / 4)
                            }}
                        >
                            <Link style={{boxShadow: 'none'}} to={node.fields.slug}>
                                {title}
                            </Link>
                        </h3>
                        <small>{node.frontmatter.date}</small>
                        <p dangerouslySetInnerHTML={{__html: node.excerpt}} />
                    </div>
                );
            })}
        </Layout>
    );
};

BlogIndex.propTypes = {
    data: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
};

export default BlogIndex;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                    }
                }
            }
        }
    }
`;
