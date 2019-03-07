const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const serverRender = require('./utils/server.render')
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
  const serverEntry = require('../dist/server.entry.js')
  const template = fs.readFileSync(path.join(__dirname, '../dist/server.ejs'), 'utf8')
  app.use('/public', express.static(path.join(__dirname, '../dist')))
  app.get('*', function (req, res, next) {
    serverRender(serverEntry, template, req, res).catch(next)
  })
} else {
  devServer(app)
}

app.use(function (error, req, res, next) {
  console.log(error)
  res.status(500).send(error)
})

app.listen(2333, function () {
  console.log('server is listening on port 2333')
})
