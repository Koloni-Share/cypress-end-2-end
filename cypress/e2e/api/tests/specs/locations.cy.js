import { LocationsApiHelper } from '../helpers/locations-api-helper';

const locationsApiHelper = new LocationsApiHelper()

describe('Locations API Tests', () => {

  before(() => {
    cy.loginByAPI(); 
  });

  it.only('Should create a new location', function () {
    cy.get('@authToken').then((token) => {
      const locationData = 
      {
        name: 'New2',
        address: 'San José Province, San José, Costa Rica',
        hidden: false,
        latitude: 9.9280694,
        longitude: -84.0907246,
        contact_phone: '+18337081205',
        contact_email: 'support@koloni.me',
        shared: false,
        require_image: '' 
      };

      locationsApiHelper.createLocation(token, locationData).then((response) => {
        expect(response.status).to.eq(201);
      });
    });
  });
});
