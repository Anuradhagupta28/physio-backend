const express = require('express');
const dashboardRouter = express.Router();

const dashboardContorller = require('../controllers/dashboardController')

// dashboard Routes
dashboardRouter.get('/dashboard',dashboardContorller.dashboardControllerDetails);

module.exports = { dashboardRouter };