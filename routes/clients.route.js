const express = require('express');
const router = express.Router();
const { getClients } = require('../services/crm.service');

router.get('/', (req, res) => {
  res.send({
    clients: getClients(req.params.numClients)
  });
});

module.exports = router;
