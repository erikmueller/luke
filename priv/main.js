module.exports = ({ location }) => {
  const { createElement: h } = require('react/cjs/react.production.min')
  const { StaticRouter, Route } = require('react-router')

  const Home = () => h('h1', null, '127.0.0.1, sweet 127.0.0.1')
  const A = () => h('h2', null, 'This is A')
  const B = () => h('h2', null, 'This is B')

  const context = {}

  return h(
    StaticRouter,
    { location, context },
    h('div', null, [
      h(Route, { path: '/', component: Home }, null),
      h('hr'),
      h(Route, { path: '/a', component: A }, null),
      h(Route, { path: '/b', component: B }, null),
    ])
  )
}
