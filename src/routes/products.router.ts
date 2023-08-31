import { Router } from 'express';
import productController from '../controllers/product.controller';
import nameMiddleware from '../middlewares/name.middleware';
import priceMiddleware from '../middlewares/price.middleware';

const productRouter = Router();

productRouter.post('/', nameMiddleware, priceMiddleware, productController.create);

productRouter.get('/', productController.findAll);

export default productRouter;