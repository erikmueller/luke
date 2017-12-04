const { hydrate } = require('react-dom')
const { BrowserRouter } = require('react-router-dom')
const { createElement: h } = require('react')
const App = require('./App.js')

hydrate(h(BrowserRouter, null, App({})), document.getElementById('app'))
