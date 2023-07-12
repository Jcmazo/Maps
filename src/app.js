const express = require('express')
const initRoute = require('./route')

function initApp () {
  const app = express()
  initRoute(app)
  return app
}

module.exports =  initApp 
