const axios = require('axios')
const webpack = require('webpack')
const path = require('path')
const MemoryFs = require('memory-fs')
const proxy = require('http-proxy-middleware')
const serverWebpackConfig = require('../build/webpack.config.server')
const serverRender = require('./utils/server.render')

const getTemplate = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:8888/public/server.ejs')
      .then(res => {
        resolve(res.data)
      })
      .catch(() => reject)
  })
}

const NativeModule = require('module')
const vm = require('vm')

// `(function(exports, require, module, __finename, __dirname){ ...bundle code })`
const getModuleFromString = (bundle, filename) => {
  const m = { exports: {} }
  const wrapper = NativeModule.wrap(bundle)
  const script = new vm.Script(wrapper, {
    filename: filename,
    displayErrors: true
  })
  const result = script.runInThisContext()
  result.call(m.exports, m.exports, require, m)
  return m
}
let serverBundle
const mfs = new MemoryFs()
const serverCompiler = webpack(serverWebpackConfig)
serverCompiler.outputFileSystem = mfs

serverCompiler.watch({}, (err, stats) => {
  if (err) throw err
  stats = stats.toJson()
  stats.errors.forEach((err) => { console.error(err) })
  stats.warnings.forEach((warn) => { console.warn(warn) })

  const bundlePath = path.join(
    serverWebpackConfig.output.path,
    serverWebpackConfig.output.filename
  )
  const bundleFile = mfs.readFileSync(bundlePath, 'utf-8')
  serverBundle = getModuleFromString(bundleFile, 'server.entry.js').exports
})

module.exports = function (app) {
  app.use('/public', proxy({
    target: 'http://localhost:8888'
  }))

  app.get('*', function (req, res, next) {
    getTemplate()
      .then(template => {
        return serverRender(serverBundle, template, req, res)
      })
      .catch(next)
  })
}
