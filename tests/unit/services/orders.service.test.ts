import { expect } from 'chai';
import sinon from 'sinon';
import OrdersService from '../../../src/services/ordersServices';

describe('OrdersService', function () {
  beforeEach(function () { sinon.restore(); });

  it('Testa se o método getAllOrders retorna todos os pedidos', async function () {
    const orders = await OrdersService();

    expect(orders).to.be.an('array');
    expect(orders[0]).to.have.property('id');
    expect(orders[0]).to.have.property('userId');
    expect(orders[0]).to.have.property('productIds');
  });
});
