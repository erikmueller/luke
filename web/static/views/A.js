const React = require('react')
const { Link } = require('react-router-dom')

const A = () => (
  <div>
    <h2>This is A</h2>
    <Link to="/b">to B</Link>
  </div>
)

module.exports = A
