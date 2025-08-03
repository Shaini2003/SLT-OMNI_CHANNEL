const express = require('express');
const router = express.Router();
const { getDailyUsage } = require('../controllers/usageController');

router.get('/', getDailyUsage);

module.exports = router;
