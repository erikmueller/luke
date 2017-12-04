const { createElement: h } = require('react/cjs/react.production.min')
const { Link } = require('react-router-dom')

const A = () => h('div', null, [h('h2', null, 'This is A'), h(Link, { to: '/b' }, 'to B')])

module.exports = A
