const ejs = require('ejs')
const serialize = require('serialize-javascript')
const asyncBootstrap = require('react-async-bootstrapper')
const ReactSSR = require('react-dom/server')
const Helmet = require('react-helmet').default

const getStoreState = (stores) => {
  return Object.keys(stores).reduce((result, storeName) => {
    result[storeName] = stores[storeName]
    return result
  }, {})
}

module.exports = function (bundle, template, req, res) {
  return new Promise((resolve, reject) => {
    const serverBundle = bundle.default
    const createStoreMap = bundle.createStoreMap
    const routerContext = {}
    const stores = createStoreMap()
    const ReactApp = serverBundle(stores, routerContext, req.url)
    asyncBootstrap(ReactApp)
      .then(() => {
        const states = getStoreState(stores)
        if (routerContext.url) {
          res.status(302).setHeader('Location', routerContext.url)
          res.end()
          return
        }
        const helmet = Helmet.rewind()
        const content = ReactSSR.renderToString(ReactApp)
        const html = ejs.render(template, {
          appString: content,
          initialState: serialize(states),
          title: helmet.title.toString(),
          meta: helmet.meta.toString(),
          style: helmet.style.toString(),
          link: helmet.link.toString()
        })
        res.send(html)
        resolve()
      })
      .catch(reject)
  })
}
