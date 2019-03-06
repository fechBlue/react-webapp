import React, { Component } from 'react'
import {
  observer,
  inject,
} from 'mobx-react'
import PropType from 'prop-types'
import AppState from '../../store/app.state'

@inject('appState') @observer
class TopicList extends Component {
  componentDidMount() {
    // do something here
  }

  changeName = (event) => {
    this.props.appState.changeName(event.target.value)
  }

  bootstrap = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.props.appState.count = 3
        resolve(true)
      })
    })
  }

  render() {
    const { appState } = this.props

    return (
      <div>
        <input type="text" onChange={this.changeName} />
        {appState.msg}
      </div>
    )
  }
}

TopicList.propTypes = {
  appState: PropType.instanceOf(AppState),
}

export default TopicList
