const initGeocode = require('./geocode')

function initRoute(app) {
    initGeocode(app)
}
module.exports =  initRoute 