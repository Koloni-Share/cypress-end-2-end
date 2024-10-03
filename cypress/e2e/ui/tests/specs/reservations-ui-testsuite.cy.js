import { LocationsApiHelper } from '../../../api/tests/helpers/locations-api-helper';
import { SizesApiHelper } from '../../../api/tests/helpers/sizes-api-helper';
import { DevicesApiHelper } from '../../../api/tests/helpers/devices-api-helper';
import { EventsApiHelper } from '../../../api/tests/helpers/events-api-helper';

const locationsApiHelper = new LocationsApiHelper()
const sizesApiHelper = new SizesApiHelper()
const devicesApiHelper = new DevicesApiHelper()
const eventsApiHelper = new EventsApiHelper()

describe('Reservations Test Suite', () => {
    beforeEach(() => {
        cy.clearAllCookies()
        cy.clearLocalStorage()
        cy.visit("https://joseorg.koloni.io")
        cy.loginByAPI(); 
    })


    it('should create a new reservation', () => {


        cy.get('@authToken').then((token) => {

            const sizeData = 
            {
              name: "XL", 
              description: "Test", 
              width: "5", 
              depth: "5", 
              height: "5"
          }        
        const locationData = 
        {
          name: 'New19',
          address: 'San José Province, San José, Costa Rica',
          hidden: false,
          latitude: 9.9280694,
          longitude: -84.0907246,
          contact_phone: '+18337081205',
          contact_email: 'support@koloni.me',
          shared: false,
          require_image: '' 
        };
        const deviceData = 
        {
          name: "My Device4", 
          locker_number: 2, 
          mode: "delivery", 
          id_size: "", 
          id_location: "",
          status: "available",
          hardware_type: "linka",
          price_required:false,
          mac_address: "AA:BB:CC:DD:EE:FF"
      }
      
            locationsApiHelper.createLocation(token, locationData).then((createlocationResponse)=>{
              const locationId = createlocationResponse.body.id
              const locationName = createlocationResponse.body.name
              sizesApiHelper.createSize(token, sizeData).then((createSizeResponse)=>{
                const sizeName = createSizeResponse.body.name
              devicesApiHelper.createDevice(token, deviceData).then(()=>{
                const sizeId = createSizeResponse.body.id                                    
                deviceData.id_location = locationId
                deviceData.id_size = sizeId

                /*
                Delete this and use Faker library
                */
              function generateRandomString(length) {
                const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
                let result = '';
                for (let i = 0; i < length; i++) {
                  result += characters.charAt(Math.floor(Math.random() * characters.length));
                }
                return result;
              }

              /* */

              const registrationData = {
                trackingNumber: `AUTO-${generateRandomString(5)}`
              };

                    
                cy.get('#\\:r1\\:').type('helpdesk@koloni.me')
                cy.get('#\\:r2\\:').type('c3kUt9d@upWBraT97n2jc')
                cy.get('.MuiButton-root').click()
                cy.get(".css-1dzfugc").click()
                cy.contains('Events').click()
                cy.contains('Reservations').click()
                cy.contains('Add Reservation').click()

                //Form
                //Mode:
                cy.get("[id='mui-component-select-mode']").click()
                cy.get('[data-value="delivery"]').click({ force: true })
                
                //Tracking number:
                cy.get('input[placeholder="Enter tracking number here"]').type(registrationData.trackingNumber, {force:true})

                //Location:
                cy.get('input[placeholder="Select a location"]').click()               
                cy.contains('li', "Jose Home").click({force:true})

                //Username:
                cy.get('input[placeholder="Enter user name here"]').type('JM', {force:true})
                
                //Phone number:
                cy.get('input[placeholder="Enter phone number here"]').type('50683530547', {force:true})

                //Size:
                cy.get('#mui-component-select-id_size').click({force:true})
                cy.contains('Small (2" x 2" x 2") - 1 door available').click({force:true})

                //Submit button:
                cy.contains('Submit').click({force:true})        
                
                //Assertions:
                cy.contains('h2', 'Success').should('be.visible')        
                cy.contains('p', 'Reservation created successfully!').should('be.visible')
                .then(()=>{

                  const eventData = {
                    "tracking_number":registrationData.trackingNumber,
                    "location_id": "4d499a33-1454-4c69-8552-1dd75cbc534c"
                  }
                  eventsApiHelper.createDeliveryEvent(token, eventData).then((createDeliveryEventResponse)=>{
                    console.log(createDeliveryEventResponse.body.code)
                    const deliveryCode = createDeliveryEventResponse.body.code
                    
                      eventsApiHelper.completeDeliveryEvent(token, deliveryCode).then((completeDeliveryResponse)=>{
                        console.log(completeDeliveryResponse)        
                    })                                            

                      
                  })
                })  
                })             
              })
            })  
          });
    })
})
