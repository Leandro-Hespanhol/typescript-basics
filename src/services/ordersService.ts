import { IOrders } from '../interfaces/IOrders';
import connection from '../models/connection';
import OrdersModel from '../models/ordersModel';
import ProductsModel from '../models/productsModel';

export default class OrdersService {
  orderModel: OrdersModel;

  productsModel: ProductsModel;

  constructor() {
    this.orderModel = new OrdersModel(connection);
    this.productsModel = new ProductsModel(connection);
  }

  public async getOrders(): Promise<IOrders[]> {
    const orders = await this.orderModel.getAll();

    return orders;
  }
}