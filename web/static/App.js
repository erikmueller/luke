const { createElement: h } = require('react')
const { Route, Switch } = require('react-router')

const Home = require('./views/Home.js')
const A = require('./views/A.js')
const B = require('./views/B.js')
const NotFound = require('./views/NotFound.js')

const App = ({ context = {} }) => {
  context.status = 200

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
