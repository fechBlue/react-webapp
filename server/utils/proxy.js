const axios = require('axios')

const baseUrl = 'https://cnodejs.org/api/v1'

module.exports = function (req, res, next) {
  const path = req.path
  const method = req.method
  const user = req.session.user || {}
  const needAccessToken = req.query.needAccessToken

  if (needAccessToken && user.accessToken) {
    res.status(401).send({
      success: false,
      msg: 'need login'
    })
  }

  const query = Object.assign({}, req.query)

  if (query.needAccessToken) delete query.needAccessToken

  axios({
    url: `${baseUrl}${path}`,
    method: method,
    params: query,
    data: Object.assign({}, req.body, {
      accesstoken: user.accessToken
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencode'
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
        res.status(500).send(err.response)
      } else {
        res.status(500).send({
          success: false,
          msg: '未知错误'
        })
      }
    })
}
