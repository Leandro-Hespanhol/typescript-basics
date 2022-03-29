import { Request, Response } from 'express';
import OrdersService from '../services/ordersService';

export default class OrderController {
  orderService = new OrdersService();

  public async getAll(req: Request, res: Response) {
    const orders = await this.orderService.getOrders();

    res.status(200).json(orders);
  }
}