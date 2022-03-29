interface IcreateProduct {
  item: {
    id?: number,
    name: string,
    amount: string,
    orderId?: number
  }
}

interface IProducts {
  id?: number,
  name: string,
  amount: string,
  orderId?: number
}

export {
  IProducts,
  IcreateProduct,
};