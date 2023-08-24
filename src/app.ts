import express from 'express';
import productController from './controller/productController';
import ordersController from './controller/ordersController';

const app = express();

app.use(express.json());

app.post('/products', productController.createProduct);

app.get('/products', productController.getAllProducts);

app.get('/orders', ordersController);

export default app;
