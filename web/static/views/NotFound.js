const { createElement: h } = require('react')

const NotFound = ({ staticContext }) => {
  staticContext.status = 404
  return h('h3', null, 'Sorry, we took a wrong turn.')
}

module.exports = NotFound
