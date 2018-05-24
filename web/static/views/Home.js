const { createElement: h, Fragment } = require('react')
const { Link } = require('react-router-dom')

const content = new Array(100)
  .fill()
  .map((_item, key) =>
    h(
      'ul',
      { key },
      h('li', null, h(Link, { to: '/a' }, 'to A')),
      h('li', null, h(Link, { to: '/b' }, 'to B')),
      h('li', null, h(Link, { to: '/c' }, 'Somewhere else'))
    )
  )

const Home = () => h(Fragment, null, h('h1', null, '::1, sweet ::1'), content)

module.exports = Home
