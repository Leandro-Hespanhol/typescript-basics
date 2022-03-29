import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProducts } from '../interfaces/IProducts';

export default class ProductsModel {
  constructor(private connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IProducts[]> {
    const query = 'SELECT * FROM Trybesmith.Products';
    const [result] = await this.connection.execute(query);

    return result as IProducts[];
  }

  public async createProduct(product: IProducts): Promise<IProducts> {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const result = await this.connection.execute<ResultSetHeader>(query, [name, amount]);
    const newProductId = result[0].insertId;

    return { id: newProductId, ...product };
  }
}