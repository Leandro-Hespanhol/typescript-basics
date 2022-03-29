import { Pool } from 'mysql2/promise';
import { IOrders } from '../interfaces/IOrders';

export default class OrdersModel {
  constructor(private connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrders[]> {
    const query = `SELECT O.id, O.userId, 
    CONCAT("[", GROUP_CONCAT(P.id), "]") as 'products' from Trybesmith.Orders O
    INNER JOIN Trybesmith.Products P ON P.orderId = O.id
    GROUP BY O.id;`;
    const [order] = await this.connection.execute(query);
    
    return order as IOrders[];
  }
}