theatre.js
====

Demo: http://codepen.io/markhuot/full/ueCpc/

A CSS-only method to hide / show elements on click. The onus is on the developer to set initial states and transition states. This allows you to conditionally show elements on small screens and toggle them on larger screens. To get up and running you simply need to tag your trigger and your target with data attributes. E.g.,

```html
<a href="#" data-theatre-trigger="nav">Navigation</a>
<nav data-theatre-target="nav">...</nav>
```

The above will cause clicks on the anchor tag to toggle a `data-theatre-active` attribute on the navigation element. 

Trigger and target keys are somewhat unique, but not required to be unique. That means you can target multiple elements the same way you would a single element,

```html
<a href="#" data-theatre-trigger="nav" data-theatre-active-class="active">Navigation</a>
<nav data-theatre-target="nav" data-theatre-active-class="shown">...</nav>
<p>Page intro...</p>
<nav class="utility" data-theatre-target="nav" data-theatre-active-class="utility--shown">...</nav>
```

You can apply `trigger`-s to anchor tags, select boxes, and option elements. When applied to a select element the field must evaluate to true to show the target. E.g.,

```html
<select data-theatre-trigger="city">
  <option></option>
  <option>Philadelphia</option>
  <option>New York</option>
  <option>Atlanta</option>
</select>
<p data-theatre-target="city">Thank you for choosing a city.</p>
```

For more control over a select box you can apply the trigger to the individual option elements. In this case, all option/triggers in the select box that are not selected will have their targets hidden. The selected option will have its target shown.

```html
<select>
  <option></option>
  <option data-theatre-trigger="city-philadelphia">Philadelphia</option>
  <option data-theatre-trigger="city-new-york">New York</option>
  <option data-theatre-trigger="city-atlanta">Atlanta</option>
</select>
<p data-theatre-target="city-philadelphia">Philly was chosen.</p>
<p data-theatre-target="city-new-york">NYC was chosen.</p>
<p data-theatre-target="city-atlanta">Atlanta was chosen.</p>
```

Targets can request multiple triggers, in which case the target will not be shown until all the triggers are active.

```html
<a href="#" data-theatre-trigger="tag1" class="tag">Tag 1</a>
<a href="#" data-theatre-trigger="tag2" class="tag">Tag 2</a>
<p data-theatre-target="tag1 tag2">All tags selected.</p>
```
