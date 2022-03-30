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

  // public async getOrders(): Promise<IOrders[]> {
  //   const orders = await this.orderModel.getAll();
  //   const grouping = orders.map(async (order) => {
  //     if (order.id) {
  //       const productsId: IProducts[] = await this.productsModel.getProductById(order.id);
  //       const products = productsId.map((elem: IProducts) => elem.id);
  //       return { ...order, products } as IOrders;
  //     }
  //     return { ...order, products: [] } as IOrders;
  //   });
  //   const result = await Promise.all(grouping);
  //   return result;
  // }

  public async getOrders(): Promise<IOrders[]> {
    const orders = await this.orderModel.getAll();

    return orders;
  }
}