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
    post: {
        marginBottom: rhythm(2)
    },
    h3: {
        marginTop: rhythm(1 / 4),
        marginBottom: rhythm(1 / 4)
    },
    link: {boxShadow: 'none'},
    p: {marginBottom: 15},
    tags: {display: 'flex'},
    titleWrapper: {
        marginBottom: rhythm(1 / 4)
    },
    subtitle: {
        color: 'black',
        fontWeight: 700
    }
};

/**
 * Builds the index page of the blog
 * @return {React.ReactNode} node
 */
const BlogIndex = ({data, location}) => {
    const {title: siteTitle, keywords} = data.site.siteMetadata;
    const posts = data.allMarkdownRemark.edges;

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="All posts" keywords={keywords} />
            <Bio />
            {posts.map(({node}) => {
                const {subtitle, path, title = node.fields.slug} = node.frontmatter;
                const tags = node.frontmatter.tags.map(tag => ({
                    text: tag,
                    link: `/tags/${kebabCase(tag)}/`
                }));

                return (
                    <div css={styles.post} key={node.fields.slug}>
                        <small>{node.frontmatter.date}</small>
                        <div css={styles.titleWrapper}>
                            <h3 css={styles.h3}>
                                <Link css={styles.link} to={path}>
                                    {title}
                                </Link>
                            </h3>
                            {subtitle && <span css={styles.subtitle}>{subtitle}</span>}
                        </div>
                        <p css={styles.p} dangerouslySetInnerHTML={{__html: node.excerpt}} />
                        <div css={styles.tags}>
                            {tags.map(tag => (
                                <Tag key={tag.text} {...tag} />
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
                keywords
            }
        }
        allMarkdownRemark(
            sort: {fields: [frontmatter___date], order: DESC}
            filter: {frontmatter: {draft: {ne: true}}}
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
                        subtitle
                        tags
                        path
                    }
                }
            }
        }
    }
`;
