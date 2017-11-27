const { createElement: h } = require('react/cjs/react.production.min')

module.exports = ({message, method, path, query}) => {
  return (
    h('div', null,
      h('span', null, [
        `This is react ${message}`,
        h('ul', null, [
          h('li', null, `method: ${method}`),
          h('li', null, `path: ${path}`),
          h('li', null, `query string: ${query}`),
        ])
      ])
    )
  )
}
