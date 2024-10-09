import { SizesApiHelper } from "../helpers/sizes-api-helper";
import { sizeData } from '../../support/data.cy.js';

const sizesApiHelper = new SizesApiHelper()

describe('Sizes API Tests', () => {

  before(() => {
    cy.loginByAPI(); 
  });

  it('Should create a new size', function () {
    cy.get('@authToken').then((token) => {
    sizesApiHelper.createSize(token, sizeData).then((response) => {
        expect(response.status).to.eq(201);
      });
    });
  });
});
