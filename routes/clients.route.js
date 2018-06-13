const express = require('express');
const router = express.Router();
const { getClients } = require('../services/crm.service');

router.get('/:numClients', (req, res, next)=>{
console.log(req.params.numClients);   
console.log(getClients(req.params.numClients));
return res.json(getClients(req.params.numClients));
});


module.exports = router;