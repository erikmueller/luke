const { createElement: h } = require('react/cjs/react.production.min')
const { Link } = require('react-router-dom')

const Home = () =>
  h('div', null, [
    h('h1', null, '::1, sweet ::1'),
    h('ul', null, [h('li', null, h(Link, { to: '/a' }, 'to A')), h('li', null, h(Link, { to: '/b' }, 'to B'))]),
  ])

module.exports = Home
