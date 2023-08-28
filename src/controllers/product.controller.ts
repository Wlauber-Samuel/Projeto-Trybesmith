import { Request, Response } from 'express';
import productService from '../services/product.service';

async function create(req: Request, res: Response) {
  const { name, price, orderId } = req.body;
  const response = await productService.create({ name, price, orderId });

  res.status(201).json(response.data);
}

export default {
  create,
};