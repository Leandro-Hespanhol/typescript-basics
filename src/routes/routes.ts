import { Router } from 'express';
import { OrdersController, ProductsController, UsersController } from '../controllers';
import { amountValidation, nameValidation, productsArrayValidation, userClassValidation,
  userLevelValidation, userNameValidation, userPassValidation } from '../middlewares/validation';
import auth from '../services/auth';

const router = Router();

const productsController = new ProductsController();

const usersController = new UsersController();

const ordersController = new OrdersController();

router.get('/products', async (req, res) => productsController.getAll(req, res));

router.post(
  '/products', 
  nameValidation,
  amountValidation,
  async (req, res) => productsController.createProduct(req, res),
);

router.post(
  '/users',
  userNameValidation,
  userClassValidation,
  userLevelValidation,
  userPassValidation,
  async (req, res) => usersController.createUser(req, res),
);

router.get('/orders', async (req, res) => ordersController.getAll(req, res));

router.post(
  '/login', 
  userNameValidation, 
  userPassValidation,
  async (req, res) => usersController.login(req, res),
);

router.post(
  '/orders',
  auth,
  productsArrayValidation,
  async (req, res) => ordersController.createOrder(req, res),
);

export default router;
