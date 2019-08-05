import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';
import {css} from '@emotion/core';

import ThemeProvider from '../components/ThemeProvider';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Tag from '../components/Tag';
import {rhythm, scale} from '../utils/typography';

const styles = {
    subtitle: css`
        display: block;
        margin-top: ${rhythm(-1)};
        margin-bottom: ${rhythm(1)};
        font-size: 1.5rem;
    `,
    smallText: css`
        ${scale(-1 / 5)}
        display: block;
        margin-bottom: ${rhythm(1)};
    `,
    hr: css`
        margin-bottom: ${rhythm(1)};
    `,
    navigation: css`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        list-style: none;
        padding: 0;
    `,
    tags: css`
        display: flex;
    `
};

/**
 * Given a post object, build a post page
 * @param {Object} props - component props
 * @returns {React.ReactNode} - node
 */
const BlogPostTemplate = (props) => {
    const post = props.data.markdownRemark;
    const siteTitle = props.data.site.siteMetadata.title;
    const {previous, next, tags} = props.pageContext;
    const {title, subtitle} = post.frontmatter;
    const keywords = tags.map(tag => tag.text);

    return (
        <ThemeProvider>
            <Layout location={props.location} title={siteTitle}>
                <SEO title={title} description={post.excerpt} keywords={keywords} />
                <div css={styles.header}>
                    <h1>{title}</h1>
                    {subtitle && <strong css={styles.subtitle}>{subtitle}</strong>}
                    <div css={styles.tags}>
                        {tags.map(tag => (
                            <Tag key={tag.text} {...tag} />
                        ))}
                    </div>
                    <p css={styles.smallText}>{post.frontmatter.date}</p>
                </div>
                <div dangerouslySetInnerHTML={{__html: post.html}} />

                <hr css={styles.hr} />

                <ul css={styles.navigation}>
                    <li>
                        {previous && (
                            <Link to={previous.fields.slug} rel="prev">
                                ← {previous.frontmatter.title}
                            </Link>
                        )}
                    </li>
                    <li>
                        {next && (
                            <Link to={next.fields.slug} rel="next">
                                {next.frontmatter.title} →
                            </Link>
                        )}
                    </li>
                </ul>
            </Layout>
        </ThemeProvider>
    );
};

BlogPostTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    pageContext: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
};

export default BlogPostTemplate;

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        markdownRemark(fields: {slug: {eq: $slug}}) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                subtitle
                date(formatString: "MMMM DD, YYYY")
            }
        }
    }
`;
