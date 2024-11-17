// const express = require('express')
// const router = express.Router()
// const productController = require('../controllers/productController')
// router.get('/all', productController.getAllProducts)
// router.get('/:id', productController.getProductById)
// router.post('/create', productController.createProduct)
// module.exports = router
import { authMiddleware } from '../middlewares/authMiddleware';
import { userRoleMiddleware } from '../middlewares/userRoleMiddleware';
import productControllers from './productController';
import {Router} from 'express';

const router = Router();
router.use(authMiddleware)

router.get('/', productControllers.getAllProducts);
router.get('/:id', productControllers.getProductById); 
router.get('/:category/createProduct', productControllers.renderCreateProduct)

// router.get('/', authMiddleware ,productControllers.getAllProducts);
// router.get('/:id', productControllers.getProductById); 
// router.get('/:category/createProduct', userRoleMiddleware, productControllers.renderCreateProduct)

export default router;