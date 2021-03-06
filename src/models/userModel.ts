import { Pool, ResultSetHeader } from 'mysql2/promise';
import { ILogin, IUser } from '../interfaces/IUser';

export default class UserModel {
  constructor(private connection: Pool) {
    this.connection = connection;
  }

  public async createUser(user: IUser): Promise<IUser> {
    const { username, classe, level, password } = user;
    const query = `INSERT INTO Trybesmith.Users 
      (username, classe, level, password) 
      VALUES (?,?,?,?)`;
    const result = await this.connection
      .execute<ResultSetHeader>(query, [username, classe, level, password]);
    const newUserId = result[0].insertId;

    return { id: newUserId, ...user };
  }

  public async login(login: ILogin): Promise<ILogin[]> {
    const { username, password } = login;
    const query = `SELECT username, password
     FROM Trybesmith.Users WHERE username=? AND password=?;`;
    const [result] = await this.connection.execute(query, [username, password]);

    return result as ILogin[];
  }
}