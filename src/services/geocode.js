const axios = require('axios')

const getGeocode = async (dataGeocode) => {

  const { address, key } = dataGeocode
  const googleBaseGeocodeUrl = process.env.GOOGLE_BASE_GEOCODE_URL
  const url = `${googleBaseGeocodeUrl}/json?address=${address}&key=${key}`

  try {
    const response = await axios.get(url)
    const { results } = response.data

    if (results.length === 0) {
      throw new Error('No location found.')
    }

    const dataResponse = mapperResponseGeocode(results[0])
    return dataResponse

  } catch (error) {
    console.error('Geocoding request failed:', error.message)
    return { error: 'Geocoding request failed.' }
  }
}


const mapperResponseGeocode = (resultGeocode) => {
  const { formatted_address, geometry } = resultGeocode
  const { lat, lng } = geometry.location

  return {
    formatted_address: formatted_address,
    latitude: lat,
    longitude: lng
  }
}

module.exports = { getGeocode }


