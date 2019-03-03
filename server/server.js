const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const ReactSSR = require('react-dom/server')
const ServerFavicon = require('serve-favicon')
const fs = require('fs')
const path = require('path')
const devServer = require('./server.development')

const isDev = process.env.NODE_ENV === 'development'
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
  maxAge: 10 * 60 * 1000,
  name: 'tid',
  resave: false,
  saveUninitialized: false,
  secret: 'react webApp SSR'
}))

app.use(ServerFavicon(path.join(__dirname, '../favicon.ico')))
app.use('/api/user', require('./utils/handle.login.js'))
app.use('/api', require('./utils/proxy.js'))

if (!isDev) {
  const serverEntry = require('../dist/server.entry.js').default
  const indexHtml = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8')
  app.use('/public', express.static(path.join(__dirname, '../dist')))
  app.get('*', function (req, res) {
    const appString = ReactSSR.renderToString(serverEntry)
    res.send(indexHtml.replace('<app></app>', appString))
  })
} else {
  devServer(app)
}

app.listen(2333, function () {
  console.log('server is listening on port 2333')
})
