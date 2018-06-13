const debug = require('debug');
const config = require('config');
const request = require('request-promise-native')

const yelpConfig = config.get('yelp');

const yelpGetPromise = (uri) => {
    const requestUri = yelpConfig.endpoint + uri;
    const options = {
        url: requestUri,
        headers: {
            Authorization: `Bearer ${yelpConfig.API_KEY}`
        }
    }
    return request(options);
}

const yelpPostPromise = (uri, body) => {
    const requestUri = yelpConfig.endpoint + uri;
    const options = {
        url: requestUri,
        method: 'POST',
        headers: {
            Authorization: `Bearer ${yelpConfig.API_KEY}`
        }, 
        body
    };
    return request.post(options);;
}

module.exports = {
    yelpGetPromise,
    yelpPostPromise
}