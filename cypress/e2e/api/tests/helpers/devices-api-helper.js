/// <reference types="Cypress" />

export class DevicesApiHelper {
    createDevice(authToken, DeviceData) {
      return cy.postRequest('partner/devices', DeviceData, authToken, 'application/json', true).as('createLocation');
    }

    //deleteDevice

    deleteDeviceById(authToken, deviceId){
      const body = {
        deviceId
      }
      return cy.deleteRequest(`partner/devices`, authToken).as('deleteResponse')
    }
  }
  