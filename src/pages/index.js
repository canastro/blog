import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import {css} from '@emotion/core';

import ThemeProvider from '../components/ThemeProvider';
import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Tag from '../components/Tag';
import {rhythm} from '../utils/typography';

const styles = {
    post: css`
        margin-bottom: ${rhythm(2)};
    `,
    articleTitle: css`
        margin-top: ${rhythm(1 / 4)};
        margin-bottom: ${rhythm(1 / 4)};
    `,
    link: css`
        box-shadow: none;
    `,
    p: css`
        margin-bottom: 15px;
    `,
    tags: css`
        display: flex;
    `,
    titleWrapper: css`
        margin-bottom: ${rhythm(1 / 4)};
    `,
    subtitle: theme => css`
        color: ${theme.secondary};
        font-size: 1.2rem;
        font-weight: 700;
    `
};

/**
 * Builds the index page of the blog
 * @return {React.ReactNode} node
 */
const BlogIndex = ({data, location}) => {
    const {title: siteTitle, keywords} = data.site.siteMetadata;
    const posts = data.allMarkdownRemark.edges;

    return (
        <ThemeProvider>
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
                        <main css={styles.post} key={node.fields.slug}>
                            <small>{node.frontmatter.date}</small>
                            <div css={styles.titleWrapper}>
                                <h2 css={styles.articleTitle}>
                                    <Link css={styles.link} to={path}>
                                        {title}
                                    </Link>
                                </h2>
                                {subtitle && <span css={styles.subtitle}>{subtitle}</span>}
                            </div>
                            <p css={styles.p} dangerouslySetInnerHTML={{__html: node.excerpt}} />
                            <div css={styles.tags}>
                                {tags.map(tag => (
                                    <Tag key={tag.text} {...tag} />
                                ))}
                            </div>
                        </main>
                    );
                })}
            </Layout>
        </ThemeProvider>
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
