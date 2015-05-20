var Checkbox = require('./index.js')
var createElement = require('base-element')
var document = require('global/document')

var style = document.createElement('style')
document.head.appendChild(style)

var checkbox = new Checkbox()
checkbox.render('check me')
checkbox.on('load', function () {
  style.innerHTML += this.css()
})

var custom = new Checkbox()
custom.className = 'custom'
custom.render('custom')

var checkAll = new Checkbox()
checkAll.render('toggle all')
checkAll.on('toggle', function (checked) {
  checkbox.toggle()
  custom.toggle()
})
