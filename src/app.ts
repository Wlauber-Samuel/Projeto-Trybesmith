import express from 'express';
import productRouter from './routes/products.router';
import orderRouter from './routes/orders.router';
import loginRouter from './routes/login.router';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/orders', orderRouter);
app.use('/login', loginRouter);

export default app;