interface IUser {
  id?: number,
  username: string,
  classe: string,
  level: number,
  password: string,
}

interface ILogin {
  username: string,
  password: string,
}

export {
  IUser,
  ILogin,
};