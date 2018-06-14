const express = require('express');
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

//accepts an JSON object and add in to e database
/* ex. {
	"email":"afr@northwesternmutual.com",
	"busID":"msTroJP3a8TopV-dS62rBw",
	"date":"2018-06-14",
	"clientID":"client@gmail.com",
	"nmRating": "2.5"
} */

router.post('/', (req, res) => {
    const body = req.body;

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("clientData");
      var myobj = { 
        email: body.email, 
        busID: body.busID,
        date: body.date,
        clientID: body.clientID,
        nmRating: body.nmRating
      };
      
      dbo.collection("customers").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
  })
});

module.exports = router;