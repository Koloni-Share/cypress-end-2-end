import { LocationsApiHelper } from '../helpers/locations-api-helper';
import { locationData } from '../../support/data.cy.js';

const locationsApiHelper = new LocationsApiHelper()

describe('Locations API Tests', () => {

  before(() => {
    cy.loginByAPI()
  });

  it('Should create a new location', function () {
    cy.get('@authToken').then((token) => {
      locationsApiHelper.createLocation(token, locationData).then((response) => {
        expect(response.status).to.eq(201)
      });
    });
  });
});
