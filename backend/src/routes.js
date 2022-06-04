const express = require('express');
const router = express.Router();

const ProductController = require('./controllers/product.controller');

router.get('/product', ProductController.get);
router.get('/product/:id', ProductController.getById);
router.post('/product', ProductController.post);
router.put('/product/:id', ProductController.put);
router.delete('/product/:id', ProductController.delete);

module.exports = router;