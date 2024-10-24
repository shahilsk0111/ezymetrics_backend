const express = require('express');
const { fetchAndStoreData } = require('../controllers/dataController');
const { generateReport } = require('../controllers/reportController');

const router = express.Router();

router.get('/fetch-data', fetchAndStoreData);
router.get('/report', generateReport);

module.exports = router;
