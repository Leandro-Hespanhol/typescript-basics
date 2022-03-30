import { Pool, RowDataPacket } from 'mysql2/promise';
import { IOrders } from '../interfaces/IOrders';

export default class OrdersModel {
  constructor(private connection: Pool) {
    this.connection = connection;
  }

  // public async getAll(): Promise<IOrders[]> {
  //   // const query = `SELECT O.id, O.userId, 
  //   // CONCAT("[", GROUP_CONCAT(P.id), "]") as 'products' from Trybesmith.Orders O
  //   // INNER JOIN Trybesmith.Products P ON P.orderId = O.id
  //   // GROUP BY O.id;`;
  //   const query = 'SELECT * FROM Trybesmith.Orders';
  //   const [order] = await this.connection.execute<RowDataPacket[]>(query);
    
  //   return order as IOrders[];
  // }

  public async getAll(): Promise<IOrders[]> {
    // const query = `SELECT O.id, O.userId, P.id as 'products' from Trybesmith.Orders O
    // INNER JOIN Trybesmith.Products P ON P.orderId = O.id`;
    const query = `SELECT O.id, O.userId, 
    CONCAT("[", GROUP_CONCAT(P.id), "]") as 'products' from Trybesmith.Orders O
    INNER JOIN Trybesmith.Products P ON P.orderId = O.id
    GROUP BY P.orderId ORDER BY O.userId;`;
    const [order] = await this.connection.execute<RowDataPacket[]>(query);

    return order as IOrders[];
  }
}