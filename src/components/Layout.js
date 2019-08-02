import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';
import {css, Global} from '@emotion/core';

import 'prismjs/themes/prism-okaidia.css';
import './prism.css';
import {palette, text} from '../utils/theme';
import {rhythm, scale} from '../utils/typography';

const globalStyles = css`
    body {
        background: ${palette.primary};
        color: ${text.body.color};
    }
`;

const styles = {
    root: css`
        margin-left: auto;
        margin-right: auto;
        max-width: ${rhythm(30)};
        padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
    `,
    h1: css`
        ${scale(1.25)}
        margin-bottom: ${rhythm(1)};
        margin-top: 0;
    `,
    h3: css`
        font-family: Montserrat, sans-serif;
        margin-top: 0;
        margin-bottom: ${rhythm(-1)};
    `,
    link: css`
        box-shadow: none;
        text-decoration: none;
        color: inherit;
    `
};

/**
 * Builds the base page layout
 * @param {Object} props - component props
 * @returns {React.ReactNode} - node
 */
const Layout = ({location, title, children}) => {
    const rootPath = `${__PATH_PREFIX__}/`;
    const tagsPath = `${__PATH_PREFIX__}/tags`;
    let header;

    if (rootPath === location.pathname || location.pathname.startsWith(tagsPath)) {
        header = (
            <h1 css={styles.h1}>
                <Link css={styles.link} to="/">
                    {title}
                </Link>
            </h1>
        );
    } else {
        header = (
            <h3 css={styles.h3}>
                <Link css={styles.link} to="/">
                    {title}
                </Link>
            </h3>
        );
    }
    return (
        <div css={styles.root}>
            <Global styles={globalStyles} />
            {header}
            {children}
        </div>
    );
};

Layout.propTypes = {
    location: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired
};

export default Layout;
