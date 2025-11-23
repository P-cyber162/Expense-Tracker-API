const express = require('express');
const {getMonthlySummary, getYearlySummary} = require('./../controllers/summaryController');

const router = express.Router();

router
    .route('/monthlySummary')
    .get(getMonthlySummary);

router
    .route('/yearlySummary')
    .get(getYearlySummary);

module.exports = router;