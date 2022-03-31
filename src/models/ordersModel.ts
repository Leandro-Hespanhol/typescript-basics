import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { ICreateOrder, IOrders } from '../interfaces/IOrders';

export default class OrdersModel {
  constructor(private connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrders[]> {
    const query = `SELECT O.id, O.userId, 
    CONCAT("[", GROUP_CONCAT(P.id), "]") as 'products' from Trybesmith.Orders O
    INNER JOIN Trybesmith.Products P ON P.orderId = O.id
    GROUP BY P.orderId ORDER BY O.userId;`;
    const [order] = await this.connection.execute<RowDataPacket[]>(query);

    return order as IOrders[];
  }

  public async createOrder(userId: number, products: number[]): Promise<ICreateOrder> {
    const queryOrder = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
    const [result] = await this.connection.execute<ResultSetHeader>(queryOrder, [userId]);
    const orderId = result.insertId;
    
    const queryProducts = 'UPDATE Trybesmith.Products SET orderId=? WHERE id IN (?)';
    await this.connection.execute(queryProducts, [orderId, ...products]);
    // talvez falte fazer um select

    return { order: { userId, products } };
  }
}