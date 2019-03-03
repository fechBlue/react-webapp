import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class App extends Component {
  componentDidMount() {
    // do something here
  }

  render() {
    const { children } = this.props
    return (
      <div>
        { children }
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
}
