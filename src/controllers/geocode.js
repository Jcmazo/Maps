const GEOCODE_URL = 'https://maps.googleapis.com/maps/api/geocode'
const geoService = require('../services/geocode.js')

const getGeocode = async (req, res) => {
  try {
    const { address } = req.query
    const params = {
      address: encodeURIComponent(address),
      key: process.env.API_KEY
    }
    const url = `${GEOCODE_URL}/json?address=${params.address}&key=${params.key}`
    const geocode = await geoService.getGeocode(url)
    return res.json(geocode)
  }
  catch (err) {
    console.log(err)
    return res.status(500).json(err)
  }
}

module.exports = { getGeocode }