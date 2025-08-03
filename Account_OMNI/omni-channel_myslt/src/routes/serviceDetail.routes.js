const express = require('express');
const { getServiceDetail } = require('../controllers/serviceDetail.controller');

const router = express.Router();

// GET /serviceDetail?telephoneNo=011xxxxxxx
router.get('/serviceDetail', getServiceDetail);

module.exports = router;
