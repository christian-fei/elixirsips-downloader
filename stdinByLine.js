var readline = require('readline')

module.exports = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})
