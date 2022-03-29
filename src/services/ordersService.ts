import { IOrders } from '../interfaces/IOrders';
import connection from '../models/connection';
import OrdersModel from '../models/ordersModel';

export default class OrdersService {
  model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getOrders(): Promise<IOrders[]> {
    const orders = await this.model.getAll();
    return orders;
  }
}