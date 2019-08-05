---
path: "/ts-mapped-types"
title: Typescript - Extending and modifying existing types with Mapped Types
subtitle: A Typescript beginner's hard-learned lessons
tags: ["react", "typescript"]
tweet: https://twitter.com/Canastro/status/1083346791351894018
draft: false
date: "2019-01-09T22:45:00.000Z"
---

I've been hearing people talk about Typescript for a long time now, but I never had the opportunity to use it professionally. Now with all the attention around it and the mostly good feedback from those who use it, I'm finally going to have the chance to use it on a daily basis.

During this journey I'll document those that I find my most interesting and useful findings. Inspired by [@swyx's tweet](https://twitter.com/swyx/status/1009174159690264579) a while back, I'll share those findings in this blog, this will "force" me to be more exhaust on my research and possibily have errors being pointed out by others that will help me grow as a developer. [#LearnInPublic](https://twitter.com/hashtag/LearnInPublic?src=hash)

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

It wouldn't make sense to be mandatory to provide a complete theme object when creating a new palette, only the values to be overridden should be passed. Therefore, you cannot reuse the **Palette** type. The **PaletteInput** needs to have all props marked as optional and readonly. 

Ideally you should avoid to duplicate code (or types in this case), so you wouldn't want to have two types looking exactly the same expect the readyonly and optional modifiers. If you use [Mapped Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html) you can iterate all the keys in a given type add some modifier to them creating a new type:

```js
export type PaletteInput = {
  +readonly [K in keyof Palette]+?: Palette[K];
}
```

Typescript, already implements some types which you can use to achieve the same result:

```js
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

Its up to you to decide if you prefer to use **ReadOnly** and **Partial** built-ins or to build your own Input type using **keyof** and adding the readonly and optional modifiers.

You might have noticed that in my type definitions I added a plus sign before the **readonly** and **?**, thats just to make it clear that we want to add those modifiers to the given key. Its also possible to use a minus sign to remove a modifier from the base type.

Check the [example on typescript-play.js.org.](https://typescript-play.js.org/#code/JYOwLgpgTgZghgYwgAgApwDYTJZBvAKGWQHcALYSALmQGcwpQBzAbiOSaggE8b7GQrdgCMMiANZ8GzNsQAOjALZwovOtMGy6EBAHsQAExVr+MggF82BAPQAqW0VvIw3OSnRYcEAJIg5AVzBkAF40FTBgTAAeACUIOAMAeRAMbiiPbEgAPizZW2sCAhc3MM9IXwCg0MJiAGouBP1U5ABtAGlkUGRxHl0YUsyIAF1agH4aDK92obZzQr0QemQDCHh-DDBJ3Gr2ckoIGgByAGIYM8OAGnZOHiPTgHYYAE54S5ExBElkE4AmP7f5EpjHcAGwGADMAAYIPcAdoFkZVHcDDADCsDIcLFYFksEA1IFsUKEABS6ABu0EYK1o4wGXgqgQAlBNMIMQllkOxiIlhAArHRgAB0cFotGATBAxLw5guy1WcHWm1ZXll5MpwGpjK0BBxQTkyu2yDx8QJBogxK1Ov0uP89F0imAAC8IAZCSEjfiIISpcgFMBlEjvlwMchzJarYtdFhBRhdEwffqyhBZQhbWB7U6XW6wywgA)

# Modify and extend a type

What if we wanted to provide some input props that are not overrides, but are variables that will be used to compute the new theme. In the next example, the `fontSize` and `htmlFontSize` arguments were only used to calculate the `fontSizeH1` in *rem* units:

```js
export interface Typography {
    fontSizeH1: string;
    fontWeightNormal: number;
    fontWeightBold: number;
}

const createTypography = (typography?: TypographInput): Typography => {
    const {
        // Font-size on the html element.
        // 16px is the default font-size used by browsers.
        htmlFontSize = 16,

        // Default fontSize
        fontSize = 14,

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

In the previous snippet, the input type includes fontSize and htmlFontSize only to create a helper function and are not part of the output type, yet the other props are part of the output. To create the new Input type we can use the [intersection types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types):

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

Typescript is a powerful tool, and it should be used to its full potential. I have used flow and react prop-types, and I know I have resorted a lot of times to the use of `any` or generic `.object` but if you're going to cheat on types, then why bother to set them up at all?

I hope to have shed some light on the powerful applications that  Mapped Types provide and that this might be a solution to a situation you face in the future.

*If you find any error, be it on my poor english or any technical detail, please don't be shy and tweet me about it. I'll try to continuously improve this blog post* :simple_smile: