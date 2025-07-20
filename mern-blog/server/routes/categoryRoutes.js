const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const { body } = require('express-validator');

// GET all categories
router.get('/', categoryController.getCategories);

// CREATE a new category
router.post(
  '/',
  [
    body('name')
      .notEmpty()
      .withMessage('Category name is required'),
  ],
  categoryController.createCategory
);

module.exports = router;
