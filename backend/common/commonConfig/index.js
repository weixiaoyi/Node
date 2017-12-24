const pub = require('./pub.js')
const inner = require('./inner.js')
const config = { ...pub, ...inner}

module.exports = config