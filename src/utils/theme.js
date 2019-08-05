import {useState, useEffect} from 'react';

export const palette = {
    black: '#222222',
    orange: '#f29d0b',
    paleGrey: '#f1f5f7',
    white: '#fff',
    blue: '#007acc'
};

export const getTheme = theme =>
    (theme === 'light'
        ? {
            background: palette.white,
            color: palette.black,
            link: palette.blue
        }
        : {
            background: palette.black,
            color: palette.paleGrey,
            link: palette.orange
        });

/**
 * A hook to get and update the current theme for dark mode
 * @returns [theme, toggleTheme] - [current theme, function to toggle theme]
 */
export const useTheme = () => {
    const storedTheme = typeof window !== 'undefined' && window.localStorage.getItem('theme');
    const [theme, setTheme] = useState(storedTheme || 'dark');
    const toggleTheme = () => setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem('theme', theme);
        }
    }, [theme]);
    return [theme, toggleTheme];
};
