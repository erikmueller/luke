const { createElement: h } = require('react/cjs/react.production.min')
const { Link } = require('react-router-dom')

const B = () => h('div', null, [h('h2', null, 'This is B'), h(Link, { to: '/a' }, 'to A')])

module.exports = B
