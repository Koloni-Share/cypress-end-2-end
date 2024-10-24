import { UsersApiHelper } from "../helpers/users-api-helper.js";
import { userData } from '../../../../support/data.cy.js';
import { faker } from "@faker-js/faker";

const usersApiHelper = new UsersApiHelper()

const newUserData = { ...userData };

newUserData.name = faker.person.fullName();
newUserData.email = faker.internet.email();
newUserData.phone_number = faker.phone.number({ style: 'international' });
newUserData.user_id = faker.number.int({ min: 1, max: 3000 });
newUserData.pin_code = faker.number.int({ min: 1000, max: 9999 }).toString();

describe('Users API Tests', () => {

  before(() => {
    cy.loginByAPI()
  })

  it('Should create a new user', function () {
    cy.get('@authToken').then((token) => {
      usersApiHelper.createUser(token, [newUserData]).then((response) => {
        expect(response.status).to.eq(200);
      })
    })
  })
})