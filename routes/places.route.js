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
        cost: business.price ? business.price.length : 0,
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
        // const result = await yelpService.yelpGetPromise(requestUri);
        const result = JSON.stringify({
            "businesses": [
                {
                    "id": "ZOmtBrfpEFKLc_aGcsPrvg",
                    "alias": "colectivo-lakefront-milwaukee",
                    "name": "Colectivo Lakefront",
                    "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/_mIw74fyyjYKh8GK_nTeaA/o.jpg",
                    "is_closed": false,
                    "url": "https://www.yelp.com/biz/colectivo-lakefront-milwaukee?adjust_creative=tASMfiEPUlhU_ameGYFFYA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tASMfiEPUlhU_ameGYFFYA",
                    "review_count": 348,
                    "categories": [
                        {
                            "alias": "coffee",
                            "title": "Coffee & Tea"
                        }
                    ],
                    "rating": 4.5,
                    "coordinates": {
                        "latitude": 43.0535610152195,
                        "longitude": -87.8868182982865
                    },
                    "transactions": [],
                    "price": "$",
                    "location": {
                        "address1": "1701 N Lincoln Memorial Dr",
                        "address2": "",
                        "address3": "",
                        "city": "Milwaukee",
                        "zip_code": "53202",
                        "country": "US",
                        "state": "WI",
                        "display_address": [
                            "1701 N Lincoln Memorial Dr",
                            "Milwaukee, WI 53202"
                        ]
                    },
                    "phone": "+14142234551",
                    "display_phone": "(414) 223-4551",
                    "distance": 1287.3143123249502
                },
                {
                    "id": "LUzm7f-YF64UIRaDHWWXLQ",
                    "alias": "stone-creek-coffee-milwaukee-14",
                    "name": "Stone Creek Coffee",
                    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/QtJ_FXMzCuoOhxz4_sbvLQ/o.jpg",
                    "is_closed": false,
                    "url": "https://www.yelp.com/biz/stone-creek-coffee-milwaukee-14?adjust_creative=tASMfiEPUlhU_ameGYFFYA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tASMfiEPUlhU_ameGYFFYA",
                    "review_count": 36,
                    "categories": [
                        {
                            "alias": "coffee",
                            "title": "Coffee & Tea"
                        }
                    ],
                    "rating": 4.5,
                    "coordinates": {
                        "latitude": 43.0383566916435,
                        "longitude": -87.9128935610992
                    },
                    "transactions": [],
                    "price": "$",
                    "location": {
                        "address1": "275 W Wisconsin Ave",
                        "address2": "",
                        "address3": "",
                        "city": "Milwaukee",
                        "zip_code": "53203",
                        "country": "US",
                        "state": "WI",
                        "display_address": [
                            "275 W Wisconsin Ave",
                            "Milwaukee, WI 53203"
                        ]
                    },
                    "phone": "+14142989965",
                    "display_phone": "(414) 298-9965",
                    "distance": 1472.1347422335252
                },
                {
                    "id": "yTHEVb8QNWST8ZaYMeKMww",
                    "alias": "colectivo-coffee-milwaukee-5",
                    "name": "Colectivo Coffee",
                    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/uqB_tJejhab-iZI2cFpL5g/o.jpg",
                    "is_closed": false,
                    "url": "https://www.yelp.com/biz/colectivo-coffee-milwaukee-5?adjust_creative=tASMfiEPUlhU_ameGYFFYA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tASMfiEPUlhU_ameGYFFYA",
                    "review_count": 77,
                    "categories": [
                        {
                            "alias": "coffee",
                            "title": "Coffee & Tea"
                        }
                    ],
                    "rating": 4,
                    "coordinates": {
                        "latitude": 43.0349835008383,
                        "longitude": -87.9082920402288
                    },
                    "transactions": [],
                    "price": "$",
                    "location": {
                        "address1": "223 E St Paul Ave",
                        "address2": "",
                        "address3": "",
                        "city": "Milwaukee",
                        "zip_code": "53212",
                        "country": "US",
                        "state": "WI",
                        "display_address": [
                            "223 E St Paul Ave",
                            "Milwaukee, WI 53212"
                        ]
                    },
                    "phone": "+14142208330",
                    "display_phone": "(414) 220-8330",
                    "distance": 1397.7601032707557
                },
                {
                    "id": "BObZiNWCIjHQYTjZAj8gog",
                    "alias": "kickapoo-coffee-roasters-milwaukee-2",
                    "name": "Kickapoo Coffee Roasters",
                    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/y5MGw3Q-OEx3iOHXy3xt8Q/o.jpg",
                    "is_closed": false,
                    "url": "https://www.yelp.com/biz/kickapoo-coffee-roasters-milwaukee-2?adjust_creative=tASMfiEPUlhU_ameGYFFYA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tASMfiEPUlhU_ameGYFFYA",
                    "review_count": 63,
                    "categories": [
                        {
                            "alias": "coffee",
                            "title": "Coffee & Tea"
                        }
                    ],
                    "rating": 4.5,
                    "coordinates": {
                        "latitude": 43.0312599241734,
                        "longitude": -87.9078461229801
                    },
                    "transactions": [],
                    "price": "$$",
                    "location": {
                        "address1": "232 E Erie St",
                        "address2": "",
                        "address3": "",
                        "city": "Milwaukee",
                        "zip_code": "53202",
                        "country": "US",
                        "state": "WI",
                        "display_address": [
                            "232 E Erie St",
                            "Milwaukee, WI 53202"
                        ]
                    },
                    "phone": "+14142698546",
                    "display_phone": "(414) 269-8546",
                    "distance": 1739.063334781592
                },
                {
                    "id": "hBJrmL9EP3FpIXSCy2rbWw",
                    "alias": "alderaan-coffee-milwaukee",
                    "name": "Alderaan Coffee",
                    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/JtuVM_DDCgwv5jYNTSILZw/o.jpg",
                    "is_closed": false,
                    "url": "https://www.yelp.com/biz/alderaan-coffee-milwaukee?adjust_creative=tASMfiEPUlhU_ameGYFFYA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tASMfiEPUlhU_ameGYFFYA",
                    "review_count": 59,
                    "categories": [
                        {
                            "alias": "coffee",
                            "title": "Coffee & Tea"
                        }
                    ],
                    "rating": 4,
                    "coordinates": {
                        "latitude": 43.0498670786619,
                        "longitude": -87.9072419553995
                    },
                    "transactions": [],
                    "price": "$",
                    "location": {
                        "address1": "1560 N Water St",
                        "address2": "",
                        "address3": "",
                        "city": "Milwaukee",
                        "zip_code": "53202",
                        "country": "US",
                        "state": "WI",
                        "display_address": [
                            "1560 N Water St",
                            "Milwaukee, WI 53202"
                        ]
                    },
                    "phone": "+14143959955",
                    "display_phone": "(414) 395-9955",
                    "distance": 988.6567391685285
                },
                {
                    "id": "jWAE4PuhZk3y4ubIMIhTDw",
                    "alias": "rochambo-coffee-and-tea-house-milwaukee",
                    "name": "Rochambo Coffee & Tea House",
                    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/sH8ynWJYWNV7TVuoeTM-KA/o.jpg",
                    "is_closed": false,
                    "url": "https://www.yelp.com/biz/rochambo-coffee-and-tea-house-milwaukee?adjust_creative=tASMfiEPUlhU_ameGYFFYA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tASMfiEPUlhU_ameGYFFYA",
                    "review_count": 120,
                    "categories": [
                        {
                            "alias": "coffee",
                            "title": "Coffee & Tea"
                        }
                    ],
                    "rating": 4,
                    "coordinates": {
                        "latitude": 43.0527115,
                        "longitude": -87.8947372
                    },
                    "transactions": [],
                    "price": "$",
                    "location": {
                        "address1": "1317 E Brady St",
                        "address2": "",
                        "address3": "",
                        "city": "Milwaukee",
                        "zip_code": "53202",
                        "country": "US",
                        "state": "WI",
                        "display_address": [
                            "1317 E Brady St",
                            "Milwaukee, WI 53202"
                        ]
                    },
                    "phone": "+14142910095",
                    "display_phone": "(414) 291-0095",
                    "distance": 918.2048439433169
                },
                {
                    "id": "f2nxOIJ8mwVB_zF8KegIdA",
                    "alias": "dryhootch-coffeehouse-milwaukee",
                    "name": "Dryhootch Coffeehouse",
                    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/ZWkgdxIGyVn6WIAmXQ_p7g/o.jpg",
                    "is_closed": false,
                    "url": "https://www.yelp.com/biz/dryhootch-coffeehouse-milwaukee?adjust_creative=tASMfiEPUlhU_ameGYFFYA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tASMfiEPUlhU_ameGYFFYA",
                    "review_count": 16,
                    "categories": [
                        {
                            "alias": "coffee",
                            "title": "Coffee & Tea"
                        }
                    ],
                    "rating": 4.5,
                    "coordinates": {
                        "latitude": 43.053189,
                        "longitude": -87.898629
                    },
                    "transactions": [],
                    "price": "$",
                    "location": {
                        "address1": "1030 E Brady St",
                        "address2": "",
                        "address3": "",
                        "city": "Milwaukee",
                        "zip_code": "53202",
                        "country": "US",
                        "state": "WI",
                        "display_address": [
                            "1030 E Brady St",
                            "Milwaukee, WI 53202"
                        ]
                    },
                    "phone": "+14144558456",
                    "display_phone": "(414) 455-8456",
                    "distance": 955.9600749782849
                },
                {
                    "id": "XUvGh9cuj7IAHPtn6_5tyg",
                    "alias": "grace-place-coffee-milwaukee",
                    "name": "Grace Place Coffee",
                    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/lVL4YEue1LsVqCJQM5uDgg/o.jpg",
                    "is_closed": false,
                    "url": "https://www.yelp.com/biz/grace-place-coffee-milwaukee?adjust_creative=tASMfiEPUlhU_ameGYFFYA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tASMfiEPUlhU_ameGYFFYA",
                    "review_count": 6,
                    "categories": [
                        {
                            "alias": "coffee",
                            "title": "Coffee & Tea"
                        }
                    ],
                    "rating": 4.5,
                    "coordinates": {
                        "latitude": 43.0458946228027,
                        "longitude": -87.909309387207
                    },
                    "transactions": [],
                    "price": "$",
                    "location": {
                        "address1": "250 E Juneau Ave",
                        "address2": "",
                        "address3": "",
                        "city": "Milwaukee",
                        "zip_code": "53202",
                        "country": "US",
                        "state": "WI",
                        "display_address": [
                            "250 E Juneau Ave",
                            "Milwaukee, WI 53202"
                        ]
                    },
                    "phone": "+14142713006",
                    "display_phone": "(414) 271-3006",
                    "distance": 1011.3099519050179
                },
                {
                    "id": "R8_FYKfoIJmEBawgEkqt6Q",
                    "alias": "anodyne-coffee-roasting-milwaukee-5",
                    "name": "Anodyne Coffee Roasting",
                    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/idhzk8dcXGb6Hk5CVOtHOw/o.jpg",
                    "is_closed": false,
                    "url": "https://www.yelp.com/biz/anodyne-coffee-roasting-milwaukee-5?adjust_creative=tASMfiEPUlhU_ameGYFFYA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tASMfiEPUlhU_ameGYFFYA",
                    "review_count": 108,
                    "categories": [
                        {
                            "alias": "coffeeroasteries",
                            "title": "Coffee Roasteries"
                        },
                        {
                            "alias": "wine_bars",
                            "title": "Wine Bars"
                        },
                        {
                            "alias": "beerbar",
                            "title": "Beer Bar"
                        }
                    ],
                    "rating": 4.5,
                    "coordinates": {
                        "latitude": 43.0254554626077,
                        "longitude": -87.9137124511892
                    },
                    "transactions": [],
                    "price": "$",
                    "location": {
                        "address1": "224 W Bruce St",
                        "address2": "",
                        "address3": "",
                        "city": "Milwaukee",
                        "zip_code": "53204",
                        "country": "US",
                        "state": "WI",
                        "display_address": [
                            "224 W Bruce St",
                            "Milwaukee, WI 53204"
                        ]
                    },
                    "phone": "+14147631143",
                    "display_phone": "(414) 763-1143",
                    "distance": 2533.472899824099
                },
                {
                    "id": "VeHbCxCNHOlWjBPjpcfGsQ",
                    "alias": "stone-creek-coffee-milwaukee-13",
                    "name": "Stone Creek Coffee",
                    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/83fOsveRmM_CUJlZpmT-2A/o.jpg",
                    "is_closed": false,
                    "url": "https://www.yelp.com/biz/stone-creek-coffee-milwaukee-13?adjust_creative=tASMfiEPUlhU_ameGYFFYA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tASMfiEPUlhU_ameGYFFYA",
                    "review_count": 85,
                    "categories": [
                        {
                            "alias": "coffee",
                            "title": "Coffee & Tea"
                        }
                    ],
                    "rating": 4.5,
                    "coordinates": {
                        "latitude": 43.03525,
                        "longitude": -87.91712
                    },
                    "transactions": [],
                    "price": "$",
                    "location": {
                        "address1": "422 N 5th St",
                        "address2": "",
                        "address3": "",
                        "city": "Milwaukee",
                        "zip_code": "53203",
                        "country": "US",
                        "state": "WI",
                        "display_address": [
                            "422 N 5th St",
                            "Milwaukee, WI 53203"
                        ]
                    },
                    "phone": "+14142701008",
                    "display_phone": "(414) 270-1008",
                    "distance": 1963.1047519728788
                },
                {
                    "id": "rFjcPUU2V3XoFqnRWlkq0Q",
                    "alias": "pilcrow-coffee-milwaukee-2",
                    "name": "Pilcrow Coffee",
                    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/FkIsoVUcrvmVqP56-RSOXw/o.jpg",
                    "is_closed": false,
                    "url": "https://www.yelp.com/biz/pilcrow-coffee-milwaukee-2?adjust_creative=tASMfiEPUlhU_ameGYFFYA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tASMfiEPUlhU_ameGYFFYA",
                    "review_count": 16,
                    "categories": [
                        {
                            "alias": "coffeeroasteries",
                            "title": "Coffee Roasteries"
                        },
                        {
                            "alias": "coffee",
                            "title": "Coffee & Tea"
                        }
                    ],
                    "rating": 4.5,
                    "coordinates": {
                        "latitude": 43.05353,
                        "longitude": -87.91471
                    },
                    "transactions": [],
                    "price": "$",
                    "location": {
                        "address1": "1739 North Doctor Martin Luther King Dr",
                        "address2": "",
                        "address3": null,
                        "city": "Milwaukee",
                        "zip_code": "53212",
                        "country": "US",
                        "state": "WI",
                        "display_address": [
                            "1739 North Doctor Martin Luther King Dr",
                            "Milwaukee, WI 53212"
                        ]
                    },
                    "phone": "+12624226226",
                    "display_phone": "(262) 422-6226",
                    "distance": 1751.9954272344746
                },
                {
                    "id": "wmQJZyWLsqAiMR3NyQap2w",
                    "alias": "colectivo-coffee-us-bank-milwaukee",
                    "name": "Colectivo Coffee - US Bank",
                    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/Dqb2xmylLEHNA0eNGs5CLA/o.jpg",
                    "is_closed": false,
                    "url": "https://www.yelp.com/biz/colectivo-coffee-us-bank-milwaukee?adjust_creative=tASMfiEPUlhU_ameGYFFYA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tASMfiEPUlhU_ameGYFFYA",
                    "review_count": 6,
                    "categories": [
                        {
                            "alias": "coffee",
                            "title": "Coffee & Tea"
                        },
                        {
                            "alias": "cafes",
                            "title": "Cafes"
                        }
                    ],
                    "rating": 4.5,
                    "coordinates": {
                        "latitude": 43.0382423400879,
                        "longitude": -87.9020767211914
                    },
                    "transactions": [],
                    "price": "$$",
                    "location": {
                        "address1": "777 E Wisconsin Ave",
                        "address2": "",
                        "address3": "",
                        "city": "Milwaukee",
                        "zip_code": "53202",
                        "country": "US",
                        "state": "WI",
                        "display_address": [
                            "777 E Wisconsin Ave",
                            "Milwaukee, WI 53202"
                        ]
                    },
                    "phone": "+14142258970",
                    "display_phone": "(414) 225-8970",
                    "distance": 834.3618078997696
                },
                {
                    "id": "notOipeqgFafXW8LiPPJwA",
                    "alias": "holey-moley-coffee-doughnuts-milwaukee",
                    "name": "Holey Moley Coffee + Doughnuts",
                    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/OUQZNOLcUb0oZz1TjeMzHw/o.jpg",
                    "is_closed": false,
                    "url": "https://www.yelp.com/biz/holey-moley-coffee-doughnuts-milwaukee?adjust_creative=tASMfiEPUlhU_ameGYFFYA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tASMfiEPUlhU_ameGYFFYA",
                    "review_count": 222,
                    "categories": [
                        {
                            "alias": "donuts",
                            "title": "Donuts"
                        },
                        {
                            "alias": "coffee",
                            "title": "Coffee & Tea"
                        }
                    ],
                    "rating": 4,
                    "coordinates": {
                        "latitude": 43.0345289482033,
                        "longitude": -87.9056834576721
                    },
                    "transactions": [
                        "pickup",
                        "delivery"
                    ],
                    "price": "$",
                    "location": {
                        "address1": "316 N Milwaukee St",
                        "address2": "",
                        "address3": "",
                        "city": "Milwaukee",
                        "zip_code": "53202",
                        "country": "US",
                        "state": "WI",
                        "display_address": [
                            "316 N Milwaukee St",
                            "Milwaukee, WI 53202"
                        ]
                    },
                    "phone": "+14143081616",
                    "display_phone": "(414) 308-1616",
                    "distance": 1331.936203073815
                },
                {
                    "id": "ilvlJS67FIfdaI-0s3iAnQ",
                    "alias": "anodyne-coffee-roasting-co-public-market-milwaukee",
                    "name": "Anodyne Coffee Roasting Co - Public Market",
                    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/RYSvKh_nPSyTUovo8AkvOQ/o.jpg",
                    "is_closed": false,
                    "url": "https://www.yelp.com/biz/anodyne-coffee-roasting-co-public-market-milwaukee?adjust_creative=tASMfiEPUlhU_ameGYFFYA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tASMfiEPUlhU_ameGYFFYA",
                    "review_count": 37,
                    "categories": [
                        {
                            "alias": "coffee",
                            "title": "Coffee & Tea"
                        },
                        {
                            "alias": "cafes",
                            "title": "Cafes"
                        }
                    ],
                    "rating": 4,
                    "coordinates": {
                        "latitude": 43.0352077982042,
                        "longitude": -87.9085515282268
                    },
                    "transactions": [],
                    "price": "$",
                    "location": {
                        "address1": "400 N Water St",
                        "address2": "",
                        "address3": "The Milwaukee Public Market",
                        "city": "Milwaukee",
                        "zip_code": "53202",
                        "country": "US",
                        "state": "WI",
                        "display_address": [
                            "400 N Water St",
                            "The Milwaukee Public Market",
                            "Milwaukee, WI 53202"
                        ]
                    },
                    "phone": "+12628883642",
                    "display_phone": "(262) 888-3642",
                    "distance": 1411.9464121648336
                },
                {
                    "id": "fCqjSMDHateuEZXmtI_d4Q",
                    "alias": "milwaukee-coffee-peddlers-milwaukee-2",
                    "name": "Milwaukee Coffee Peddlers",
                    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/L5S-YhnPBIplsSOKedHAGA/o.jpg",
                    "is_closed": false,
                    "url": "https://www.yelp.com/biz/milwaukee-coffee-peddlers-milwaukee-2?adjust_creative=tASMfiEPUlhU_ameGYFFYA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tASMfiEPUlhU_ameGYFFYA",
                    "review_count": 2,
                    "categories": [
                        {
                            "alias": "coffee",
                            "title": "Coffee & Tea"
                        }
                    ],
                    "rating": 5,
                    "coordinates": {
                        "latitude": 43.0367260512745,
                        "longitude": -87.9049489308606
                    },
                    "transactions": [],
                    "price": "$",
                    "location": {
                        "address1": "507 North Jefferson St",
                        "address2": "",
                        "address3": null,
                        "city": "Milwaukee",
                        "zip_code": "53202",
                        "country": "US",
                        "state": "WI",
                        "display_address": [
                            "507 North Jefferson St",
                            "Milwaukee, WI 53202"
                        ]
                    },
                    "phone": "",
                    "display_phone": "",
                    "distance": 1096.1045830345154
                },
                {
                    "id": "OEvpPXOQmZyl3FpW0UBsoA",
                    "alias": "coffeetails-milwaukee",
                    "name": "Coffeetails",
                    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/b4n2193XkZfFrlM2M079FQ/o.jpg",
                    "is_closed": false,
                    "url": "https://www.yelp.com/biz/coffeetails-milwaukee?adjust_creative=tASMfiEPUlhU_ameGYFFYA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tASMfiEPUlhU_ameGYFFYA",
                    "review_count": 4,
                    "categories": [
                        {
                            "alias": "coffee",
                            "title": "Coffee & Tea"
                        }
                    ],
                    "rating": 5,
                    "coordinates": {
                        "latitude": 43.0495814474062,
                        "longitude": -87.9033919585189
                    },
                    "transactions": [],
                    "price": "$$",
                    "location": {
                        "address1": "1506 N Van Buren",
                        "address2": "",
                        "address3": "",
                        "city": "Milwaukee",
                        "zip_code": "53202",
                        "country": "US",
                        "state": "WI",
                        "display_address": [
                            "1506 N Van Buren",
                            "Milwaukee, WI 53202"
                        ]
                    },
                    "phone": "+14143479972",
                    "display_phone": "(414) 347-9972",
                    "distance": 755.0918933595412
                },
                {
                    "id": "Kdo9e5DEUoNtlDLacHJJMA",
                    "alias": "brewed-cafe-milwaukee-3",
                    "name": "Brewed Cafe",
                    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/I3YrSAsqt-tnX-gDjsagTw/o.jpg",
                    "is_closed": false,
                    "url": "https://www.yelp.com/biz/brewed-cafe-milwaukee-3?adjust_creative=tASMfiEPUlhU_ameGYFFYA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tASMfiEPUlhU_ameGYFFYA",
                    "review_count": 72,
                    "categories": [
                        {
                            "alias": "coffee",
                            "title": "Coffee & Tea"
                        },
                        {
                            "alias": "breakfast_brunch",
                            "title": "Breakfast & Brunch"
                        }
                    ],
                    "rating": 4,
                    "coordinates": {
                        "latitude": 43.05309,
                        "longitude": -87.8964
                    },
                    "transactions": [],
                    "price": "$",
                    "location": {
                        "address1": "1208 E Brady St",
                        "address2": "",
                        "address3": "",
                        "city": "Milwaukee",
                        "zip_code": "53202",
                        "country": "US",
                        "state": "WI",
                        "display_address": [
                            "1208 E Brady St",
                            "Milwaukee, WI 53202"
                        ]
                    },
                    "phone": "+14142762739",
                    "display_phone": "(414) 276-2739",
                    "distance": 933.8503026320304
                },
                {
                    "id": "hg0kniCrQ4HWuKPriiA9Fw",
                    "alias": "stone-creek-coffee-milwaukee-16",
                    "name": "Stone Creek Coffee",
                    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/ci_qUbsX1x1aXNLQVWqI8w/o.jpg",
                    "is_closed": false,
                    "url": "https://www.yelp.com/biz/stone-creek-coffee-milwaukee-16?adjust_creative=tASMfiEPUlhU_ameGYFFYA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tASMfiEPUlhU_ameGYFFYA",
                    "review_count": 49,
                    "categories": [
                        {
                            "alias": "coffee",
                            "title": "Coffee & Tea"
                        },
                        {
                            "alias": "lounges",
                            "title": "Lounges"
                        }
                    ],
                    "rating": 4.5,
                    "coordinates": {
                        "latitude": 43.029716,
                        "longitude": -87.9093259
                    },
                    "transactions": [],
                    "price": "$$",
                    "location": {
                        "address1": "158 S Barclay St",
                        "address2": "",
                        "address3": "",
                        "city": "Milwaukee",
                        "zip_code": "53204",
                        "country": "US",
                        "state": "WI",
                        "display_address": [
                            "158 S Barclay St",
                            "Milwaukee, WI 53204"
                        ]
                    },
                    "phone": "+14142700028",
                    "display_phone": "(414) 270-0028",
                    "distance": 1942.915159877954
                },
                {
                    "id": "NptfIf_ppyA3qUfaFw96iQ",
                    "alias": "colectivo-coffee-milwaukee-4",
                    "name": "Colectivo Coffee",
                    "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/Mqj9fo2Mk5ux7dPB8O-ybA/o.jpg",
                    "is_closed": false,
                    "url": "https://www.yelp.com/biz/colectivo-coffee-milwaukee-4?adjust_creative=tASMfiEPUlhU_ameGYFFYA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tASMfiEPUlhU_ameGYFFYA",
                    "review_count": 109,
                    "categories": [
                        {
                            "alias": "coffee",
                            "title": "Coffee & Tea"
                        }
                    ],
                    "rating": 4,
                    "coordinates": {
                        "latitude": 43.0591278076172,
                        "longitude": -87.8851547241211
                    },
                    "transactions": [],
                    "price": "$",
                    "location": {
                        "address1": "2211 N Prospect Ave",
                        "address2": "",
                        "address3": "",
                        "city": "Milwaukee",
                        "zip_code": "53202",
                        "country": "US",
                        "state": "WI",
                        "display_address": [
                            "2211 N Prospect Ave",
                            "Milwaukee, WI 53202"
                        ]
                    },
                    "phone": "+14142733753",
                    "display_phone": "(414) 273-3753",
                    "distance": 1874.1925015469155
                },
                {
                    "id": "F39-CYNc299vDSg1_ytdVg",
                    "alias": "café-at-the-plaza-milwaukee-2",
                    "name": "Café At the Plaza",
                    "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/64N3RkJI3RLpNDNi69xYjA/o.jpg",
                    "is_closed": false,
                    "url": "https://www.yelp.com/biz/caf%C3%A9-at-the-plaza-milwaukee-2?adjust_creative=tASMfiEPUlhU_ameGYFFYA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tASMfiEPUlhU_ameGYFFYA",
                    "review_count": 201,
                    "categories": [
                        {
                            "alias": "cafes",
                            "title": "Cafes"
                        },
                        {
                            "alias": "newamerican",
                            "title": "American (New)"
                        },
                        {
                            "alias": "breakfast_brunch",
                            "title": "Breakfast & Brunch"
                        }
                    ],
                    "rating": 4,
                    "coordinates": {
                        "latitude": 43.0443,
                        "longitude": -87.90249
                    },
                    "transactions": [],
                    "price": "$$",
                    "location": {
                        "address1": "1007 N Cass St",
                        "address2": "",
                        "address3": "",
                        "city": "Milwaukee",
                        "zip_code": "53202",
                        "country": "US",
                        "state": "WI",
                        "display_address": [
                            "1007 N Cass St",
                            "Milwaukee, WI 53202"
                        ]
                    },
                    "phone": "+14142720515",
                    "display_phone": "(414) 272-0515",
                    "distance": 446.94720432122335
                }
            ],
            "total": 208,
            "region": {
                "center": {
                    "longitude": -87.89697647094727,
                    "latitude": 43.04467707307986
                }
            }
        });
        const data = await yelperizeData(JSON.parse(result));
        return res.send({
            places: data
        });
    } catch(error) {
        console.log(error)
    }
}),

