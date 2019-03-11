import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TopBar from './layout/app.bar'

export default class App extends Component {
  componentDidMount() {
    // do something here
  }

  render() {
    const { children } = this.props
    return (
      <div>
        <TopBar />
        { children }
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
}
