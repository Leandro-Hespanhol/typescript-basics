import { NextFunction, Request, Response } from 'express';

const nameValidation = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name is required' });
  if (typeof name !== 'string') return res.status(422).json({ error: 'Name must be a string' });
  if (name.length < 2) {
    return res.status(422).json({ error: 'Name must be longer than 2 characters' });
  }
  next();
};

const amountValidation = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;
  if (!amount) return res.status(400).json({ error: 'Amount is required' });
  if (typeof amount !== 'string') return res.status(422).json({ error: 'Amount must be a string' });
  if (amount.length < 2) {
    return res.status(422).json({ error: 'Amount must be longer than 2 characters' });
  }
  next();
};

const userNameValidation = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ error: 'Username is required' });
  if (typeof username !== 'string') {
    return res.status(422).json({ error: 'Username must be a string' });
  }
  if (username.length < 3) {
    return res.status(422).json({ error: 'Username must be longer than 2 characters' });
  }
  next();
};

const userClassValidation = (req: Request, res: Response, next: NextFunction) => {
  const { classe } = req.body;
  if (!classe) return res.status(400).json({ error: 'Classe is required' });
  if (typeof classe !== 'string') {
    return res.status(422).json({ error: 'Classe must be a string' });
  }
  if (classe.length < 3) {
    return res.status(422).json({ error: 'Classe must be longer than 2 characters' });
  }
  next();
};

const userPassValidation = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (!password) return res.status(400).json({ error: 'Password is required' });
  if (typeof password !== 'string') {
    return res.status(422).json({ error: 'Password must be a string' });
  }
  if (password.length < 9) {
    return res.status(422).json({ error: 'Password must be longer than 7 characters' });
  }
  next();
};

const userLevelValidation = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;
  if (!level && level !== 0) return res.status(400).json({ error: 'Level is required' });
  if (typeof level !== 'number') {
    return res.status(422).json({ error: 'Level must be a number' });
  }
  if (level <= 0) {
    return res.status(422).json({ error: 'Level must be greater than 0' });
  }
  next();
};

const productsArrayValidation = (req: Request, res: Response, next: NextFunction) => {
  const { products } = req.body;
  if (products === undefined || products === null) {
    return res.status(400).json({ error: 'Products is required' });
  }
  if (!Array.isArray(products)) {
    return res.status(422).json({ error: 'Products must be an array of numbers' });
  }
  if (!products.length) {
    return res.status(422).json({ error: 'Products can\'t be empty' });
  }

  next();
};

export {
  nameValidation,
  amountValidation,
  userNameValidation,
  userClassValidation,
  userLevelValidation,
  userPassValidation,
  productsArrayValidation,
};