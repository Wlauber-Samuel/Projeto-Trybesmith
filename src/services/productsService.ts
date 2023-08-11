import Product from '../database/models/product.model';
import { Product as productType } from '../types/Product';

const createProduct = async (name: string, price: string, orderId: number)
: Promise<productType> => {
  const { dataValues } = await Product.create({ 
    name, 
    price,
    orderId,
  });

  return dataValues;
};

export default {
  createProduct,
};