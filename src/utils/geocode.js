const request = require('postman-request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}+".json?proximity=26.9124,75.7873&access_token=pk.eyJ1Ijoiam9obnNjaGVuZGVsaWVyIiwiYSI6ImNsYTVqcTNvazFieHEzd3Bjd2J3cXplc2wifQ.h9XDxiQNBPPL60DEMIqheA&limit=1`
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect to location services!", undefined)
        } else if (body.features.length === 0) {
            callback("Unable to find location. Try another search!", undefined)
        }
        else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].text
            })
        }
    })
}

module.exports = geocode