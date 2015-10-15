var request = require('request')

module.exports = function requestWithCookie(url, cookie, callback){
  return request({
    url:url,
    headers: {
      'Cookie': cookie,
    }
  }, callback)
}
