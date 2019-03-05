import React, { Component } from 'react'
import axios from 'axios'

export default class Test extends Component {
  topics = () => {
    axios.get('/api/topics')
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  login = () => {
    axios.post('/api/user/login', {
      accessToken: 'f7e9e4d4-738c-4ceb-a73d-b88d66c130d1',
    })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  markAll = () => {
    axios.get('/api/message/count?needAccessToken=true')
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  render() {
    return (
      <div>
        <button onClick={this.topics} type="button">topics</button>
        <button onClick={this.login} type="button">login</button>
        <button onClick={this.markAll} type="button">markAll</button>
      </div>
    )
  }
}
