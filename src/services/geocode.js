const axios = require('axios')

const getGeocode = async (url) => {
  try {
    const response = await axios.get(url)
    const { results } = response.data

    if (results.length > 0) {
      const result = results[0]
      const { formatted_address, geometry } = result
      const { lat, lng } = geometry.location

      const geocodeData = {
        formatted_address: formatted_address,
        latitude: lat,
        longitude: lng
      }

      res.json(geocodeData)
    } else {
      throw new Error('No se encontró ninguna ubicación.')
    }
  } catch (error) {
    console.error('Error en la solicitud de geocodificación:', error.message)
    res.status(500).json({ error: 'Error en la solicitud de geocodificación.' })
  }
}

module.exports = { getGeocode }


