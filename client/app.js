import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { AppContainer } from 'react-hot-loader' //eslint-disable-line
import Routers from './config/router'
import appState from './store/app.state'

const root = document.getElementById('root')

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider appState={appState}>
        <Component />
      </Provider>
    </AppContainer>,
    root,
  )
};
render(Routers)

if (module.hot) {
  module.hot.accept('./config/router.js', () => {
    const NextApp = require('./config/router.js').default; //eslint-disable-line
    render(NextApp);
  })
}
