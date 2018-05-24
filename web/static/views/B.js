const { createElement: h, Fragment } = require('react')
const { Link } = require('react-router-dom')

const B = () => h(Fragment, null, h('h2', null, 'This is B'), h(Link, { to: '/a' }, 'to A'))

module.exports = B
