import IProducts from '../interfaces/IProducts';
import connection from '../models/connection';
import ProductsModel from '../models/productsModel';

export default class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async getAll(): Promise<IProducts[]> {
    return this.model.getAll();
  }
}