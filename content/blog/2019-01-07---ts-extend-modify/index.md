---
path: "/typescript-extend-modify-type"
title: Typescript - Extending and modifying existing types with Mapped Types
subtitle: A Typescript beginner's hard-learned lessons
tags: ["react", "typescript", "ts-beginners-series"]
draft: false
date: "2019-01-07T22:00:00.000Z"
---

I'm no Typescript expert (well, I'm not an expert at anything really :sweat_smile:).
I'm a TS newbie that wants to catalog his most interesting and useful findings. 

# Modify a type
Having the following scenario: you're creating a lib that hopefuly alot of other devs will use to build their apps. Your lib has a static theme configuration object, but sooner or later your users will ask you to provide a way to override some parts of that theme, such as:

```js
export interface Palette {
  white: string;
  grey: string;
  black: string;
  primary: string;
  secondary: string;
};

const defaultPalette = {
  white: '#fff',
  grey: '#f7f9fa',
  black: '#222',
  primary: '#6d30e7',
  secondary: '#dfdded'
};

export const createPalette = (overrides?: PaletteInput): Palette => 
  Object.assign({}, defaultPalette, overrides);
```

It would make no sense to make it mandatory for the consumers of your lib to provide a complete theme object, they would only need to provide the values that they want to override. Therefore, you cannot reuse the **Palette** type. Your **PaletteInput** will have to have all props marked as optional and it should be readonly. 

Ideally you avoid to duplicate code, so you wouldn't want to have two types looking exactly the same expect the readyonly and optional modifiers. If you use [Mapped Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html) you can iterate all the keys in a given type add some modifier to them creating a new type:

```js
export type PaletteInput = {
  +readonly [K in keyof Palette]+?: Palette[K];
}
```

Typescript, already implements some types which you can use to achieve the same result:

```js
type Nullable<T> = { 
  [P in keyof T]: T[P] | null 
}

type Readonly<T> = {
  readonly [P in keyof T]: T[P];
}

type Partial<T> = {
  [P in keyof T]?: T[P];
}
```

And you can use them like so to achieve the same result:

```js
export type PaletteInput = ReadOnly<Partial<Palette>>;
```

Its up to you to decide if you prefer to use the ReadOnly and Partial built-ins or to build your own Input type using **keyof** and adding the readonly and optional modifiers.

You might have noticed that in my type definitions I added a plus sign before the **readonly** and **optional**, thats just to make it clear that we want to add those modifiers to the given key. Its also possible to use a minus sign in order to remove a modifier from the base type.

Check the [example on typescript-play.js.org.](https://typescript-play.js.org/#code/JYOwLgpgTgZghgYwgAgApwDYTJZBvAKGWQHcALYSALmQGcwpQBzAbiOSaggE8b7GQrdgCMMiANZ8GzNsQAOjALZwovOtMGy6EBAHsQAExVr+MggF82BAPQAqW0VvIw3OSnRYcEAJIg5AVzBkAF40FTBgTAAeACUIOAMAeRAMbiiPbEgAPizZW2sCAhc3MM9IXwCg0MJiAGouBP1U5ABtAGlkUGRxHl0YUsyIAF1agH4aDK92obZzQr0QemQDCHh-DDBJ3Gr2ckoIGgByAGIYM8OAGnZOHiPTgHYYAE54S5ExBElkE4AmP7f5EpjHcAGwGADMAAYIPcAdoFkZVHcDDADCsDIcLFYFksEA1IFsUKEABS6ABu0EYK1o4wGXgqgQAlBNMIMQllkOxiIlhAArHRgAB0cFotGATBAxLw5guy1WcHWm1ZXll5MpwGpjK0BBxQTkyu2yDx8QJBogxK1Ov0uP89F0imAAC8IAZCSEjfiIISpcgFMBlEjvlwMchzJarYtdFhBRhdEwffqyhBZQhbWB7U6XW6wywgA)

# Modify and extend a type

What if we want to provide some inputs that are not exactly overrides, but are variables that will be used to compute the new theme, something like:

```js
export interface Typography {
    fontSizeH1: string;
    fontWeightNormal: number;
    fontWeightBold: number;
}

const createTypography = (typography?: TypographInput): Typography => {
    const {
        fontSize = 14,
        htmlFontSize = 16,
        fontWeightNormal = 400,
        fontWeightBold = 700
    } = typography || {};

    const coef = fontSize / 14;
    const pxToRem = (size: number) => `${(size / htmlFontSize) * coef}rem`;

    return {
        fontSizeH1: pxToRem(96),
        fontWeightNormal,
        fontWeightBold
    };
};

export default createTypography;
```

In the previous snippet, the input type includes fontSize and htmlFontSize just to create a helper function and are not part of the output type, yet the other props are part of the output. In order to create the new Input type we can use the [intersection types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types):

```js
export type TypographyInput = {
    +readonly [K in keyof Typography]+?: Typography[K];
} & {
    fontSize?: number;
    htmlFontSize?: number;
}
```

Check the [example on typescript-play.js.org.](https://typescript-play.js.org/#code/JYOwLgpgTgZghgYwgAgCoE8AOB7A5lOTAC3WQG8AoZa5GbcAZWAC8IAJARgC5kBnMKKFwBuKjTrgA6hGC4iYAHLYoAWzgAbHiACuKgEbRRNWvTDTZ8gELZ1AEy26DUUQF8KFMFhQYc+QiQBJEExtMGQAXnIxagBqKAg4W3p1UgBtAGlkUGQAawh0bBg0LDwCYnQAXRiAfh4fUv90DIrXZAAyKOMJMCZWWuQdfUNo5HkVdQAxU16IfsGnV3cAegAqFY8vYt8ywODQiOQABTgoMGANAB4AJQSkkBSL+r9ygD4X9s7xaZZZhyHnEZjSbfPp-BYUNzIFZLdwIej8ZAIeJwSBPHakSIACk820a-TRjSCITAAEo6iVniQIu9KMY4SAEbTjF9GD8DhwACwAGhGxiBU1ZrHZADYecyWWYZHJFMo1OoDhyAAyKsXikxSKVWGy2A4AdmVIxcBxxDXKyAAPubyC5RCN6Qi4RAipFujNkEtkJyjDR7WFMAAPVDYG4qA6Y3g-MHQEnU5AAAwAJGRw2yPfyQRAYytEdgnS54io47bjPEwNooCBPuLXT9ODwA0GQ5iAJzCkmq6umczSpSqDQd5ndbtauyG1y2ii+5AmykYxHI1EU9GYkmiKcIbT8bAqH62AlmyJIhKL3HlTFkdU9SPIABMiuQLlXsPhNggADp1Hhz9Ol40uYjNzAbdd33KlH2EIA)

# Final remarks

As I was starting with Typescript these were some of the scenarios that I might have placed a **any** type and marked as "to be reviewed 'later'" Yeah, right!

I hope to have shed some light on the powerful tool that Mapped Types are.

*If you find any error, be it on my poor english or any technical detail, please don't be shy. I'll try to continuously improve this blog post :simple_smile:*