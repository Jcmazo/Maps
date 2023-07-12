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
      return geocodeData
    } else {
      throw new Error('No location found.')
    }
  } catch (error) {
    console.error('Geocoding request failed:', error.message)
    return { error: 'Geocoding request failed.' }
  }
}

module.exports = { getGeocode }


