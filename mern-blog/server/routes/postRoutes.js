const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const { body } = require('express-validator');

// GET all posts
router.get('/', postController.getPosts);

// GET a single post by ID
router.get('/:id', postController.getPost);

// CREATE a new post
router.post(
  '/',
  [
    body('title')
      .notEmpty()
      .withMessage('Title is required'),
    body('content')
      .isLength({ min: 10 })
      .withMessage('Content must be at least 10 characters long'),
    body('category')
      .notEmpty()
      .withMessage('Category is required'),
  ],
  postController.createPost
);

// UPDATE an existing post
router.put(
  '/:id',
  [
    body('title')
      .optional()
      .notEmpty()
      .withMessage('Title cannot be empty'),
    body('content')
      .optional()
      .isLength({ min: 10 })
      .withMessage('Content must be at least 10 characters long'),
  ],
  postController.updatePost
);

// DELETE a post
router.delete('/:id', postController.deletePost);

const auth = require('../middlewares/authMiddleware');

router.post('/', auth, [...validation], postController.createPost);
router.put('/:id', auth, [...validation], postController.updatePost);
router.delete('/:id', auth, postController.deletePost);


module.exports = router;
