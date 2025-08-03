const express = require('express');
const router = express.Router();
const { getPreviousUsage } = require('../controllers/previousUsageController');

router.get('/PreviousMonthsDailyUsage', getPreviousUsage);

module.exports = router;
