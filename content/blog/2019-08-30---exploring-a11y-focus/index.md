---
path: '/learning-a11y-focus'
title: Learning accessibility I
subtitle: Focus Management
tags: ['a11y']
draft: true
date: '2019-08-30T10:45:00.000Z'
---


### Tab  index
* 0 - reachable by keyboard
* >0 - jumps to the top of the tab order --- DO NOT USE (anti patter)
* -1 - is not in the tab order, but you can focus into it programmatically


- Whenever we change page we should focus on the h1 (each page should have one, and only one h1) programmatically so that the user knows the page has changed.
  - its ok to disable outline on elements with tabindex -1


- :focus-visible
  - https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo
  - polyfill: https://github.com/ten1seven/what-input
  - 

- reduced mobility, users of screen readers, keyboard users
- native interactable elements are focusable
- other elemnts that we want to make focusable need our clues to the browser know they are focusable
- dom order
- inert --> WIP, but theres a polyfill
- tabindex
- outline

## Resources
* https://www.youtube.com/watch?v=ilj2P5-5CjI&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g&index=16&t=0s
* https://www.youtube.com/watch?v=srLRSQg6Jgg&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g&index=9
