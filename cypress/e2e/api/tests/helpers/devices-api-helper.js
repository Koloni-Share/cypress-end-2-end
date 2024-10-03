/// <reference types="Cypress" />

export class DevicesApiHelper {
    createDevice(authToken, DeviceData) {
      return cy.postRequest('partner/devices', DeviceData, authToken, 'application/json', true).as('createLocation');
    }

    //deleteDevice
  }
  