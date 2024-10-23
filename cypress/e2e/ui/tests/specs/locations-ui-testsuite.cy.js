import { LocationsPage } from "../pages/locations-page";
import { LoginPage } from "../pages/login-page";
import { NavigationMenu } from "../pages/navigation-menu";
import { locationData } from '../../../../support/data.cy.js';
import { faker } from '@faker-js/faker';



const locationPage = new LocationsPage()
const loginPage = new LoginPage()
const navigationMenu = new NavigationMenu()
describe('Reservations Test Suite', () => {
    beforeEach(() => {
        cy.clearAllCookies()
        cy.clearLocalStorage()
        cy.visit(Cypress.env('baseUrl'))
        cy.loginByAPI() 
    });

    it('should successfully create a new location', () => {
        const SUFFIX_LENGTH = 4      
        locationData.name = `Location-${faker.string.alphanumeric(SUFFIX_LENGTH).toUpperCase()}`

        loginPage.login(Cypress.env('username'), Cypress.env('password'))
        navigationMenu.navigateToLocations()
        locationPage.createNewLocation({
            locationName: locationData.name,
            locationAddress: locationData.address,
            locationEmail: locationData.contact_email,
            locationPhone: locationData.contact_phone
        })

        //Assertions:
        cy.contains('h2', 'Success').should('be.visible')        
        cy.contains('p', 'Location created successfully. You can assign devices to this location on Devices tab.').should('be.visible')
    })

})
