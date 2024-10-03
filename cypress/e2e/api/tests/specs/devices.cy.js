import { DevicesApiHelper } from '../helpers/devices-api-helper';
import { LocationsApiHelper } from '../helpers/locations-api-helper';
import { SizesApiHelper } from '../helpers/sizes-api-helper';

const devicesApiHelper = new DevicesApiHelper()
const locationsApiHelper = new LocationsApiHelper()
const sizesApiHelper = new SizesApiHelper()

describe('Devices API Tests', () => {

  before(() => {
    cy.loginByAPI(); 
  });

  it.only('Should create a new device', function () {
   

      const sizeData = 
      {
        name: "S", 
        description: "Test", 
        width: "5", 
        depth: "5", 
        height: "5"
    }
    const deviceData = 
    {
      name: "My Device3", 
      locker_number: 2, 
      mode: "delivery", 
      id_size: "", 
      id_location: "",
      status: "available",
      hardware_type: "linka",
      price_required:false,
      mac_address: "AA:BB:CC:DD:EE:FF"
  }
  const locationData = 
  {
    name: 'New13',
    address: 'San José Province, San José, Costa Rica',
    hidden: false,
    latitude: 9.9280694,
    longitude: -84.0907246,
    contact_phone: '+18337081205',
    contact_email: 'support@koloni.me',
    shared: false,
    require_image: '' 
  };

    cy.get('@authToken').then((token) => {
      locationsApiHelper.createLocation(token, locationData).then((createlocationResponse)=>{
        const locationId = createlocationResponse.body.id
        console.log(createlocationResponse.body.id)
        sizesApiHelper.createSize(token, sizeData).then((createSizeResponse)=>{
            const sizeId = createSizeResponse.body.id
            console.log(createSizeResponse.body.id)
            deviceData.id_location = locationId
            deviceData.id_size = sizeId
            devicesApiHelper.createDevice(token, deviceData)
        })
      })  
    });
  });
});
