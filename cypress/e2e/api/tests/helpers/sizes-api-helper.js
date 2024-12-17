/// <reference types="Cypress" />

export class SizesApiHelper {
  endpoint = 'partner/sizes'
    createSize(authToken, sizeData) {
        return cy.postRequest(this.endpoint, sizeData, authToken).as('createSize')
      }

    getSizes(authToken){
        return cy.getRequest(this.endpoint, authToken).as('getSizes')
    }

    getSizeByName(authToken, name){
        return cy.getRequest(this.endpoint + '?key=name&value=' + name, authToken).as('getSizebyName')
    }

    deleteSize(authToken, id){
      const body = [id]
      return cy.deleteRequest(this.endpoint, body, authToken).as('deleteSize')
    }
  }
  