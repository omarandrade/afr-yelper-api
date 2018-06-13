const express = require('express');
const router = express.Router();
const yelpService = require('../services/yelp.service');
const faker = require('faker');

router.get('/', async (req, res, next) => {
    const { client, category, location, grade, price } = req.query;
    const requestUri = `/businesses/search/term=${category}&location=${location}`
    //get yelp data 
    const result = await yelpService.yelpGetPromise(requestUri);
    const data = await yelperizeData(result);
    return res.json(data);
}), 

async function yelperizeData(yelpResult) {
    const yelpDataPromises = yelpResults.businesses
                        .map(business => {
                            const yelpData = {
                                yelpId = business.id,
                                is_closed: business.is_closed,
                                phone: business.phone,
                                rating: business.rating,
                                image_url: business.image_url,
                                location: `${business.city}, ${business.state}`,
                                distance: business.distance
                            }
                        })
                        .map(async culledYelpBusinesData => {
                            const requestUri = `/businesses/${culledYelpBusinesData.yelpId}`
                            const business = await yelpService.yelpGetPromise(requestUri)
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
}

module.exports = router;
