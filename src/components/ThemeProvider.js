import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {ThemeProvider as EmotionThemeProvider} from 'emotion-theming';
import {Global, css} from '@emotion/core';

import ThemeContext from './ThemeContext';
import {useTheme, getTheme} from '../utils/theme';
import PRISM_THEME_LIGHT from '../styles/prism-theme-light';
import PRISM_THEME_DARK from '../styles/prism-theme-dark';

const ThemeProvider = ({children}) => {
    const [theme, toggleTheme] = useTheme();
    const currentTheme = getTheme(theme);
    const lightTheme = getTheme('light');
    const {color} = currentTheme;
    const [key, forceUpdate] = useState(0);

    useEffect(() => {
        // let react take care of dynamic styles
        forceUpdate(1);
        // after mounting, remove the class from body
        document.body.classList.remove('dark');
    }, []);

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <EmotionThemeProvider theme={currentTheme}>
                <Global
                    styles={css({
                        body: {
                            // for rubber band effect in Chrome on MacOS
                            // and outside the scaled div with background color
                            backgroundColor: currentTheme.background
                        },
                        a: {color: currentTheme.link},
                        blockquote: {color},
                        'body.light': {
                            '.container': {
                                background: lightTheme.background,
                                color: lightTheme.color
                            }
                        }
                    })}
                />
                <Global styles={css(theme === 'light' ? PRISM_THEME_LIGHT : PRISM_THEME_DARK)} />
                <div
                    css={{
                        color,
                        zIndex: 1,
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                    className="container"
                    key={key}
                >
                    {children}
                </div>
            </EmotionThemeProvider>
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default ThemeProvider;
