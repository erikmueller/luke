const { createElement: h, Fragment } = require('react')
const { Route, Switch } = require('react-router')

const Home = require('./views/Home')
const A = require('./views/A')
const B = require('./views/B')
const NotFound = require('./views/NotFound')

const App = () => {
  return h(
    Switch,
    null,
    h(Route, { exact: true, path: '/', component: Home }),
    h(Route, { path: '/a', component: A }),
    h(Route, { path: '/b', component: B }),
    h(Route, { component: NotFound })
  )
}

module.exports = App