router.get('/:id', async (req, res, next) => {
    const requestUri = `/businesses/${req.params.id}`
    //get yelp data
    try {
        // const result = await yelpService.yelpGetPromise(requestUri);
        const result = JSON.stringify({
            "id": "ZOmtBrfpEFKLc_aGcsPrvg",
            "alias": "colectivo-lakefront-milwaukee",
            "name": "Colectivo Lakefront",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/_mIw74fyyjYKh8GK_nTeaA/o.jpg",
            "is_claimed": false,
            "is_closed": false,
            "url": "https://www.yelp.com/biz/colectivo-lakefront-milwaukee?adjust_creative=tASMfiEPUlhU_ameGYFFYA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=tASMfiEPUlhU_ameGYFFYA",
            "phone": "+14142234551",
            "display_phone": "(414) 223-4551",
            "review_count": 348,
            "categories": [
                {
                    "alias": "coffee",
                    "title": "Coffee & Tea"
                }
            ],
            "rating": 4.5,
            "location": {
                "address1": "1701 N Lincoln Memorial Dr",
                "address2": "",
                "address3": "",
                "city": "Milwaukee",
                "zip_code": "53202",
                "country": "US",
                "state": "WI",
                "display_address": [
                    "1701 N Lincoln Memorial Dr",
                    "Milwaukee, WI 53202"
                ],
                "cross_streets": ""
            },
            "coordinates": {
                "latitude": 43.0535610152195,
                "longitude": -87.8868182982865
            },
            "photos": [
                "https://s3-media4.fl.yelpcdn.com/bphoto/_mIw74fyyjYKh8GK_nTeaA/o.jpg",
                "https://s3-media1.fl.yelpcdn.com/bphoto/ae4H9VLoQLJhweSJXr1UUQ/o.jpg",
                "https://s3-media2.fl.yelpcdn.com/bphoto/W3yhi05XYUPiwOSQRrprSA/o.jpg"
            ],
            "price": "$",
            "hours": [
                {
                    "open": [
                        {
                            "is_overnight": false,
                            "start": "0630",
                            "end": "2200",
                            "day": 0
                        },
                        {
                            "is_overnight": false,
                            "start": "0630",
                            "end": "2200",
                            "day": 1
                        },
                        {
                            "is_overnight": false,
                            "start": "0630",
                            "end": "2200",
                            "day": 2
                        },
                        {
                            "is_overnight": false,
                            "start": "0630",
                            "end": "2200",
                            "day": 3
                        },
                        {
                            "is_overnight": false,
                            "start": "0630",
                            "end": "2200",
                            "day": 4
                        },
                        {
                            "is_overnight": false,
                            "start": "0630",
                            "end": "2200",
                            "day": 5
                        },
                        {
                            "is_overnight": false,
                            "start": "0630",
                            "end": "2200",
                            "day": 6
                        }
                    ],
                    "hours_type": "REGULAR",
                    "is_open_now": true
                }
            ],
            "transactions": []
        });
        const data = await yelperizeSingleBusiness(JSON.parse(result));
        return res.json(data);
    } catch(error) {
        console.log(error)
    }
}),


module.exports = router;
