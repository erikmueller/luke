const context = { status: 200 }

const Router = function({ location }) {
  const { createElement: h } = require('react/cjs/react.production.min')
  const { StaticRouter, Route, Switch } = require('react-router')

  const A = () => h('h2', null, 'This is A')
  const B = () => h('h2', null, 'This is B')
  const NotFound = () => {
    context.status = 404
    return h('h2', null, 'Soory, we took a wrong turn.')
  }

  return h(
    StaticRouter,
    { location, context },
    h(Switch, null, [
      h(Route, { path: '/a', component: A }, null),
      h(Route, { path: '/b', component: B }, null),
      h(Route, { render: NotFound }),
    ])
  )
}

Router.context = context
module.exports = Router
