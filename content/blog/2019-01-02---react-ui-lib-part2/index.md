---
path: "/2019-01-02---react-ui-lib-part2"
title: React UI-Kit - Adding a theme (Part 2)
tags: ["react", "typescript", "storybook", "styled-components"]
draft: false
date: "2019-01-02T22:00:00.000Z"
---

This is a series of posts about how to create a module of reusable ui components with typescript, storybook and styled components:
* [Part 1 - React UI-Kit - Setup, Create first component and Sample app](/2019-01-01---react-ui-lib-part1)
* [Part 2 - React UI-Kit - Adding a theme](/2019-01-02---react-ui-lib-part2)

Most likely your components will have some common UI traits, such as colors, paddings, fonts, etc. having a theme to normalize this will come handy. So whenever the design team decides that the primary color is going to change, you won't have to do find and replace... You just have to update your theme. :tada:

In this tutorial we're just going to create a palette for the theme, but we're doing it in a separate file to promote some separation of concerns and try to be future proof.

**src/theme/palette.ts**:
```js
const palette = {
  white: '#fff',
  grey: '#f7f9fa',
  black: '#222',
  primary: '#6d30e7',
  secondary: '#dfdded'
};

export default palette;
```

**src/theme/index.ts**:

```js
import palette from './palette';

export default { palette };
```

But if you have your theme composed as static objects the user will not have the opportunity to adapt the components to match subtle changes in their app... lets change the approach a little bit. Change the theme and the palette to be a function to allow the user to provide some overrides:

**src/theme/palette.ts**:
```js
export interface Palette = {
  white: string;
  grey: string;
  black: string;
  primary: string;
  secondary: string;
};

export type PaletteInput = {
  [K in keyof Palette]+?: Palette[K];
}

const createPalette = (palette: PaletteInput): Palette => {
  const {
    white = '#fff',
    grey = '#f7f9fa',
    black = '#222',
    primary = '#6d30e7',
    secondary = '#dfdded'
  } = palette;

  const output = {
    white,
    grey,
    black,
    primary,
    secondary
  };

  return output;
};

export default createPalette;
```

**Typescript tip:** We don't want to make it mandatory to send the full theme object when creating a new theme, therefore we cannot make the input type the same as the output type, the input type needs to have all keys optional. We can create a type from a interface using keyof to iterate all keys and then apply a modifier to make the given key optional, check [Typescript Mapped Types documentation](https://www.typescriptlang.org/docs/handbook/advanced-types.html)

**src/theme/index.ts**:
```js
import createPalette, { Palette } from './create-palette';
import createTypography, { Typography } from './create-typography';
import spacing, { Spacing } from './spacing';

export type Theme = {
  palette: Palette,
  typography: Typography,
  spacing: Spacing
};

export type ThemeInput = {
  palette?: PaletteInput,
  typography?: TypographyInput
}

const createTheme = (options: ThemeInput): Theme => {
  const {
    palette: paletteInput = {},
    typography: typographyInput = {}
  } = options || {};

  const palette = createPalette(paletteInput)
  const typography = createTypography(palette, typographyInput);

  return {
    palette,    // our color palette
    spacing,    // a spacing unit to be used on paddings / margins / etc.
    typography  // fonts and fontSizes theme
  };
};

export default createTheme;
```

In order to use this theme we're going to use the styled-components [ThemeProvider](https://www.styled-components.com/docs/advanced#theming), the usage would be something like this:

```js 
const theme = createTheme({
  palette: {
    primary: 'blue',
    secondary: 'red'
  }
});

const MyPage = () => (
  <ThemeProvider theme={theme}>
    <StyledButton>Hello World!</StyledButton>
  </ThemeProvider>
);
```

We should now update the StyleButton to use our theme variables. If you go back to your **styled-button.jsx** you can change your styled components to use theme colors instead of hard-coded colors. To access the theme add a function to your template literal and get the theme from the props. Every styled-component have access to the theme as props, if you want to use the theme outside of a styled-component you can [use the `withTheme` HoC](https://www.styled-components.com/docs/advanced#getting-the-theme-without-styled-components).

```js
const RootStyledButton = styled.button`
  cursor: pointer;
  padding: 0px ${props => props.theme.spacing.unit * 2};
  height: 49px;
  border-radius: 2px;
  border: 2px solid ${props => props.theme.palette.white};
  display: inline-flex;
  background-color: ${props =>
    props.disabled ? props.theme.palette.secondary : props.theme.palette.primary};
`;

const ButtonSpan = styled.span`
  margin: auto;
  font-size: ${props => props.theme.typography.fontSizeButton};
  font-weight: ${props => props.theme.typography.fontWeightBold};
  text-align: center;
  color: ${props => props.theme.palette.white};
  text-transform: uppercase;
`;
```

Now we need to update our story to also include the theme. Storybook has a function called `addDecorator` which allows you to define a high order component that will be use with all your stories, Import styled-component ThemeProvider and your theme builder and add your decorator to `.storybook/config.js`:

```js
addDecorator(renderStory => (
    <ThemeProvider theme={createTheme()}>
        {renderStory()}
    </ThemeProvider>
));
```

Also, we don't want our ThemeProvider documentation to pollute our stories, so we need to update our `.storybook/config.js` file to ignore ThemeProvider in the info-addon for the propTypes table. (Still haven't figured out how to not show the decorator on the story source, there is a [github issue about it](https://github.com/storybooks/storybook/issues/4801))

Update your withInfo configuration to be like this:

```js
import { ThemeProvider } from 'styled-components';

addDecorator(
  withInfo({
    header: true,
    inline: true,
    propTablesExclude: [ThemeProvider] // do not display propTable for HOC
  })
);
```


Update your **index.ts** to also export your theme related files:

```js
export { ThemeProvider } from 'styled-components';
export { default as theme } from './theme';
export { default as StyledButton } from './styled-button/styled-button';
```

We're exposing ThemeProvider from styled-components just so that we don't make the use install styled-components just to use our lib. (MAKE SURE THAT IT WORKS PROPERLY IF CUSTOMER IS ALSO USING STYLED-COMPONENTS).


# Update your sample app

1. Add our ThemeProvider to the root of the sample app: 

```js
import React from 'react';
import { ThemeProvider, theme } from 'bob-ross-kit';

const App = () => (
    <ThemeProvider theme={theme}>
    ...
    </ThemeProvider>
);

```

2. Now use your components within the provider, and they'll have access to the theme props:

```js
import React from 'react';
import { StyledButton } from 'bob-ross-kit';

const Comp = () => (
    ...
    <StyledButton onClick={() => console.log('clicked')}>Button</StyledButton>
    <StyledButtton disabled>My Button</StyledButton>
    ...
)
```

# Conclusion

By the end of this article your UI Kit should be ready to be themable and provide a default theme.

# Credits

The way theme is configurable is heavily based on the way Material-UI does his themes with JSS.