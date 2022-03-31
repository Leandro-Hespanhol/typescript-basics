import { Request, Response } from 'express';
import OrdersService from '../services/ordersService';

export default class OrderController {
  orderService = new OrdersService();

  public async getAll(_req: Request, res: Response) {
    const orders = await this.orderService.getOrders();
    const parseProdutcs = orders.map((elem) => ({ ...elem, products: JSON.parse(elem.products) }));
    res.status(200).json(parseProdutcs);
  }

  public async createOrder(req: Request, res: Response) {
    const { products, user: { id: userId } } = req.body;

    const newOrder = await this.orderService.createOrder(userId, products);

    res.status(201).json(newOrder);
  }
}