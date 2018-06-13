const express = require('express');
const router = express.Router();
const yelpService = require('../services/yelp.service');
const faker = require('faker');

async function yelperizeData(yelpResult) {
    const yelpData = yelpResult.businesses
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
                        // .map(async culledYelpBusinesData => {
                        //     const requestUri = `/businesses/${culledYelpBusinesData.yelpId}`
                        //     const business = JSON.parse(await yelpService.yelpGetPromise(requestUri))
                        //     return {
                        //         ...culledYelpBusinesData,
                        //         hours: business.hours
                        //     }
                        // })

    
    //add nm review data
    const finalData = yelpData.map(business => {
        return {
            ...business,
            nmReview: Math.floor(Math.random() * Math.floor(5))
        }
    })
    return finalData;
}

async function yelperizeSingleBusiness(yelpResult) {
    
        const yelpData ={
            yelpId: yelpResult.id,
            name: yelpResult.name,
            is_closed: yelpResult.is_closed,
            phone: yelpResult.phone,
            rating: yelpResult.rating,
            image_url: yelpResult.image_url,
            location: `${yelpResult.location.city}, ${yelpResult.location.state}`,
            latitude: yelpResult.coordinates.latitude,
            longitude: yelpResult.coordinates.longitude,
            distance: yelpResult.distance,
            hours: yelpResult.hours,
            nmReview: Math.floor(Math.random() * Math.floor(5))
        }
            
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

router.get('/id/:id', async (req, res, next) => {
    const { client, category, location, grade, price } = req.query;
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
