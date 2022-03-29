// import jwt from 'jsonwebtoken';
// import doetnv from 'dotenv';
// import { Request, Response, NextFunction } from 'express';
// import UserModel from '../models/userModel';
// import connection from '../models/connection';

// doetnv.config();

// const secret = process.env.JWT_SECRET;

// export default async function auth(req: Request, res: Response, next: NextFunction) { 
//   const token = req.headers.authorization;
//   try {
//     const decode: string = jwt.verify(token, secret);
//     const [user] = await UserModel.connection.execute
//     next();
//   } catch (error: any) {
//     res.status(401).json(error.message);
//   }
// }

// export default class TokenAuth {
//   public model: UserModel;

//   public secret: string;

//   constructor() {
//     this.model = new UserModel(connection);
//     this.secret = process.env.JWT_SECRET;
//   }
  
//   public async checkToken(req: Request, res: Response, next: NextFunction) {
//     const token = req.headers.authorization;
//     try {
//       const decode = jwt.verify(token, secret);
//     } catch (error) {
      
//     }
//   }
// }