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
import { LoginPage } from '../pages/login-page';
import { sizeData, locationData, deviceData, reservationData } from '../../../../support/data.cy.js';
import { NavigationMenu } from '../pages/navigation-menu.js';
import { UsersApiHelper } from '../../../api/tests/helpers/users-api-helper.js';
import { userData } from '../../../../support/data.cy.js';


const usersApiHelper = new UsersApiHelper()
const locationsApiHelper = new LocationsApiHelper()
const sizesApiHelper = new SizesApiHelper()
const devicesApiHelper = new DevicesApiHelper()
const eventsApiHelper = new EventsApiHelper()
const validator = new StatusCodeValidator()
const reservationPage = new ReservationsPage()
const loginPage = new LoginPage()
const navigationMenu = new NavigationMenu()

const newUserData = { ...userData };

newUserData.name = faker.person.fullName();
newUserData.email = faker.internet.email();
newUserData.phone_number = faker.phone.number({ style: 'international' });
newUserData.user_id = faker.number.int({ min: 1, max: 3000 });
newUserData.pin_code = faker.number.int({ min: 1000, max: 9999 }).toString();


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

        sizeData.name = `My Size-${faker.string.alphanumeric(SUFFIX_LENGTH).toUpperCase()}`
        locationData.name = `My Location-${faker.string.alphanumeric(SUFFIX_LENGTH).toUpperCase()}`
        deviceData.name = `My Device-${faker.string.alphanumeric(SUFFIX_LENGTH).toUpperCase()}`

        usersApiHelper.createUser(token, [newUserData]).then((createUserResponse)=>{
          const userId = createUserResponse.body[0].id
          const userName = createUserResponse.body[0].name
          locationsApiHelper.createLocation(token, locationData).then((createlocationResponse)=>{
          const locationId = createlocationResponse.body.id
          const locationName = createlocationResponse.body.name
          sizesApiHelper.createSize(token, sizeData).then((createSizeResponse)=>{
            const sizeName = createSizeResponse.body.name
            const sizeId = createSizeResponse.body.id                                    
            deviceData.id_location = locationId
            deviceData.id_size = sizeId
            devicesApiHelper.createDevice(token, deviceData).then(()=>{               
              reservationData.trackingNumber = `AUTO-${faker.string.alphanumeric(4).toUpperCase()}` 
              loginPage.login(Cypress.env('username'), Cypress.env('password'))
              navigationMenu.navigateToReservations()
              cy.contains('Add Reservation').click()
              
              reservationPage.createNewRegistration({
                trackingNumber: reservationData.trackingNumber,
                locationName: locationName,
                sizeName: sizeName,
                userName: userName,
                phoneNumber: reservationData.contact_phone
            })

              //Assertions:
              cy.contains('h2', 'Success').should('be.visible')        
              cy.contains('p', 'Reservation created successfully!').should('be.visible')
              .then(()=>{

                const newEventData = {
                    "event_type": "delivery",
                    "id_user": userId,
                    "order_id": reservationData.trackingNumber,
                    "id_location": locationId                    
                }

                eventsApiHelper.createDeliveryEvent(token, newEventData).then((createDeliveryEventResponse)=>{
                  validator.http200Validations(createDeliveryEventResponse)
                  const isValidSchema = validateSchema(post_deliveryParcelSchema, createDeliveryEventResponse.body)
                  expect(isValidSchema,'Schema validation failed').to.be.true

                  const order_id = createDeliveryEventResponse.body.order_id
                  eventsApiHelper.completeDeliveryEvent(token, order_id).then((completeDeliveryResponse)=>{
                    validator.http200Validations(completeDeliveryResponse)
                    const isValidSchema = validateSchema(patch_completeDeliveryEventSchema, completeDeliveryResponse.body)    
                    expect(isValidSchema,'Schema validation failed').to.be.true
                  })     
                })
              }) 
            })             
          })
        })
      })
    })
  })
})
