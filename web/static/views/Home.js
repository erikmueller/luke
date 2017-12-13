const React = require('react')
const { Link } = require('react-router-dom')

const Home = () => (
  <div>
    <h1>::1, sweet ::1</h1>
    <ul>
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
  </div>
)

module.exports = Home
