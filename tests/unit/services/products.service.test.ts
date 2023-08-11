import { expect } from 'chai';
import sinon from 'sinon';
import productsService from '../../../src/services/productsService';
import productMock from '../../mocks/productMock';
import ProductModel from '../../../src/database/models/product.model';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  it('Verifica caso de sucesso do service', async function () {
    const mockBody = productMock.productMockBody;
    const result = ProductModel.build(productMock.expectedResult);

    sinon.stub(ProductModel, 'create').resolves(result);

    const serviceResponse = await productsService.createProduct(mockBody.name, mockBody.price, mockBody.orderId);

    expect(serviceResponse).to.be.deep.equal(productMock.expectedResult);
  });
});