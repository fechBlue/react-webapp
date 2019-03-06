import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { AppContainer } from 'react-hot-loader' //eslint-disable-line
import Routers from './config/router'
import Appstate from './store/app.state'

const root = document.getElementById('root')

const initialState = window.__INITIAL__STATE__ || {} //eslint-disable-line

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider appState={new Appstate(initialState.appState)}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
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
