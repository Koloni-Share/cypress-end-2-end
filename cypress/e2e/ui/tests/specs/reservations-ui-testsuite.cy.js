import { LocationsApiHelper } from '../../../api/tests/helpers/locations-api-helper';
import { SizesApiHelper } from '../../../api/tests/helpers/sizes-api-helper';
import { DevicesApiHelper } from '../../../api/tests/helpers/devices-api-helper';
import { EventsApiHelper } from '../../../api/tests/helpers/events-api-helper';
import { faker } from '@faker-js/faker';
import StatusCodeValidator from '../../../api/helpers/status-code-validator'
import { validateSchema } from '../../../api/helpers/schemaValidator'
import { ReservationsPage } from '../pages/reservations-page';
import post_deliveryParcelSchema from '../../../../fixtures/api/responseSchemas/events/post_deliveryParcel.json'
import patch_completeDeliveryEventSchema from '../../../../fixtures/api/responseSchemas/events/patch_completeDeliveryEvent.json'
import deviceData from '../../../../fixtures/api/requestBody/device/post-device-body.json'
import locationData from '../../../../fixtures/api/requestBody/location/post-location-body.json'
import sizeData from '../../../../fixtures/api/requestBody/size/post-size-body.json'
import { LoginPage } from '../pages/login-page';

const locationsApiHelper = new LocationsApiHelper()
const sizesApiHelper = new SizesApiHelper()
const devicesApiHelper = new DevicesApiHelper()
const eventsApiHelper = new EventsApiHelper()
const validator = new StatusCodeValidator()
const reservationPage = new ReservationsPage()
const loginPage = new LoginPage()

describe('Reservations Test Suite', () => {
    beforeEach(() => {
        cy.clearAllCookies()
        cy.clearLocalStorage()
        cy.visit(Cypress.env('baseUrl'))
        cy.loginByAPI(); 
    })

    it('should successfully create a new reservation, create a delivery and complete the event', () => {
        cy.get('@authToken').then((token) => {
          const SUFFIX_LENGTH = 4      

      sizeData.name = `Size-${faker.string.alphanumeric(SUFFIX_LENGTH).toUpperCase()}`
      locationData.name = `Location-${faker.string.alphanumeric(SUFFIX_LENGTH).toUpperCase()}`
      deviceData.name = `Device-${faker.string.alphanumeric(SUFFIX_LENGTH).toUpperCase()}`
      
            locationsApiHelper.createLocation(token, locationData).then((createlocationResponse)=>{
              const locationId = createlocationResponse.body.id
              const locationName = createlocationResponse.body.name
              sizesApiHelper.createSize(token, sizeData).then((createSizeResponse)=>{
                const sizeName = createSizeResponse.body.name
                const sizeId = createSizeResponse.body.id                                    
                deviceData.id_location = locationId
                deviceData.id_size = sizeId
              devicesApiHelper.createDevice(token, deviceData).then(()=>{               
                const reservationData = {
                  trackingNumber: `AUTO-${faker.string.alphanumeric(4).toUpperCase()}` 
                }

              
                loginPage.login(Cypress.env('username'), Cypress.env('password'))
                
                reservationPage.createNewRegistration({
                  trackingNumber: reservationData.trackingNumber,
                  locationName: locationName,
                  sizeName: sizeName
              });                
                //Assertions:
                cy.contains('h2', 'Success').should('be.visible')        
                cy.contains('p', 'Reservation created successfully!').should('be.visible')
                .then(()=>{

                  const eventData = {
                    "tracking_number":reservationData.trackingNumber,
                    "location_id": locationId
                  }
                  eventsApiHelper.createDeliveryEvent(token, eventData).then((createDeliveryEventResponse)=>{
                    validator.http200Validations(createDeliveryEventResponse)
                    const isValidSchema = validateSchema(post_deliveryParcelSchema, createDeliveryEventResponse.body)    
                    expect(isValidSchema,'Schema validation failed').to.be.true

                    const deliveryCode = createDeliveryEventResponse.body.code
                    
                      eventsApiHelper.completeDeliveryEvent(token, deliveryCode).then((completeDeliveryResponse)=>{
                       validator.http200Validations(completeDeliveryResponse)
                       const isValidSchema = validateSchema(patch_completeDeliveryEventSchema, completeDeliveryResponse.body)    
                       expect(isValidSchema,'Schema validation failed').to.be.true
                    })     
                  })
                }).then(()=>{
                  /*
                  TO-DO: DELETE created data to avoid creating too many instances in the database.
                  Currently getting an error when trying to delete a device (device still referenced by a reservation in the DB)
                  */
                  //devicesApiHelper.deleteDeviceById(token, deviceId)
                })  
                })             
              })
            })  
          });
    })
})
