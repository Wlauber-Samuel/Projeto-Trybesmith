// import { Op } from 'sequelize';
import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';

import ProductModel from '../database/models/product.model';
import { ReturnAllOrders } from '../types/ReturnAllOrders';
import { ServiceResponse } from '../types/ServiceResponse';
// import { INewOrder } from '../types/INewOrder';

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

async function create(userId: number, productIds: number[])
  : Promise<ServiceResponse<OrderSequelizeModel | unknown>> {
  const newOrder = await OrderModel.create({ userId });

  const orderId = newOrder.dataValues.id;
  const t = await Promise.all(productIds.map((id) =>
    ProductModel.update({ orderId }, { where: { id } })));
  console.log('t', t);
  const serviceResponse: ServiceResponse<OrderSequelizeModel | unknown> = {

    status: 'SUCCESSFUL', data: { userId, productIds },
  };

  return serviceResponse;
}

// async function postOrder(
//   userId: number,
//   productIds: number[],
// ): Promise<ServiceResponse<INewOrder>> {
//   const findUser = await OrderModel.findOne({ where: { userId } });
//   if (findUser) {
//     return { status: 'NOT_FOUND', data: { message: '"userId" not found' } };
//   }

//   const createOrder = await OrderModel.create({ userId });
//   await ProductModel.update(
//     { orderId: createOrder.dataValues.id },
//     { where: { id: { [Op.in]: productIds } } },
//   );

//   return { status: 'SUCCESSFUL', data: { userId, productIds } };
// }

export default { findAll, create };