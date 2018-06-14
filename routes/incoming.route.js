const express = require('express');
const router = express.Router();


router.post('/', (req, res) => {
    const body = req.body.Body;
    res.set('Content-Type', 'text/json')
    res.send(`You sent: ${body} to Express`)
  });

  module.exports = router;