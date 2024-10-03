/// <reference types="Cypress" />

export class SizesApiHelper {
    createSize(authToken, sizeData) {
        return cy.postRequest('partner/sizes', sizeData, authToken, 'application/json', false).as('createSize');
      }

    getSizes(authToken){
        return cy.getRequest('partner/sizes', authToken,'application/json').as('getSizes')
    }
  }
  