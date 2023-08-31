import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import OrderModel from '../../../src/database/models/order.model';
import ProductModel from '../../../src/database/models/product.model';
import userModel from '../../../src/database/models/user.model';
const { orderCreate } = require('../../mocks/order.mock');
import app from '../../../src/app';

chai.use(chaiHttp);

describe('POST /orders', function () { 
  beforeEach(function () { sinon.restore(); });

  it('POST', async function () {
    const token = 'token'
    const OrderDB = OrderModel.build({ id: 1, userId: 1 });
    const userDB = userModel.build({
      id: 1,
      username: 'Eddie',
      vocation: 'Guerreiro',
      level: 8,
      password: bcrypt.hashSync('sortudo', bcrypt.genSaltSync(10)),
    },)
    sinon.stub(jwt, 'verify').resolves({ userId: 1, username: 'Eddie' });
    sinon.stub(OrderModel, 'create').resolves(OrderDB);
    sinon.stub(userModel, 'findByPk').resolves(userDB);

    const response = await chai.request(app).post('/orders').set('Authorization', `Bearer ${token}`).send({ userId: 1, productIds: [ 1, 2 ] });
    
    expect(response).to.have.status(201);
  });
});
