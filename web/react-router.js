const React = require('react')
const { StaticRouter } = require('react-router')
const App = require('./static/App.js')

const context = {}

const Router = ({ location }) => (
  <StaticRouter location={location} context={context}>
    <App />
  </StaticRouter>
)

Router.context = context
module.exports = Router
