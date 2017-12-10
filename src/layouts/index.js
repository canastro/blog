// @flow
import React from 'react';
import type {Node} from 'react';
import Link from 'gatsby-link';
import {Container} from 'react-responsive-grid';
import injectSheet from 'react-jss';
import 'prismjs/themes/prism-okaidia.css';

import {rhythm, scale} from '../utils/typography';

const styles = {
    root: {
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
    },
    link: {
        boxShadow: 'none',
        textDecoration: 'none',
        color: 'inherit'
    }
};

/**
 * Get header
 * @method  getHeader
 * @param   {String} className - link classname
 * @param   {Boolean} shouldRenderBigHeader - Is content page the root page
 * @returns {Node} Header content
 */
const getHeader = (className: string, shouldRenderBigHeader: boolean): Node => {
    const link = (
        <Link className={className} to="/">
            What about this?
        </Link>
    );

    if (shouldRenderBigHeader) {
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
const getRootPath = (): string => {
    if (typeof __PREFIX_PATHS__ !== 'undefined' && __PREFIX_PATHS__) {
        return `${__PATH_PREFIX__}/`;
    }

    return '/';
};

type Props = {
    location: Object,
    children: Function,
    classes: {[string]: string}
};

/**
 * Main layout
 * @method
 * @param   {Object} props - react props
 * @returns {Node} react node
 */
const Layout = (props: Props) => {
    const {location, children, classes} = props;
    const rootPath = getRootPath();

    const shouldRenderBigHeader =
        location.pathname === rootPath || location.pathname.indexOf('/tags/') !== -1;

    return (
        <Container className={classes.root}>
            {getHeader(classes.link, shouldRenderBigHeader)}
            {children()}
        </Container>
    );
};

export default injectSheet(styles)(Layout);
