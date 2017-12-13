const React = require('react')
const { Link } = require('react-router-dom')

const B = () => (
  <div>
    <h2>This is B</h2>
    <Link to="/a">to A</Link>
  </div>
)

module.exports = B
