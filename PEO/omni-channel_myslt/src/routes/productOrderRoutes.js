const express = require('express');
const router = express.Router();
const { createProductOrder } = require('../controllers/productOrderController');

// TMF Product Ordering Management endpoint
router.post('/tmf-api/productOrderingManagement/v5/productOrder', createProductOrder);

module.exports = router;
