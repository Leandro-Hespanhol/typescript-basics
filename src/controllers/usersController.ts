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
    
    return res.status(201).json({ token });
  }

  async login(req: Request, res: Response) {
    const { username, password } = req.body;
    const [payload] = await this.userService.login({ username, password });
    const secret: string = process.env.JWT_SECRET || 'segredo';
    if (!payload) return res.status(401).json({ error: 'Username or password invalid' });
  
    const jwtConfig: object = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token: string = jwt.sign({ payload }, secret, jwtConfig);
    
    return res.status(200).json({ token });
  }
}
