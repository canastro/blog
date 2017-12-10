// @flow
import React, {Component} from 'react';
import type {Node} from 'react';
import ReactDisqusComments from 'react-disqus-comments';

type Props = {
    postNode: Object,
    slug: string
};

/**
 * Discus comments component
 * @extends Component
 */
class Disqus extends Component<Props> {
    /**
     * Constructor
     * @method  constructor
     * @param   {Props}    props - component props
     */
    constructor(props) {
        super(props);
        this.notifyAboutComment = this.notifyAboutComment.bind(this);
    }

    /**
     * Callback method for when a new comment is added to disqus
     * @method  notifyAboutComment
     */
    notifyAboutComment() {
        console.log(this, 'new comment');
    }

    /**
     * Renders comments section
     * @method  render
     * @returns {Node} Discus component
     */
    render(): Node {
        const {postNode, slug} = this.props;
        const post = postNode.frontmatter;
        const url = `https://canastro.github.io/blog${slug}`;

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
