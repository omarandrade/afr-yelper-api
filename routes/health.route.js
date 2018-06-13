/**
 * health.route.js
 *
 * Health route(s), returns a simple response
 */
const express = require('express');
const router = express.Router();
const os = require('os');


// Parse the incoming http://server/<health> route
router.get('*', (req, res) => {

  // TODO: Something meaningful ?!?!?

  return res.json({
    'Node Host': os.hostname(),
    'Server Host': req.header('host')
  });
});

module.exports = router;