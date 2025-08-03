const express = require('express');
const router = express.Router();
const { getEnhancedCurrentDailyUsage } = require('../controllers/usageController');


// GET: /api/usageManagement/enhancedCurrentDailyUsage?subscriberID=xxx&billDate=xx
router.get('/enhancedCurrentDailyUsage', getEnhancedCurrentDailyUsage);

module.exports = router;
