import React, { Component } from 'react';
import Link from 'gatsby-link';
import ReactDisqusComments from 'react-disqus-comments';

class Disqus extends Component {
    constructor(props) {
        super(props);
        this.notifyAboutComment = this.notifyAboutComment.bind(this);
    }

    notifyAboutComment() {
        console.log(this, 'new comment');
    }

    render() {
        const { postNode, slug } = this.props;
        const post = postNode.frontmatter;
        const url = `https://canastro.github.io/what-about-this${slug}`;

        return (
            <section>
                <header>Comments</header>
                <ReactDisqusComments
                    shortname="what-about-this"
                    identifier={post.title}
                    title={post.title}
                    url={url}
                    category_id={post.category_id}
                    onNewComment={this.notifyAboutComment}
                />
            </section>
        );
    }
}

export default Disqus;
