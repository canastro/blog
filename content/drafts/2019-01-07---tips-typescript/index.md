---
path: "/typescript-extend-modify-type"
title: Typescript - Create new types by extending and modifying existing types
subtitle: A Typescript beginner's hard-learned lessons
tags: ["react", "typescript", "ts-beginners-series"]
draft: true
date: "2019-01-07T22:00:00.000Z"
---

I am by no means a typescript expert, I am a TS newbie that wants to catalog his most interesting and useful foundings. I hope that with these tips I help you improve your typescript skills, and the need to repeat types or resort to the any type.

# Add modifiers to a type
Image you're creating a lib for alot of other users to consume. You might have a static configuration object, but as your lib adoption increases the amount of different use cases will increase, so you might want to give the possibility of overriding your configuration. 

Lets use our react ui-kit created on the previous post:

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

You want to give the user the possibility to partially override the default palette, but how do you create a type for that without having to replicate the Palette type just adding a question mark to all properties?

Well, the answer is [Mapped Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html). Mapped types is a pretty powerfull tool and can help you in some other scenarios besides this, in this case you would create a new type from the Palette just adding a modifier to add the optional character:

```js
export type PaletteInput = {
  [K in keyof Palette]+?: Palette[K];
}
```

You can make this more reusable by creating some types that can be reused to these tasks:

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

And using it so:

```js
export type PaletteInput = Partial<Palette>;
```

# Extending a type

Lets now change our create theme, instead of receiving only the 