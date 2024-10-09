/// <reference types="Cypress" />

export class SizesApiHelper {
  endpoint = 'partner/sizes'
    createSize(authToken, sizeData) {
        return cy.postRequest(this.endpoint, sizeData, authToken).as('createSize');
      }

    getSizes(authToken){
        return cy.getRequest(this.endpoint, authToken).as('getSizes')
    }
  }
  