const express = require('express');
const usersController = require('../controller/usersController')
const router = express.Router();

router.get('/sec/api/api_users', usersController.getAll);

module.exports = router;
