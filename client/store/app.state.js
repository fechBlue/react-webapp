import {
  observable,
  action,
  computed,
} from 'mobx'

class AppState {
  @observable count = 0

  @observable name = 'blue'

  @action add() {
    this.count += 1
  }

  @action changeName(name) {
    this.name = name
  }

  @computed get msg() {
    return `${this.name} is calling to ${this.count}`
  }
}

const appState = new AppState()

export default appState
