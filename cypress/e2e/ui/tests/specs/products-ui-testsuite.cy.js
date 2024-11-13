import { ProductsPage } from "../pages/products-page.js"
import { LoginPage } from "../pages/login-page"
import { NavigationMenu } from "../pages/navigation-menu"
import { ProductsApiHelper } from "../../../api/tests/helpers/products-api-helper.js"
import { faker } from '@faker-js/faker'

const productsApiHelper = new ProductsApiHelper()
const productsPage = new ProductsPage()
const loginPage = new LoginPage()
const navigationMenu = new NavigationMenu()

describe('Products Test Suite', () => {
    beforeEach(() => {
        cy.clearAllCookies()
        cy.clearLocalStorage()
        cy.visit(Cypress.env('baseUrl'))
        cy.loginByAPI()
    })

    it('should successfully create a new product in a products group', () => {
        cy.get('@authToken').then((token) => {
          
            const productGroupName = `Prod Group-${faker.number.int({ min: 1000, max: 9999 })}`
            const productName = `Prod-${faker.number.int({ min: 1000, max: 9999 })}`

            loginPage.login(Cypress.env('username'), Cypress.env('password'))
            navigationMenu.navigateToInventory()

            const productGroupData = {
                "auto_repair": false,
                "name": productGroupName,
                "total_inventory": 0,
                "charging_time": 0,
                "id_size": null,
                "one_to_one": true,
                "products": []
            }

            productsApiHelper.createProductsGroup(token, productGroupData).then((groupDataInfo) => {
                productsPage.createNewProductInGroup({ productName, productGroupData })
            })

            // Assertions
            cy.contains('h2', 'Success').should('be.visible')        
            cy.contains('p', 'Product created successfully!').should('be.visible')
        })
    })
})