const express = require('express')
const ReactSSR = require('react-dom/server')
const fs = require('fs')
const path = require('path')
const devServer = require('./server.development');

const isDev = process.env.NODE_ENV === 'development'
console.log(isDev)
const app = express()
if (!isDev) {
  const serverEntry = require('../dist/server.entry.js').default
  const indexHtml = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8')
  app.use('/public', express.static(path.join(__dirname, '../dist')))
  
  app.get('*', function (req, res) {
    const appString = ReactSSR.renderToString(serverEntry);
    res.send(indexHtml.replace('<app></app>', appString));
  })
} else {
  devServer(app)
}

app.listen(2333, function () {
  console.log('server is listening on port 2333')
})