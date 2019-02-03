---
title: Quicklink - a small JS library to improve your user experience on websites
date: '2019-02-02T20:16:58.052Z'
published: true
tags: ['JS Nuggets']
---

Most of the modern web frameworks handle loading subsequent pages faster by different techniques like code splitting, front end caching, service workers etc.

Some of the other common techniques to boost site speed agnostic to framework are,

- pre-fetching assets for next pages during idle time
- pre-load next urls and cache it

Several companies like `medium`, `wikipedia`, `quora`, `dev.to` loads their pages faster using similar techniques.

This technique do have benefits for the end users, it also have cons if there is no smartness in predicting what user visit next and loads every links on the page.

## Introducing Quicklink

A small javascript library (< 1Kb) which makes the subsequent page load faster and do some smart loading techniques too.

### How it works

- It loads all the links on the page when the link is in viewport (using `Intersection Observer`)
- It won't load those links more than once using its smartness
- It won't load these techniques if user is on slow connection (using `navigator.connection.effectiveType`) and if user opt in for saving data in mobile devices (using `navigator.connection.saveData`)
- It won't interrupt the site content, it start its operation only on Idle-time (using `requestIdleCallback`)


Check the docs here for more info on the library. It was open sourced by Google chrome labs

- https://github.com/GoogleChromeLabs/quicklink

### How to use it on your site

```javascript
// ES6 way
import quicklink from "quicklink/dist/quicklink.mjs";
quicklink();
```

```html
<!-- Include as script -->
<script src="dist/quicklink.umd.js"></script>
<script>
    /*
        you can load the script DOMContentLoaded, or Window load callbacks,
        it won't cause any issues, since quicklink start executing only in browser idle time.
    */
    quicklink();
</script>
```

quicklink accepts lot of options, You can find it in documentation in the [github link](https://github.com/GoogleChromeLabs/quicklink).

Ignoring some URL patterns are the mostly used options, most other options have optimized default but URL's to be ignored are specific to the site.

Example for ignoring all URL with extensions `.pdf`, URL with sub-string `/api` and also links which explicitly asked to `noprefetch`

```javascript
quicklink({
  ignores: [
    // ignore all /api/**/* urls
    /\/api\/?/,
    // ignore .pdf files
    uri => uri.includes('.pdf'),
    // ignore all links, scripts which has explicit noprefetch
    (uri, elem) => elem.hasAttribute('noprefetch')
  ]
});
```

Hope it improves the performance of your website and improves the user experience. Try it out, its one exciting library to test web performance for users.
