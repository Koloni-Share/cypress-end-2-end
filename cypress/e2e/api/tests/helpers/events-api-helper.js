export class EventsApiHelper {
  endpoint = 'partner/events/'

  createDeliveryEvent(authToken, eventData) {
    const { tracking_number, location_id } = eventData
    const url = `${this.endpoint}delivery-parcel?tracking_number=${tracking_number}&location_id=${location_id}`
    return cy.postRequest(url, {}, authToken, 'application/json', false).as('createEvent')
  }

  completeDeliveryEvent(authToken, _code) {
    const url = `${this.endpoint}delivery/complete?code=${_code}`
    return cy.patchRequest(url, {}, authToken, 'application/json').as('completeDelivery')
  }
}
