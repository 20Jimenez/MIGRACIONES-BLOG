const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController')

router.get('/blog', blogController.listarBlog);

module.exports = router;