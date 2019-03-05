const axios = require('axios')
const querystring = require('query-string')

const baseUrl = 'https://cnodejs.org/api/v1'

module.exports = function (req, res, next) {
  const path = req.path
  const method = req.method
  const user = req.session.user || {}
  const needAccessToken = req.query.needAccessToken

  if (needAccessToken && !user.accessToken) {
    res.status(401).send({
      success: false,
      msg: 'need login'
    })
  }

  axios({
    url: `${baseUrl}${path}`,
    method: method,
    params: req.query,
    data: querystring.stringify(Object.assign({}, req.body, {
      accesstoken: user.accessToken
    })),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
    .then((response) => {
      if (response.status === 200) {
        res.send(response.data)
      } else {
        res.status(response.status).send(response.data)
      }
    })
    .catch((err) => {
      if (err.response) {
        res.status(500).send(err.response.data)
      } else {
        res.status(500).send({
          success: false,
          msg: '未知错误'
        })
      }
    })
}
