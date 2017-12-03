
smooth-scroll-to
================

[![npm](https://img.shields.io/npm/v/@ultraq/smooth-scroll-to.svg?maxAge=3600)](https://www.npmjs.com/package/@ultraq/smooth-scroll-to)
[![License](https://img.shields.io/github/license/ultraq/smooth-scroll-to.svg?maxAge=2592000)](https://github.com/ultraq/smooth-scroll-to/blob/master/LICENSE.txt)

Smooth-scroll to a page element.

Ideally, one would use only CSS and apply `scroll-behaviour: smooth;` to the
area that is being scrolled, rendering this library redundant.  As of writing
however, Chrome's implementation doesn't scroll in a fixed amount of time,
instead accelerating to a top speed, maintaining that speed, then deccelerating
as the target approaches.  This is less than ideal on long documents where the
scrolling can take **extremely** long :(  Hence, this JS solution.


Installation
------------

If importing into your own project with NPM:

```
npm install @ultraq/smooth-scroll-to --save
```

Or using as a standalone library:

```html
<script src="https://unpkg.com/@ultraq/smooth-scroll-to/dist/smooth-scroll-to.min.js"></script>
```


Usage
-----

This project exports a single function, `smoothScrollTo`.  If installed via NPM,
you can use this function by `require`ing/`import`ing it into your code.  If
using the standalone browser bundle either through the unpkg CDN or linking to
the `dist/smoothScrollTo.min.js` file, then this function is available globally.

```javascript
import smoothScrollTo from 'smooth-scroll-to';

smoothScrollTo('body', '#error-banner');
```

### smoothScrollTo(containerSelector, targetSelector)

 - **containerSelector**: a CSS selector for picking out the scrolling container
   that has the target element to scroll into view
 - **targetSelector**: a CSS selector for picking out the element to scroll to.
