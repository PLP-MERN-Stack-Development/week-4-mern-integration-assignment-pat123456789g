const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { body } = require('express-validator');

router.post('/register', [
  body('username').notEmpty().withMessage('Username is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be 6+ chars'),
], authController.register);

router.post('/login', [
  body('email').isEmail(),
  body('password').notEmpty(),
], authController.login);

module.exports = router;
