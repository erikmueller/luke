const { createElement: h } = require('react')
const { StaticRouter } = require('react-router')
const App = require('./static/App.js')

const context = {}

const Router = ({ location }) => {
  return h(StaticRouter, { location, context }, h(App))
}

Router.context = context
module.exports = Router
