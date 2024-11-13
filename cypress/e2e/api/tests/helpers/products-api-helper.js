export class ProductsApiHelper {
    endpoint = 'partner/product-groups'
  
    createProductsGroup(authToken, productsGroupData) {
      const url = `${this.endpoint}`
      return cy.postRequest(url, productsGroupData, authToken, 'application/json', false).as('createProduct')
    }
  }
  