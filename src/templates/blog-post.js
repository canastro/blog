// @flow
import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import typography from '../utils/typography';
import Disqus from '../components/Disqus';

const {rhythm, scale} = typography;

type Props = {
    data: Object,
    pathContext: Object
};

/**
 * Blog Post template
 * @method
 * @param   {Object} props - react props
 * @returns {Node} react node
 */
export default (props: Props) => {
    const post = props.data.markdownRemark;

    let tagsSection;
    if (props.data.markdownRemark.fields.tagSlugs) {
        const tagsArray = props.data.markdownRemark.fields.tagSlugs;
        const tags = tagsArray.map((tag, i) => {
            const divider = i < tagsArray.length - 1 && <span> | </span>;
            return (
                <span key={tag}>
                    <Link to={tag}>{props.data.markdownRemark.frontmatter.tags[i]}</Link>
                    {divider}
                </span>
            );
        });
        tagsSection = (
            <em
                style={{
                    ...scale(-1 / 5),
                    display: 'block',
                    marginBottom: rhythm(1)
                }}
            >
                Tagged with {tags}
            </em>
        );
    }

    return (
        <div>
            <Helmet
                title={`${post.frontmatter.title}`}
                meta={[{name: 'description', content: post.excerpt}]}
            />
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{__html: post.html}} />
            {tagsSection}
            <p
                style={{
                    ...scale(-1 / 5),
                    display: 'block',
                    marginBottom: rhythm(1)
                }}
            >
                Posted {post.frontmatter.date}
            </p>
            <hr
                style={{
                    marginBottom: rhythm(1)
                }}
            />
            <Disqus postNode={post} slug={props.pathContext.slug} />
        </div>
    );
};

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                author
                homeCity
            }
        }
        markdownRemark(fields: {slug: {eq: $slug}}) {
            html
            excerpt
            fields {
                tagSlugs
            }
            frontmatter {
                title
                tags
                date(formatString: "MMMM DD, YYYY")
            }
        }
    }
`;
