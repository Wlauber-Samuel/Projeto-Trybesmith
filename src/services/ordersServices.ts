import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { Order, OrderProduct } from '../types/Order';

const getAllOrders = async (): Promise<Order[]> => {
  const orders = await OrderModel.findAll({
    attributes: ['id', 'userId'],
    include: [{
      model: ProductModel,
      as: 'productIds',
      attributes: ['id'],
    }],
  }) as unknown as OrderProduct[];
  
  const ordersFormatted = orders.map((order) => ({
    id: order.id,
    userId: order.userId,
    productIds: order.productIds?.map((product) => product.id),
  }));

  return ordersFormatted;
};

export default getAllOrders;