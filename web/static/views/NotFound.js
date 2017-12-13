const React = require('react')

const NotFound = ({ staticContext = {} }) => {
  staticContext.status = 404

  return <h3>Sorry, we took a wrong turn.</h3>
}

module.exports = NotFound
