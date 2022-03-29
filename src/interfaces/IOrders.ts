interface IOrders {
  id: number,
  userId: number,
  products: number[],
}

interface IOrderTable {
  id: number,
  userId: number,
}

export {
  IOrders,
  IOrderTable,
};