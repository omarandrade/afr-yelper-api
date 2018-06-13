const express = require('express');
const router = express.Router();
const yelpService = require('../services/yelp.service');
const faker = require('faker');

function mapYelpBusiness(business) {
    return {
        yelpId: business.id,
        name: business.name,
        is_closed: business.is_closed,
        phone: business.display_phone,
        rating: business.rating,
        image_url: business.image_url,
        location: `${business.location.city}, ${business.location.state}`,
        display_address: business.location.display_address.join(', '),
        latitude: business.coordinates.latitude,
        longitude: business.coordinates.longitude,
        distance: business.distance,
        cost: business.price.length,
        display_cost: business.price
    };
}

async function yelperizeData(yelpResult) {
    const yelpData = yelpResult.businesses.map(mapYelpBusiness);

    const finalData = yelpData.map(business => {
        return {
            ...business,
            nmReview: Math.floor(Math.random() * Math.floor(5))
        }
    })
    return finalData;
}

async function yelperizeSingleBusiness(yelpResult) {
    const yelpData = mapYelpBusiness(yelpResult);
    yelpData.nmReview = Math.floor(Math.random() * Math.floor(5));
    yelpData.hours = yelpResult.hours;

    return yelpData;
}

//Ex. localhost:8080/events?category=coffee&location=53210
router.get('/', async (req, res, next) => {
    const { client, category, location, grade, price } = req.query;
    const requestUri = `/businesses/search?term=${category}&location=${location}`
    //get yelp data
    try {
        const result = await yelpService.yelpGetPromise(requestUri);
        const data = await yelperizeData(JSON.parse(result));
        return res.json(data);
    } catch(error) {
        console.log(error)
    }
}),

router.get('/:id', async (req, res, next) => {
    const requestUri = `/businesses/${req.params.id}`
    //get yelp data
    try {
        const result = await yelpService.yelpGetPromise(requestUri);
        const data = await yelperizeSingleBusiness(JSON.parse(result));
        return res.json(data);
    } catch(error) {
        console.log(error)
    }
}),


module.exports = router;
