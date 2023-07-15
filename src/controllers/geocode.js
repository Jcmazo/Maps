const geoService = require('../services/geocode.js')

const getGeocode = async (req, res) => {
  try {
    const { address } = req.query

    const dataGeocode = {
      address: encodeURIComponent(address),
      key: process.env.API_KEY
    }

    const geocode = await geoService.getGeocode(dataGeocode)
    return res.json(geocode)
  }
  catch (err) {
    console.log(err)
    return res.status(400).json(err)
  }
}

module.exports = { getGeocode }