const { createElement: h } = require('react/cjs/react.production.min')

const NotFound = ({ context }) => {
  context.status = 404
  return h('h3', null, 'Sorry, we took a wrong turn.')
}

module.exports = NotFound
