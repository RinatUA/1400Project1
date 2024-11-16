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

router.get('/', authMiddleware ,productControllers.getAllProducts);
router.get('/products/:id', productControllers.getProductById); 
router.get('/createProduct', userRoleMiddleware, productControllers.renderCreateProduct)
router.post('/createProduct', userRoleMiddleware, productControllers.createProduct)

export default router;