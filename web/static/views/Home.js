const React = require('react')
const { Link } = require('react-router-dom')

const content = new Array(100).fill().map((_item, idx) => (
  <ul key={idx}>
    <li>
      <Link to="/a">to A</Link>
    </li>
    <li>
      <Link to="/b">to B</Link>
    </li>
    <li>
      <Link to="/c">somewhere else</Link>
    </li>
  </ul>
))

const Home = () => (
  <div>
    <h1>::1, sweet ::1</h1>
    {content}
  </div>
)

module.exports = Home
