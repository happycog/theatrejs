A CSS-only method to hide / show elements on click. The onus is on the developer to set initial states and transition states. This allows you to conditionally show elements on small screens and toggle them on larger screens. To get up and running you simply need to tag your trigger and your target with data attributes. E.g.,

```html
<a href="#" data-theatre-trigger="nav">Navigation</a>
<nav data-theatre-target="nav">...</nav>
```

The above will cause clicks on the anchor tag to toggle an `active` class on the navigation element.

Trigger and target keys are somewhat unique, but not required to be unique. That means you can target multiple elements the same way you would a single element,

```html
<a href="#" data-theatre-trigger="nav">Show navigation</a>
<nav data-theatre-target="nav">...</nav>
<p>Page intro...</p>
```

You can apply `trigger`-s to anchor tags.
