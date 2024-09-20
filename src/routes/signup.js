const express = require('express');
const router = express.Router();

const signupController = require('../app/controllers/SignUpController');

signupController.index;

router.get('/', signupController.index);

module.exports = router;
