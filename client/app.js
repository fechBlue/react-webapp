import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { AppContainer } from 'react-hot-loader' //eslint-disable-line
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { blue, purple } from '@material-ui/core/colors'
import Routers from './config/router'
import Appstate from './store/app.state'

const root = document.getElementById('root')

const initialState = window.__INITIAL__STATE__ || {} //eslint-disable-line

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: purple,
    type: 'light',
  },
  typography: {
    useNextVariants: true,
  },
})

const createApp = (App) => {
  class Main extends React.Component {
    // Remove the server-side injected CSS.
    componentDidMount() {
      const jssStyles = document.getElementById('jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      return <App />
    }
  }
  return Main
}

const render = (Component) => {
  ReactDOM.hydrate(
    <AppContainer>
      <Provider appState={new Appstate(initialState.appState)}>
        <BrowserRouter>
          <MuiThemeProvider theme={theme}>
            <Component />
          </MuiThemeProvider>
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    root,
  )
};
render(createApp(Routers))

if (module.hot) {
  module.hot.accept('./config/router.js', () => {
    const NextApp = require('./config/router.js').default; //eslint-disable-line
    render(createApp(NextApp));
  })
}
