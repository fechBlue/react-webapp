import React, { Component } from 'react'
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'
import TopicList from '../views/topic-list/index'
import TopicDetail from '../views/topic-detail/index'
import App from '../views/App'

export default class Routers extends Component {
  componentDidMount() {
    // do something here
  }

  render() {
    return (
      <App>
        <Switch>
          <Route path="/" render={() => <Redirect to="/list" />} exact />
          <Route path="/list" component={TopicList} />
          <Route path="/detail" component={TopicDetail} />
        </Switch>
      </App>
    )
  }
}
