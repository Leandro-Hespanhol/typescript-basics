import { ILogin, IUser } from '../interfaces/IUser';
import connection from '../models/connection';
import UserModel from '../models/userModel';

export default class UsersService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async createUser(user: IUser): Promise<IUser> {
    return this.model.createUser(user);
  }

  public async login(login: ILogin): Promise<ILogin[]> {
    return this.model.login(login);
  }
}