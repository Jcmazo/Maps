const geocodeController = require('../controllers/geocode')

async function geocodeRoute(app) {
  app.get('/geocode',geocodeController.getGeocode)
}
module.exports = geocodeRoute 