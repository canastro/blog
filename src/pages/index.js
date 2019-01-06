import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';
import kebabCase from 'lodash/kebabCase';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Tag from '../components/Tag';
import {rhythm} from '../utils/typography';

const styles = {
    h3: {
        marginBottom: rhythm(1 / 4)
    },
    link: {boxShadow: 'none'},
    p: {marginBottom: 15},
    tags: {display: 'flex'}
};

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
                const tags = node.frontmatter.tags.map(tag => ({
                    text: tag,
                    link: `/tags/${kebabCase(tag)}/`
                }));

                return (
                    <div key={node.fields.slug}>
                        <h3 css={styles.h3}>
                            <Link css={styles.link} to={node.fields.slug}>
                                {title}
                            </Link>
                        </h3>
                        <small>{node.frontmatter.date}</small>
                        <p css={styles.p} dangerouslySetInnerHTML={{__html: node.excerpt}} />
                        <div css={styles.tags}>
                            {tags.map(tag => (
                                <Tag {...tag} />
                            ))}
                        </div>
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
                        tags
                    }
                }
            }
        }
    }
`;
