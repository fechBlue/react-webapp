import React, { Component } from 'react'
import {
  observer,
  inject,
} from 'mobx-react'
import { Helmet } from 'react-helmet'
import PropType from 'prop-types'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AppState from '../../store/app.state'
import Container from '../layout/container'

@inject('appState') @observer
class TopicList extends Component {
  state = {
    tabValue: 0,
  }

  componentDidMount() {
    // do something here
  }

  changeName = (event) => {
    this.props.appState.changeName(event.target.value)
  }

  changeTab = (event, value) => {
    this.setState({
      tabValue: value,
    })
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
    const { tabValue } = this.state
    return (
      <Container>
        <Helmet>
          <title>this is a topiclist page.</title>
          <meta name="topicList" description="666" />
        </Helmet>
        <Tabs
          value={tabValue}
          onChange={this.changeTab}
        >
          <Tab label="全部" />
          <Tab label="分享" />
          <Tab label="工作" />
          <Tab label="问答" />
          <Tab label="精品" />
          <Tab label="测试" />
        </Tabs>
      </Container>
    )
  }
}

TopicList.propTypes = {
  appState: PropType.instanceOf(AppState),
}

export default TopicList
