interface IOrders {
  id: number,
  userId: number,
  products: string,
}

interface IOrderTable {
  id: number,
  userId: number,
}

export {
  IOrders,
  IOrderTable,
};