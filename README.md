theatre.js
====

A CSS-only method to hide / show elements on click. The onus is on the developer to set initial states and transition states. This allows you to conditionally show elements on small screens and toggle them on larger screens. To get up and running you simply need to tag your trigger and your target with data attributes. E.g.,

```html
<a href="#" data-theatre-trigger="nav">Navigation</a>
<nav data-theatre-target="nav">...</nav>
```

The above will cause clicks on the anchor tag to toggle a `theatre-target-active` class on the navigation element. You can customize the active classes with the following data attributes,

```html
<a href="#" data-theatre-trigger="nav" data-theatre-active-class="active">Navigation</a>
<nav data-theatre-target="nav" data-theatre-active-class="shown">...</nav>
```

Multiple elements can be targeted and will toggle just as a single element would,

```html
<a href="#" data-theatre-trigger="nav" data-theatre-active-class="active">Navigation</a>
<nav data-theatre-target="nav" data-theatre-active-class="shown">...</nav>
<p>Page intro...</p>
<nav class="utility" data-theatre-target="nav" data-theatre-active-class="utility--shown">...</nav>
```
