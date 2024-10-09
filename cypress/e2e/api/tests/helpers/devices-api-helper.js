/// <reference types="Cypress" />

export class DevicesApiHelper {
  endpoint = 'partner/devices';

    createDevice(authToken, DeviceData) {
      return cy.postRequest(this.endpoint, DeviceData, authToken, 'application/json', true).as('createLocation');
    }

    deleteDeviceById(authToken, deviceId){
      const body = {
        deviceId
      }
      return cy.deleteRequest(this.endpoint, authToken).as('deleteResponse')
    }
  }
  