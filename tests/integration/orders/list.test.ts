import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import OrderModel from '../../../src/database/models/order.model';
import orderMock from '../../mocks/order.mock';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });

  it('ao enviar a solicitação para a rota GET/orders, todos as orderes são retornadas', async function () {
    const mockFindAllReturn = OrderModel.build(orderMock.returnAllOrders[0]);
    sinon.stub(OrderModel, 'findAll').resolves([mockFindAllReturn]);

    const httpResponse = await chai.request(app).get('/orders');

    expect(httpResponse.status).to.equal(200);
  })
});
