import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Tag from '../components/Tag';
import Disqus from '../components/Disqus';
import {rhythm, scale} from '../utils/typography';

const styles = {
    smallText: {
        ...scale(-1 / 5),
        display: 'block',
        marginBottom: rhythm(1)
    },
    hr: {marginBottom: rhythm(1)},
    navigation: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        listStyle: 'none',
        padding: 0
    },
    tags: {display: 'flex', marginTop: rhythm(-0.5)}
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

    return (
        <Layout location={props.location} title={siteTitle}>
            <SEO title={post.frontmatter.title} description={post.excerpt} />
            <div css={styles.header}>
                <h1>{post.frontmatter.title}</h1>
                <div css={styles.tags}>
                    {tags.map(tag => (
                        <Tag {...tag} />
                    ))}
                </div>
                <p style={styles.smallText}>{post.frontmatter.date}</p>
            </div>
            <div dangerouslySetInnerHTML={{__html: post.html}} />

            <hr style={styles.hr} />
            <Disqus postNode={post} slug={props.pageContext.slug} />

            <ul style={styles.navigation}>
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
                date(formatString: "MMMM DD, YYYY")
            }
        }
    }
`;
