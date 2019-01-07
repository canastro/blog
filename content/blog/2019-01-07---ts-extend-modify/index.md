---
path: "/typescript-extend-modify-type"
title: Typescript - Extending and modifying existing types
subtitle: A Typescript beginner's hard-learned lessons
tags: ["react", "typescript", "ts-beginners-series"]
draft: true
date: "2019-01-07T22:00:00.000Z"
---

I am by no means a typescript expert, I am a TS newbie that wants to catalog his most interesting and useful findings. 

# Add modifiers to a type
Lets think in the following scenario: you're creating a lib that hopefuly alot of other devs will use to build their apps. You might have a static theme configuration object, but sooner or later your users will ask you to provide a way to override some parts of that theme.

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

It would make no sense to make it mandatory for the consumers of your lib to have to provide a complete theme object, therefore you cannot reuse the `Palette` type. Your `PaletteInput` will have to have all props marked as optional. 

We want to create the PaletteInput type without having to duplicate the Palette input type, because that would be harder to maintain. How can we achieve that? Well, the answer is [Mapped Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html). With mapped types you can iterate all the keys in a given type add some modifier to them and create a new type:

```js
export type PaletteInput = {
  [K in keyof Palette]+?: Palette[K];
}
```

You can make this more reusable by creating some types for some common operations:

```js
type Nullable<T> = { 
  [P in keyof T]: T[P] | null 
}

type Readonly<T> = {
  +readonly [P in keyof T]: T[P];
}

type Partial<T> = {
  [P in keyof T]+?: T[P];
}
```

And using it so:

```js
export type PaletteInput = Partial<Palette>;
```

TODO: explain how to target specific keys

# Extending a type

Lets now change our create theme, instead of receiving only the 