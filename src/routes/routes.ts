import { Router } from 'express';
import { ProductsController } from '../controllers';
import { amountValidation, nameValidation } from '../middlewares/validation';

const router = Router();

const productsController = new ProductsController();

router.get('/products', async (req, res) => productsController.getAll(req, res));

router.post(
  '/products', 
  nameValidation,
  amountValidation,
  async (req, res) => productsController.createProduct(req, res),
);

export default router;
