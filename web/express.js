const path = require('path')
const express = require('express')
const serveStatic = require('serve-static')
const shrinkray = require('shrink-ray')
const ReactDOM = require('react-dom/server')
const morgan = require('morgan')

const reactRouter = require('./react-router')

const app = express()
const apiRouter = express.Router().get('/', (req, res, next) => res.status(501).send('Not implemented'))

const template = html =>
  `
<html>
<head>
  <title>Foo</title>
  <style>
    a, body {color: #ddd;}
  </style>
</head>
<body style="background: #1c1d21;">
  <div id="app">${html}</div>
   <script src="static/main.bundle.js"></script>
</body>
</html>
`

app.use(morgan(':method :url :status in :response-time ms'))
app.use(shrinkray())
app.use(serveStatic(path.join(__dirname, '..', 'priv')))

app.use('/api', apiRouter)
app.use('/', (req, res, next) => {
  const renderResponse = reactRouter({ location: req.url })
  const { status } = reactRouter.context

  res.status(status || 200).send(template(ReactDOM.renderToString(renderResponse)))
})

app.listen(4000)
