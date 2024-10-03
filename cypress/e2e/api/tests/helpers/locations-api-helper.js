/// <reference types="Cypress" />

export class LocationsApiHelper {
    createLocation(authToken, locationData) {
      return cy.postRequest('partner/locations', locationData, authToken, 'multipart/form-data', true).as('createLocation');
    }
  }
  