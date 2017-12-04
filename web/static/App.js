const { createElement: h } = require('react/cjs/react.production.min')
const { Route, Switch } = require('react-router')
const { Link } = require('react-router-dom')

const Home = require('./views/Home.js')
const A = require('./views/A.js')
const B = require('./views/B.js')
const NotFound = require('./views/NotFound.js')

const App = ({ context = {} }) => {
  context.status = 200

  return h(Switch, null, [
    h(Route, { exact: true, path: '/', component: Home }, null),
    h(Route, { path: '/a', component: A }, null),
    h(Route, { path: '/b', component: B }, null),
    h(Route, { render: () => NotFound({ context }) }),
  ])
}
module.exports = App
