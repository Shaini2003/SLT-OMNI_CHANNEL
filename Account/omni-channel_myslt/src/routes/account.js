const express = require('express');
const router = express.Router();
const { viewUserInfo } = require('../controllers/accountController');

// TMF-style endpoint
router.get('/account/view', viewUserInfo);

module.exports = router;
