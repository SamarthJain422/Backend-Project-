const express = require('express');
const router = express.Router();

const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/product.controller.js');

// GET all products
router.get('/', getProducts);

// GET a single product
router.get('/:id', getProduct);

// POST - create a product
router.post('/', createProduct);

// PUT - update a product
router.put('/:id', updateProduct);

// DELETE - delete a product
router.delete('/:id', deleteProduct);

module.exports = router;
