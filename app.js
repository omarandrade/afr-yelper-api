const debug = require('debug')('api:app');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/clientData";
const health = require('./routes/health.route');
const clients = require('./routes/clients.route');
const places = require('./routes/places.route');
const calendar = require('./routes/calendar.route');
const incoming = require('./routes/incoming.route');

app.use((req, res, next) => {
    debug('Request received');
    debug({
        requestPath: req.url,
        httpVerb: req.method,
        params: req.params
    });
    next();
});

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property
// Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
// A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body).
app.use(bodyParser.json());


// Health check route used to validate service is up and healthly
app.use('/api/health', health);
app.use('/api/clients', clients);
app.use('/api/places', places);
app.use('/api/calendar', calendar);
app.use('/api/incoming', incoming);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('InvalidUri or InvalidHttpVerb' + req.originalUrl);
    err.status = 400;
    next(err);
});

// production error handler
// sends empty body and 500 error
app.use((err, req, res, next) => {
    // if (req && req.log) {
    //     req.log.error(err);
    // } else {
    //     log.error(err);
    // }
    res.status(err.status || 500);
    res.json({
        'msg': err.message
    });
    next(err);
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("clientData");
    dbo.createCollection("customers", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });

module.exports = app;
