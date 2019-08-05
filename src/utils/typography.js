import Typography from 'typography';
import Wordpress2016 from 'typography-theme-wordpress-2016';
import {css} from '@emotion/core';

delete Wordpress2016.googleFonts;

const typography = new Typography(Wordpress2016);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
    typography.injectStyles();
}

/**
 * Scales a text
 * @param {Number} value - text scale
 * @returns {String} css
 */
export const scale = (value) => {
    const scaled = typography.scale(value);

    return css`
        font-size: ${scaled.fontSize};
        line-height: ${scaled.lineHeight};
    `;
};

export const {rhythm} = typography;
export default typography;
