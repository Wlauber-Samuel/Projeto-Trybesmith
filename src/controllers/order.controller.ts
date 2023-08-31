import { Request, Response } from 'express';
import orderService from '../services/order.service';

async function findAll(req: Request, res: Response) {
  const response = await orderService.findAll();

  res.status(200).json(response.data);
}

async function create(req: Request, res: Response): Promise<Response> {
  const { userId, productIds } = req.body;
  
  const serviceResponse = await orderService.create(userId, productIds);

  return res.status(201).json(serviceResponse.data);
}

export default {
  findAll,
  create,
};