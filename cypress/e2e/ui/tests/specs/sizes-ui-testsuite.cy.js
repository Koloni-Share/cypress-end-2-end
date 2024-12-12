import { LoginPage } from "../pages/login-page.js";
import { SizesPage } from '../pages/sizes-page.js';
import { NavigationMenu } from "../pages/navigation-menu.js";
import { sizeData} from '../../../../support/data.cy.js';
import { faker } from '@faker-js/faker';
import { SizesApiHelper } from "../../../api/tests/helpers/sizes-api-helper.js";

const loginPage = new LoginPage()
const navigationMenu = new NavigationMenu()
const sizesPage = new SizesPage()
const sizesApiHelper = new SizesApiHelper()

describe('Sizes Test Suite', () => {
    beforeEach(() => {
        cy.clearAllCookies()
        cy.clearLocalStorage()
        cy.visit(Cypress.env('baseUrl'))
        cy.loginByAPI()
    })

    it('should successfully create a new size', () => {
        const SUFFIX_LENGTH = 4      
        sizeData.name = `Size-${faker.string.alphanumeric(SUFFIX_LENGTH).toUpperCase()}`

        loginPage.login(Cypress.env('username'), Cypress.env('password'))
        navigationMenu.navigateToSizes()
                
        sizesPage.createNewSize({
            sizeName: sizeData.name,
            sizeDescription: sizeData.description,
            sizeWidth: sizeData.width,
            sizeDepth: sizeData.depth,
            sizeHeight: sizeData.height
        })

        //Assertions:
        cy.contains('h2', 'Success').should('be.visible')        
        cy.contains('p', 'Size created successfully!').should('be.visible').then(()=>{
            cy.get('@authToken').then((token) => {
                sizesApiHelper.getSizeByName(token, sizeData.name).then((getSizeByNameResponse)=>{                    
                    const sizeId = getSizeByNameResponse.body.id
                    sizesApiHelper.deleteSize(token,sizeId)
                })
            })
            
            

          })


    })
    
})
