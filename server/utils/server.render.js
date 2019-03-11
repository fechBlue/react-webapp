const ejs = require('ejs')
const serialize = require('serialize-javascript')
const asyncBootstrap = require('react-async-bootstrapper')
const ReactSSR = require('react-dom/server')
const Helmet = require('react-helmet').default
const SheetsRegistry = require('jss').SheetsRegistry
const createMuiTheme = require('@material-ui/core/styles').createMuiTheme
const createGenerateClassName = require('@material-ui/core/styles').createGenerateClassName
const colors = require('@material-ui/core/colors')

const getStoreState = (stores) => {
  return Object.keys(stores).reduce((result, storeName) => {
    result[storeName] = stores[storeName]
    return result
  }, {})
}

module.exports = function (bundle, template, req, res) {
  return new Promise((resolve, reject) => {

    const sheetsRegistry = new SheetsRegistry()
    const sheetsManager = new Map()
    const theme = createMuiTheme({
      palette: {
        primary: colors.blue,
        secondary: colors.purple,
        type: 'light'
      },
      typography: {
        useNextVariants: true
      }
    })

    const generateClassName = createGenerateClassName()
    const serverBundle = bundle.default
    const createStoreMap = bundle.createStoreMap
    const routerContext = {}
    const stores = createStoreMap()
    const ReactApp = serverBundle(stores, routerContext, sheetsRegistry, generateClassName, theme, sheetsManager, req.url)
    asyncBootstrap(ReactApp)
      .then(() => {
        const states = getStoreState(stores)
        if (routerContext.url) {
          res.status(302).setHeader('Location', routerContext.url)
          res.end()
          return
        }
        const materialStyle = sheetsRegistry.toString()
        const helmet = Helmet.rewind()
        const content = ReactSSR.renderToString(ReactApp)
        const html = ejs.render(template, {
          appString: content,
          materialStyle: materialStyle,
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
