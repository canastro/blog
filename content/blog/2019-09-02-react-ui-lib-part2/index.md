---
title: React UI-Kit - Adding a theme (Part 2)
tags:
  - react
  - typescript
  - storybook
  - styled-components
draft: false
date: "2019-01-02T22:00:00.000Z"
---

This is a series of posts about how to create a module of reusable ui components with typescript, storybook and styled components:
* Part 1 - React UI-Kit - Setup, Create first component and Sample app
* Part 2 - React UI-Kit - Adding a theme

Most likely your components will have some common UI characteristics, such as colors, paddings, fonts, etc. having a theme to normalize this will come handy. 

In this tutorial we're just going to create a palette for the theme, but lets create it in a separate file to promote some separation instead of creating a huge file with all theme variables.

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

But if you have your theme composed as static objects the user will not have the oportunity to adapt the components to match subtle changes in their app... So lets change the approach a little bit, lets change the theme and the palette to be a function to allow the user to provide some overrides:

**src/theme/palette.ts**:
```js
export type Palette = {
  white: string;
  grey: string;
  black: string;
  primary: string;
  secondary: string;
};

const createPalette = (palette: any): Palette => {
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

const createTheme = (options: any = {}): Theme => {
  const {
    palette: paletteInput = {},
    typography: typographyInput = {},
  } = options;

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

So now that we have our theme builder, lets see how we use this.

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

Now lets update the StyleButton to use our theme variables. If you go back to your **styled-button.jsx** you can change your styled components to use theme colors instead of hardcoded colors for example. To access the theme you add a function to your template literal and get the theme from the props:

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

So, now we need to update our story to also include the theme. Storybook has a function called `addDecorator` which allows you to define a high order component that will be use with all your stories, so just make sure you import the ThemeProvider and the theme and add your decorator your `.storybook/config.js`:

```js
addDecorator(renderStory => (
    <ThemeProvider theme={createTheme()}>
        {renderStory()}
    </ThemeProvider>
));
```

Also, we don't want our ThemeProvider documentation to polute our stories, so we need to update our `.storybook/config.js` file to ignore ThemeProvider in the info-addon for the propTypes table. Update your withInfo configuration to be like this:

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
