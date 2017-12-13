const React = require('react')
const { Route, Switch } = require('react-router')

const Home = require('./views/Home.js')
const A = require('./views/A.js')
const B = require('./views/B.js')
const NotFound = require('./views/NotFound.js')

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/a" component={A} />
      <Route path="/b" component={B} />
      <Route component={NotFound} />
    </Switch>
  )
}

module.exports = App
