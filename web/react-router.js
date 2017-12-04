const { createElement: h } = require('react/cjs/react.production.min')
const { StaticRouter } = require('react-router')
const App = require('./static/App.js')

const context = {}

const Router = ({ location }) => h(StaticRouter, { location, context }, h(App, { context }))

Router.context = context
module.exports = Router
