import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';
import kebabCase from 'lodash/kebabCase';

import ThemeProvider from '../components/ThemeProvider';
import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

/**
 *
 * @param {Object} props - props
 * @returns {React.ReactNode} - node
 */
const TagsPage = ({data, location}) => {
    const {group} = data.allMarkdownRemark;
    const {title, keywords} = data.site.siteMetadata;

    return (
        <ThemeProvider>
            <Layout location={location} title={title}>
                <SEO title="All tags" keywords={keywords} />
                <Bio />
                <div>
                    <h4>Tags</h4>
                    <ul>
                        {group.map(tag => (
                            <li key={tag.fieldValue}>
                                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                                    {tag.fieldValue} ({tag.totalCount})
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </Layout>
        </ThemeProvider>
    );
};

TagsPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            group: PropTypes.arrayOf(PropTypes.shape({
                fieldValue: PropTypes.string.isRequired,
                totalCount: PropTypes.number.isRequired
            }).isRequired)
        }),
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                title: PropTypes.string.isRequired,
                keywords: PropTypes.arrayOf(PropTypes.string)
            })
        })
    }),
    location: PropTypes.object.isRequired
};

export default TagsPage;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
                keywords
            }
        }
        allMarkdownRemark(limit: 2000, filter: {frontmatter: {draft: {ne: true}}}) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }
`;
