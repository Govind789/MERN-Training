const express = require('express');
const { getSearchHistory } = require('../controllers/historyControllers.js');

const historyRouter = express.Router();

router.get('/history', getSearchHistory);

module.exports = historyRouter;
