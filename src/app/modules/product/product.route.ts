import express from 'express';
import { ProductController } from './product.controller';
const router = express.Router();
router.get('/create', ProductController.createCategory)
router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getSingleProduct);
router.delete('/:id', ProductController.deleteProduct);

export const ProductRoutes = router;
