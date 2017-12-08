import React, { PureComponent } from 'react';
import Link from 'gatsby-link';
import { Container } from 'react-responsive-grid';
import 'prismjs/themes/prism-okaidia.css';

import { rhythm, scale } from '../utils/typography';

/**
 * Get header
 * @method  getHeader
 * @param   {Boolean} isRoot Is content page the root page
 * @returns {Node} Header content
 */
const getHeader = (isRoot) => {
    const linkStyle = {
        boxShadow: 'none',
        textDecoration: 'none',
        color: 'inherit'
    };

    const link = (
        <Link style={linkStyle} to="/">
            What about this?
        </Link>
    );

    if (isRoot) {
        return (
            <h1
                style={{
                    ...scale(1.5),
                    marginBottom: rhythm(1.5),
                    marginTop: 0
                }}
            >
                {link}
            </h1>
        );
    }

    return (
        <h3
            style={{
                fontFamily: 'Montserrat, sans-serif',
                marginTop: 0,
                marginBottom: rhythm(-1)
            }}
        >
            {link}
        </h3>
    );
};

/**
 * Get the root path for the blog
 * @method  getRootPath
 * @returns {String} root path
 */
const getRootPath = () => {
    if (typeof __PREFIX_PATHS__ !== 'undefined' && __PREFIX_PATHS__) {
        return `${__PATH_PREFIX__}/`;
    }

    return '/';
};

class Template extends PureComponent {
    render() {
        const { location, children } = this.props;
        const rootPath = getRootPath();

        return (
            <Container
                style={{
                    maxWidth: rhythm(24),
                    padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
                }}
            >
                {getHeader(location.pathname === rootPath)}
                {children()}
            </Container>
        );
    }
}

export default Template;
