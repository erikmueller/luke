const { createElement: h } = require('react')
const { hydrate } = require('react-dom')
const { BrowserRouter } = require('react-router-dom')
const App = require('./App')

hydrate(h(BrowserRouter, null, h(App)), document.getElementById('app'))
