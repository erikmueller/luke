const React = require('react')
const { hydrate } = require('react-dom')
const { BrowserRouter } = require('react-router-dom')
const App = require('./App')

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
)
