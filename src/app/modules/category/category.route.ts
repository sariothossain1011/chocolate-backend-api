import express from 'express';
import { CategoryController } from './category.controller';
const router = express.Router();

router.post('/create', CategoryController.createCategory);
router.get('/', CategoryController.getAllCategories);
router.get('/:id', CategoryController.getSingleCategory);
router.delete('/:id', CategoryController.deleteCategory);


export const CategoryRoutes = router;
