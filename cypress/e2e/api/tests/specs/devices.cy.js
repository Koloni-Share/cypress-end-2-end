import { DevicesApiHelper } from '../helpers/devices-api-helper';
import { LocationsApiHelper } from '../helpers/locations-api-helper';
import { SizesApiHelper } from '../helpers/sizes-api-helper';
import { sizeData, locationData } from '../../../../support/data.cy.js';

const devicesApiHelper = new DevicesApiHelper()
const locationsApiHelper = new LocationsApiHelper()
const sizesApiHelper = new SizesApiHelper()

describe('Devices API Tests', () => {

  before(() => {
    cy.loginByAPI() 
  })

  it('Should create a new device', function () {
    cy.get('@authToken').then((token) => {
      locationsApiHelper.createLocation(token, locationData).then((createlocationResponse)=>{
        const locationId = createlocationResponse.body.id
        sizesApiHelper.createSize(token, sizeData).then((createSizeResponse)=>{
            const sizeId = createSizeResponse.body.id
            deviceData.id_location = locationId
            deviceData.id_size = sizeId
            devicesApiHelper.createDevice(token, deviceData)
        })
      })  
    })
  })
})
