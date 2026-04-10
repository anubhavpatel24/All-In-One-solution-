const express = require('express');
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getProducts);
router.post('/', authMiddleware, authMiddleware.requireAdmin, createProduct);
router.put('/:id', authMiddleware, authMiddleware.requireAdmin, updateProduct);
router.delete('/:id', authMiddleware, authMiddleware.requireAdmin, deleteProduct);

module.exports = router;
