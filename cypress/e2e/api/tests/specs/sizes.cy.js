import { SizesApiHelper } from "../helpers/sizes-api-helper";

const sizesApiHelper = new SizesApiHelper()

describe('Sizes API Tests', () => {

  before(() => {
    cy.loginByAPI(); 
  });

  it.only('Should create a new size', function () {
    cy.get('@authToken').then((token) => {
      const sizeData = 
      {
        name: "Medium", 
        description: "Test", 
        width: "5", 
        depth: "5", 
        height: "5"
    }

    sizesApiHelper.createSize(token, sizeData).then((response) => {
        console.log(response);
        expect(response.status).to.eq(201);
      });
    });
  });
});
