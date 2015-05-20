# checkbox-element

A basic checkbox element built on a virtual DOM.

## Example

```js
var Checkbox = require('checkbox-element')
var checkbox = new Checkbox()

checkbox.render('check me!')
```

Will render the following:

```html
<span class="checkbox unchecked" role="checkbox">
  <button></button>
  <label>check me!</label>
</span>
```

## API

### `var checkbox = new Modal(appendTo)`
Creates a new checkbox element. `appendTo` is the parent DOM node to append to.
Defaults to `document.body`.

#### `checkbox.toggle()`
Will check or unchecked the checkbox.

#### `checkbox.checked`
`Boolean` whether the checkbox is checked.

#### Events

Listen for events with `checkbox.on(name, function (param) {})`.

* `load`: Called when element has loaded.
* `unload`: Called when element has unloaded.
* `toggle`: Called when checkbox is checked or unchecked.

# license
(c) 2015 Kyle Robinson Young. MIT License
