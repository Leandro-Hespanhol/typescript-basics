import { Pool } from 'mysql2/promise';
import IProducts from '../interfaces/IProducts';

export default class ProductsModel {
  constructor(private connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IProducts[]> {
    const query = 'SELECT * FROM Products';
    const [result] = await this.connection.execute(query);

    return result as IProducts[];
  }
}