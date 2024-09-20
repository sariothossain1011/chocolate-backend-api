import express from 'express';
import { UserRoutes } from '../modules/user/user.route';

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
//   {
//     path: '/books',
//     route: BookRoutes,
//   },
  /*{
    path: '/orders',
    route: OrderRoutes,
  },
  {
    path: '/admins',
    route: AdminRoutes
  }, */
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
