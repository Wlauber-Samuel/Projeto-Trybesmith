const returnAllOrders = [
  {
    "id": 1,
    "userId": 1,
    "productIds": [
      { id: 2 },
      { id: 1 }
    ]
  }
]

const returnOrders = [
  {
    "id": 1,
    "userId": 1,
    "productIds": [
      2,
      1,
    ]
  }
]

const ordersMockBody = {
  "productIds": [1, 2],
  "userId": 1
}

const orderCreate = { id: 10, userId: 1 };

export default {
  returnAllOrders,
  returnOrders,
  ordersMockBody,
  orderCreate
}