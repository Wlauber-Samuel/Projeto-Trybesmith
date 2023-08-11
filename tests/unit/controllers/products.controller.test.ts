import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productsService from '../../../src/services/productsService';
import productsController from '../../../src/controller/productController';
import productMock from '../../mocks/productMock';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Verifica caso de sucesso da controller', async function () {
    req.body = productMock.productMockBody;

    sinon.stub(productsService, 'createProduct').resolves(productMock.expectedResult);

    await productsController.createProduct(req, res);  

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(productMock.expectedResult);
  });
});