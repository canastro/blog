---
path: "/typescript-extend-modify-type"
title: Typescript - Extending and modifying existing types with Mapped Types
subtitle: A Typescript beginner's hard-learned lessons
tags: ["react", "typescript", "ts-beginners-series"]
draft: true
date: "2019-01-07T22:00:00.000Z"
---

I'm no Typescript expert (well, I'm not a expert at anything really :sweat_smile:).
I'm a TS newbie that wants to catalog his most interesting and useful findings. 

# Modify a type
Having the following scenario: you're creating a lib that hopefuly alot of other devs will use to build their apps. You might have a static theme configuration object, but sooner or later your users will ask you to provide a way to override some parts of that theme.

Picking up on the react ui-kit we created on the previous post we have:

```js
export type Palette = {
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

export const createTheme = (overrides): Palette => 
  Object.assign({}, defaultPalette, overrides);
```

It would make no sense to make it mandatory for the consumers of your lib to have to provide a complete theme object, therefore you cannot reuse the **Palette** type. Your **PaletteInput** will have to have all props marked as optional and it should be readonly. 

We want to create the PaletteInput type without having to duplicate the Palette input type, because that would be harder to maintain. How can we achieve that? Well, the answer is [Mapped Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html). With mapped types you can iterate all the keys in a given type add some modifier to them and create a new type:

```js
export type PaletteInput = {
  +readonly [K in keyof Palette]+?: Palette[K];
}
```

However typescript, already implements some types which you can use to achieve the same result:

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

And using you can use it so:

```js
export type PaletteInput = ReadOnly<Partial<Palette>>;
```

Its up to you to decide if you prefer to use **keyof** to build your own Input type or manually define your **Input Type** by adding the readonly and optional modifiers.

You might have noticed that in my type definitions I added a plus sign before the **readonly** and **optional**, thats just to make it clear that we want to add those modifiers to the given key. Its also possible to use a minus sign in order to remove a modifier from the base type.

# Modify and extend a type

What if we want to provide some inputs that are not exactly overrides, but are variables that will be used to compute the new theme, something like:

```js
export type Typography {
    fontSizeH1: string;
    fontWeightNormal: number;
}

const createTypography = (typography: ??): Typography => {
    const {
        fontSize = 14,
        htmlFontSize = 16,
        fontWeightNormal = 400,
        fontWeightBold = 700
    } = typography;

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
export type TypographyInput = Partial<Typography> & {
    fontSize?: number;
    htmlFontSize?: number;
}
```

# Final remarks

As I was starting with Typescript these were some of the scenarios that I might have placed a **any** type and marked as "to be reviewed 'later'" Yeah, right!

I hope to have shed some light on the powerful tool that Mapped Types are.

*If you find any error, be it on my poor english or any technical detail, please don't be shy. I'll try to continuously improve this blog post :simple_smile:*