/// <reference types="Cypress" />

export class EventsApiHelper {
    createDeliveryEvent(authToken, eventData) {
      const { tracking_number, location_id } = eventData;
      const url = `partner/events/delivery-parcel?tracking_number=${tracking_number}&location_id=${location_id}`;
  
      console.log("auth token en create delivery event >> " +authToken);
  
      return cy.postRequest(url, {}, authToken, 'application/json', false).as('createEvent');
    }

    completeDeliveryEvent(authToken, _code) {
      const url = `partner/events/delivery/complete?code=${_code}`;
  
      const requestBody = {
        code: _code
      };
  
      console.log("Auth token in complete delivery event >> " + authToken);
      console.log("Request body for complete delivery event >> ", requestBody);
  
      return cy.patchRequest(url, requestBody, authToken, 'application/json', false).as('completeDelivery');
    }
  }
  