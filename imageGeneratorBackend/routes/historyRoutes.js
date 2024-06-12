const express = require('express');
const { getSearchHistory } = require('../controllers/historyControllers.js');

const historyRouter = express.Router();

historyRouter.route('/')
                .get(getSearchHistory);


module.exports = historyRouter;
