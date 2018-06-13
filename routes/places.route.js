const express = require('express');
const router = express.Router();
const yelpService = require('../services/yelp.service');
const faker = require('faker');

async function yelperizeData(yelpResult) {
    const yelpDataPromises = yelpResult.businesses
                        .map(business => {
                            const yelpData = {
                                yelpId: business.id,
                                name: business.name,
                                is_closed: business.is_closed,
                                phone: business.phone,
                                rating: business.rating,
                                image_url: business.image_url,
                                location: `${business.location.city}, ${business.location.state}`,
                                latitude: business.coordinates.latitude,
                                longitude: business.coordinates.longitude,
                                distance: business.distance
                            }
                            return yelpData;
                        })
                        .map(async culledYelpBusinesData => {
                            const requestUri = `/businesses/${culledYelpBusinesData.yelpId}`
                            const business = JSON.parse(await yelpService.yelpGetPromise(requestUri))
                            return {
                                ...culledYelpBusinesData,
                                hours: business.hours
                            }
                        })
    const yelpData = await Promise.all(yelpDataPromises);
    
    //add nm review data
    const finalData = yelpData.map(business => {
        return {
            ...business,
            nmReview: Math.floor(Math.random() * Math.floor(5))
        }
    })
    return finalData;
}

//Ex. localhost:8080/events?category=coffee&location=53210
router.get('/', async (req, res, next) => {
    const { client, category, location, grade, price } = req.query;
    const requestUri = `/businesses/search?term=${category}&location=${location}&limit=5`
    //get yelp data 
    try {
        const result = await yelpService.yelpGetPromise(requestUri);
        const data = await yelperizeData(JSON.parse(result));
        return res.json(data);
    } catch(error) {
        console.log(error)
    }
}), 



module.exports = router;
