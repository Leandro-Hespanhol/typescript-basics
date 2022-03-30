interface IOrders {
  id: number,
  userId: number,
  products: any,
}

interface IOrderTable {
  id: number,
  userId: number,
}

export {
  IOrders,
  IOrderTable,
};