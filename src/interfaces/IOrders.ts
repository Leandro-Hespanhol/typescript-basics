interface IOrders {
  id: number,
  userId: number,
  products: string,
}

interface IOrderTable {
  id: number,
  userId: number,
}

interface ICreateOrder {
  order: {
    userId: number,
    products: number[]
  }
}

export {
  IOrders,
  IOrderTable,
  ICreateOrder,
};