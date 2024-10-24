export class EventsApiHelper {
  endpoint = 'partner/events'

  createDeliveryEvent(authToken, eventData) {
    const url = `${this.endpoint}`
    return cy.postRequest(url, eventData, authToken, 'application/json', false).as('createEvent')
  }

  completeDeliveryEvent(authToken, _code) {
    const url = `${this.endpoint}/delivery/complete?order_id=${_code}`
    return cy.patchRequest(url, {}, authToken, 'application/json').as('completeDelivery')
  }
}
