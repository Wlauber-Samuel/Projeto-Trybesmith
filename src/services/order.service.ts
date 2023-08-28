import OrderModel from '../database/models/order.model';

import ProductModel from '../database/models/product.model';
import { ReturnAllOrders } from '../types/ReturnAllOrders';
import { ServiceResponse } from '../types/ServiceResponse';

async function findAll(): Promise<ServiceResponse<ReturnAllOrders[]>> {
  const orders = await OrderModel.findAll({
    include: {
      model: ProductModel,
      as: 'productIds',
      attributes: ['id'],
    },
  });

  const ordersCorrect = orders.map((order) => ({
    id: order.dataValues.id,
    userId: order.dataValues.userId,
    productIds: order.dataValues.productIds?.map((product) => product.id),
  }));
  
  return { status: 'SUCCESSFUL', data: ordersCorrect };
}

export default {
  findAll,
};