import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';

import ThemeProvider from '../components/ThemeProvider';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Bio from '../components/Bio';

/**
 * Tags page
 * @param {Object} props - props
 * @returns {React.ReactNode} tags page
 */
const Tags = ({pageContext, data, location}) => {
    const {title: siteTitle} = data.site.siteMetadata;
    const {tag} = pageContext;
    const {edges, totalCount} = data.allMarkdownRemark;
    const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`;

    return (
        <ThemeProvider>
            <Layout location={location} title={siteTitle}>
                <SEO title={tag} description={tagHeader} />
                <Bio />
                <h4>{tagHeader}</h4>
                <ul>
                    {edges.map(({node}) => {
                        const {path, title} = node.frontmatter;
                        return (
                            <li key={path}>
                                <Link to={path}>{title}</Link>
                            </li>
                        );
                    })}
                </ul>
                {/*
              This links to a page that does not yet exist.
              We'll come back to it!
            */}
                <Link to="/tags">All tags</Link>
            </Layout>
        </ThemeProvider>
    );
};

Tags.propTypes = {
    pageContext: PropTypes.shape({
        tag: PropTypes.string.isRequired
    }),
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            totalCount: PropTypes.number.isRequired,
            edges: PropTypes.arrayOf(PropTypes.shape({
                node: PropTypes.shape({
                    frontmatter: PropTypes.shape({
                        path: PropTypes.string.isRequired,
                        title: PropTypes.string.isRequired
                    })
                })
            }).isRequired)
        }),
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                title: PropTypes.string.isRequired
            })
        })
    }),
    location: PropTypes.object.isRequired
};

export default Tags;

export const pageQuery = graphql`
    query($tag: String) {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(
            limit: 2000
            sort: {fields: [frontmatter___date], order: DESC}
            filter: {frontmatter: {tags: {in: [$tag]}}}
        ) {
            totalCount
            edges {
                node {
                    frontmatter {
                        path
                        title
                    }
                }
            }
        }
    }
`;
