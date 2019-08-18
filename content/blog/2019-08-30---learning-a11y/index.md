---
path: '/a11y-common-issues'
title: Learning Web Accessibility
subtitle: Mistakes I made and are easily solvable
tags: ['a11y']
draft: true
date: '2019-08-30T10:45:00.000Z'
---

At [dashdash](//www.dashdash.com) we try to have a monthly tech talk when my turn came up I had no idea what I should talk about. Someone on twitter once said that the best way to learn a topic is to commit yourself to give a talk about it... Then you'll have a great motivation to learn it. 

So I picked up a topic I knew very little about... **Accessibility** (Shame on me!). 

After reading some resources I compiled a list of some mistakes that I make and that I think might be useful to share with others.

## Headings (h1, h2, ...) as a way of styling instead of structure
Most of times I pick up the header element that best matched the size I wanted to display, but HTML heading tags are used to create a semantically correct structure of the page, screen readers use headers to traverse sections of a page. 

Each page should have a h1 and it should be the first thing to be focused (?) if you have a subsection, then it should be a h2. h3 should only appear as subsection of h2.

```html
<h1>Main page title</h1>
  <h2>Subtitle 1</h2>
  <h2>Subtitle 2</h2>
    <h3>Subtitle 2.1</h3>
    <h3>Subtitle 2.2</h3>
  <h2>Subtitle 3</h2>
```

## Messing up with zoom and user defined font sizes
* Fontsize in html tag should be 100%
* Hardcoding font-size on root
* Not using rems/ems

## Custom buttons built with divs
Sometimes (a lot of times) developers create buttons by creating a div element, styling it and add a click event handler and ship it. This will create a button that will be completly unusable for keyboard users and users with screen readers. A div is not focusable so a user cannot tab into it. You could add a tab index of zero and a role of button, but you would still be missing the functionality of handling space and enter keys to emulate clicking the button. You are better of just using a normal button and overriding the necessary styles which provide all these requirements of the box. Always prefer the HTML built-in elements instead of masking a div with a role.

## Remove outline style

## Offscreen content is visible to assitive technologies (and focus order)

## Images without alt text

## Single page application's route changes are not announced to screen readers

## Loading indicator without information for assistive technologies
* Not using aria-live

## Inputs without associated labels

## Low color contrast (or even too high contrast)

## Not using svgs with font's color
* does not allow users that require high contrast to override the color

## Not leveraging HTML5 landmark elements to improve navigation
* Having multiple main elements
* Not using nav
* https://developers.google.com/web/fundamentals/accessibility/how-to-review?utm_source=lighthouse&utm_medium=extension#take_advantage_of_headings_and_landmarks

## Not providing skip links
