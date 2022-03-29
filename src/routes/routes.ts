import { Router } from 'express';
import { ProductsController } from '../controllers';

const router = Router();

const productsController = new ProductsController();

router.get('/products', async (req, res) => productsController.getAll(req, res));

export default router;
