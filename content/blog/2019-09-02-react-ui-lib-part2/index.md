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
* Part 1 - Bootstrap your project and sample app
* Part 2 - Adding a default theme

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

export default {
    palette
};
```

In order to use this theme we're going to use the styled-components [ThemeProvider](https://www.styled-components.com/docs/advanced#theming), the usage would be something like this:

```js 
const MyPage = () => (
  <ThemeProvider theme={theme}>
    <StyledButton>Hello World!</StyledButton>
  </ThemeProvider>
);
```

But, as you might notice, the StyleButton does not do anything with the provided theme, so we need to change something. If you go back to your **styled-button.jsx** you can change your RootStyledButton to use theme colors instead of hardcoded colors for example. To access the theme you add a function to your template literal and get the theme from the props:

```js
const RootStyledButton = styled.button`
  padding: 0px 20px;
  height: 49px;
  border-radius: 2px;
  border: 2px solid #3d5567;
  display: inline-flex;
  background-color: ${props =>
    props.disabled ? props.theme.palette.secondary : props.theme.palette.primary};
`;
```

So, now we need to update our story to also include the theme. Storybook has a function called `addDecorator` which allows you to define a high order component that will be use with all your stories, so just make sure you import the ThemeProvider and the theme and add your decorator to your story:

```js
.addDecorator(renderStory => <ThemeProvider theme={theme}>{renderStory()}</ThemeProvider>)
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
