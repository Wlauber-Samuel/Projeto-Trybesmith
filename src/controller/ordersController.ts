import { Request, Response } from 'express';
import orderServices from '../services/ordersServices';

const getAllOrders = async (_req: Request, res: Response): Promise<void> => {
    const orders = await orderServices();

    res.status(200).json(orders);
};

export default getAllOrders;