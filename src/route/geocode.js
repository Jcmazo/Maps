const geocodeController = require('../controllers/geocode')

async function geocodeRoute(app) {
  app.get('/geocode',geocodeController.getGeocode)
  app.get('/',(res,req)=>{
    res.send('Hola mundo')
  })
}
module.exports = geocodeRoute 