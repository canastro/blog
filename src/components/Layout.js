import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';
import {css} from '@emotion/core';
import {FaRegLightbulb, FaLightbulb} from 'react-icons/fa';

import ThemeContext from './ThemeContext';
import {rhythm, scale} from '../utils/typography';

const styles = {
    root: css`
        position: relative;
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
    `,
    toggleTheme: theme => css`
        position: absolute;
        right: 0;
        top: ${rhythm(1.5)};
        border: 0;
        background: ${theme.color};
        color: ${theme.background};
        height: 40px;
        width: 40px;
        border-radius: 50%;
    `
};

/**
 * Builds the base page layout
 * @param {Object} props - component props
 * @returns {React.ReactNode} - node
 */
const Layout = ({location, title, children}) => {
    const {theme, toggleTheme} = useContext(ThemeContext);

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
            {header}
            <button css={styles.toggleTheme} onClick={toggleTheme}>
                {theme === 'light' ? <FaLightbulb /> : <FaRegLightbulb />}
            </button>
            {children}
        </div>
    );
};

Layout.propTypes = {
    location: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default Layout;
