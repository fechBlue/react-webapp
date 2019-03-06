import {
  observable,
  action,
  computed,
} from 'mobx'

export default class AppState {
  constructor({ count, name } = { count: 0, name: 'blue' }) {
    this.count = count
    this.name = name
  }

  @observable count

  @observable name

  @action add() {
    this.count += 1
  }

  @action changeName(name) {
    this.name = name
  }

  @computed get msg() {
    return `${this.name} is calling to ${this.count}`
  }

  toJson = () => {
    return {
      count: this.count,
      name: this.name,
    }
  }
}
