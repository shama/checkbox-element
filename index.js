var BaseElement = require('base-element')
var inherits = require('inherits')
var attachCSS = require('attach-css')
var objectAssign = require('object-assign')
var propBind = require('prop-bind')

function CheckboxElement (el) {
  if (!(this instanceof CheckboxElement)) return new CheckboxElement(el)
  BaseElement.call(this, el)
  propBind(this, 'className', ':checkbox checked:checked:unchecked')
  this.tagName = 'span'
  this.checked = false
  this.label = null
  this.onclick = function CheckboxElement_onclick (e) {
    this.toggle()
  }.bind(this)
  this.on('load', function CheckboxElement_onload (node) {
    node.setAttribute('role', 'checkbox')
  })
}
inherits(CheckboxElement, BaseElement)
module.exports = CheckboxElement

CheckboxElement.prototype.render = function CheckboxElement_render (label) {
  this.label = label
  var el = this.html(this.tagName, objectAssign({}, this), [
    this.html('button', ''),
    (label ? this.html('label', label) : '')
  ])
  return this.afterRender(el)
}

CheckboxElement.prototype.toggle = function CheckboxElement_toggle () {
  this.checked = !this.checked
  this.render(this.label)
  this.send('toggle', this.checked)
}

CheckboxElement.prototype.css = function CheckboxElement_css () {
  var className = this.className.split(' ')[0]
  return attachCSS([
    '.' + className + ' * { cursor: pointer; }',
    '.' + className + ' button:before { content: "\\0000a0"; }',
    '.' + className + '.checked button:before { content: "✔︎"; }',
  ].join('\n'), this.vtree)
}
