const express = require('express');
const router = express.Router();
const { getTimes } = require('../services/date.service');

//Date must be in this format YYYY-MM-DD
router.get('/:date', (req, res, next)=>{
  return res.json(getTimes(req.params.date));
});

module.exports = router;
