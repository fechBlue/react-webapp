import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { Provider, useStaticRendering } from 'mobx-react'
import Routers from './config/router'
import { createStoreMap } from './store/store'

useStaticRendering(true)

export default (stores, routerContext, url) => {
  return (
    <Provider {...stores}>
      <StaticRouter context={routerContext} location={url}>
        <Routers />
      </StaticRouter>
    </Provider>
  )
}

export { createStoreMap }
