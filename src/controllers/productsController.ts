import { Request, Response } from 'express';
import ProductsService from '../services/productsService';

export default class ProductsController {
  productsService = new ProductsService();

  async getAll(_req: Request, res: Response) {
    const products = await this.productsService.getAll();

    res.status(200).json(products);
  }

  async createProduct(req: Request, res: Response) {
    const { name, amount } = req.body;
    const product = await this.productsService.createProduct({ name, amount });

    res.status(201).json(product);
  }
}