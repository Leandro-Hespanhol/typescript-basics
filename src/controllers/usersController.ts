import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UsersService from '../services/usersService';

export default class UsersController {
  userService = new UsersService();

  async createUser(req: Request, res: Response) {
    const { username, classe, level, password } = req.body;
    const user = await this.userService.createUser({ username, classe, level, password });
    const secret: string = process.env.JWT_SECRET || 'segredo';

    const jwtConfig: object = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token: string = jwt.sign({ user }, secret, jwtConfig);
    req.body.token = token;
    console.log(req.body);
    return res.status(201).json({ token });
  }
}
