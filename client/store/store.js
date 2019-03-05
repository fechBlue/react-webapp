import AppStateClass from './app.state'

export const AppState = AppStateClass

export default {
  AppState,
}

export function createStoreMap() {
  return {
    appState: new AppState(),
  }
}
