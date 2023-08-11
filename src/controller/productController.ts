import { Request, Response } from 'express';
import productsService from '../services/productsService';

const createProduct = async (req: Request, res: Response): Promise<void> => {
  const { name, price, orderId } = req.body;
  const product = await productsService.createProduct(name, price, orderId);
    
  res.status(201).json(product);
};

export default {
  createProduct,
};