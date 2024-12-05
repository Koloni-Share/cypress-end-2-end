import { LoginPage } from "../pages/login-page.js"
import { NavigationMenu } from "../pages/navigation-menu.js"
import { faker } from '@faker-js/faker'
import { UsersPage } from "../pages/users-page.js"
import { UsersApiHelper } from "../../../api/tests/helpers/users-api-helper.js"

const usersPage = new UsersPage()
const loginPage = new LoginPage()
const usersApiHelper = new UsersApiHelper()
const navigationMenu = new NavigationMenu()

describe('Users Test Suite', () => {
    beforeEach(() => {
        cy.clearAllCookies()
        cy.clearLocalStorage()
        cy.visit(Cypress.env('baseUrl'))
        cy.loginByAPI()
    })

        it(`should successfully create a new user and add it to a group`, () => {
            cy.loginByAPI()

            const groupData = {
                "name": `Group_${faker.string.numeric(4)}`,                             
            };
            

            cy.get('@authToken').then((token) => {
                usersApiHelper.createGroup(token, groupData)
            })

            loginPage.login(Cypress.env('username'), Cypress.env('password'))
            navigationMenu.navigateToUsers()

            usersPage.createNewUserInAGroup({
                groupName: groupData.name,
                name: faker.person.firstName(),
                lastName: faker.person.lastName(),
                phone: faker.phone.number({ style: 'international' }), 
                address: "Test Address",
                id: faker.number.int({ min: 1000, max: 9999 }),
                pin: faker.number.int({ min: 1000, max: 9999 })
            });
            
            
            // Assertions:
            cy.contains('h2', 'Success').should('be.visible')
            cy.contains('p', 'User created correctly').should('be.visible')

        })
})
