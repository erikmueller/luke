const { createElement: h } = require('react/cjs/react.production.min')
const { StaticRouter, Route, Switch } = require('react-router')

const Home = require('./static/views/Home.js')
const A = require('./static/views/A.js')
const B = require('./static/views/B.js')
const NotFound = require('./static/views/NotFound.js')

const context = { status: 200 }

const Router = function({ location }) {
  return h(
    StaticRouter,
    { location, context },
    h(Switch, null, [
      h(Route, { exact: true, path: '/', component: Home }, null),
      h(Route, { path: '/a', component: A }, null),
      h(Route, { path: '/b', component: B }, null),
      h(Route, { render: () => NotFound({ context }) }),
    ])
  )
}

Router.context = context
module.exports = Router
