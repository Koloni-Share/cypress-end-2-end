/// <reference types="Cypress" />

export class LocationsApiHelper {

  endpoint = 'partner/locations'
    createLocation(authToken, locationData) {
      return cy.postRequest(this.endpoint, locationData, authToken, 'multipart/form-data', true).as('createLocation')
    }

    getLocations(authToken){
      return cy.getRequest(this.endpoint, authToken).as('getLocation')
    }

    getLocationByName(authToken, name){
      return cy.getRequest(this.endpoint + "?key=name&value=" +name, authToken).as('getLocationResponse')
    }

    deleteLocationById(authToken, locationId){
      const body = 
        [locationId]      
      return cy.deleteRequest(this.endpoint, body, authToken).as('deleteResponse')
    }
  }
  