import React from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';

import Disqus from '../components/Disqus';
import { rhythm, scale } from '../utils/typography';

export default (props) => {
    const post = props.data.markdownRemark;
    const siteTitle = get(props, 'data.site.siteMetadata.title');

    return (
        <div>
            <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
            <h1>{post.frontmatter.title}</h1>
            <p
                style={{
                    ...scale(-1 / 5),
                    display: 'block',
                    marginBottom: rhythm(1),
                    marginTop: rhythm(-1)
                }}
            >
                {post.frontmatter.date}
            </p>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr
                style={{
                    marginBottom: rhythm(1)
                }}
            />
            <Disqus postNode={post} slug={props.pathContext.slug}/>
        </div>
    );
};

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
            }
        }
    }
`;
