import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { CategoryRoutes } from '../modules/category/category.route';
import { ProductRoutes } from '../modules/product/product.route';

const router = express.Router();

const moduleRoutes = [
//   {
//     path: '/auth',
//     route: AuthRoutes,
//   },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/categories',
    route: CategoryRoutes,
  },
  {
    path: '/products',
    route: ProductRoutes,
  },

];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
