import { selectors } from "../support/selectors"
import { texts } from "../support/texts"
import { env } from "../fixtures/environment.qa.json"
import 'cypress-file-upload';

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})


describe('Test Bulk Upload Inventory', () => {

  beforeEach(() => {
    cy.loginToApp();
  })
  
  it('Can Bulk Upload Inventory', () => {
    cy.get(selectors.mainPage.menuOptions).click()
    cy.get(selectors.mainPage.productsTab).click()
    cy.get(selectors.productsMenu.inventoryButton).click()
    cy.wait(13000)
    cy.get(selectors.productsMenu.addProductButton).click({force:true})
    cy.get(selectors.productsMenu.bulkUploadInventoryTab).contains('Bulk Upload').click({force:true})
    
    cy.fixture(selectors.productsMenu.csvFileToUpload)
    .then(fileContent => {
      cy.get('input[type="file"]')
        .attachFile({
          fileContent,
          fileName: (texts.products.filetName),
          mimeType: 'text/csv',
        });
    })
    cy.wait(2000)
    cy.get(selectors.productsMenu.submitButton).click({force:true})
    
    
    
    
    
   
      })
    

  })






