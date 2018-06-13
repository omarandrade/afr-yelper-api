const debug = require('debug');
const config = require('config');
const request = require('request-promise')

const yelpConfig = config.get('yelp');

const yelpGetPromise = (uri) => {
    return request.get(uri, {
        headers: {
            Authorization: `Bearer ${yelpConfig.API_KEY}`
        }
    });
}

const yelpPostPromise = (uri, body) => {
    return request.post(uri, {
        headers: {
            Authorization: `Bearer ${yelpConfig.API_KEY}`
        }
    });
}