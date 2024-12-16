import { selectors } from '../support/selectors';
import { texts } from '../support/texts';
import { env } from '../fixtures/environment.qa.json';
import 'cypress-file-upload';

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
}); 
describe('Test Bulk Upload Inventory', () => {
  beforeEach(() => {
    cy.loginToApp();
  });

  it('Can Bulk Upload Inventory', () => {
    cy.get(selectors.mainPage.menuOptions).eq(1).click({force:true});
    cy.get(selectors.mainPage.productsTab).click();
    cy.get(selectors.productsMenu.inventoryButton).click();
    cy.wait(15000);
    cy.get(selectors.productsMenu.addProductButton).click({ force: true });
    cy.get('.MuiTab-textColorPrimary').contains('Bulk Upload').click()
    
    cy.fixture(texts.csvFiles.csvProducts)
      .then((fileContent) => {
        cy.get('input[type="file"]')
        .attachFile({
          fileContent,
          fileName: texts.csvFiles.csvProducts,
          mimeType: 'text/csv',
        
      });
    cy.wait(1000);
    cy.get(selectors.productsMenu.submitButton).click({ force: true });
    cy.wait(10000)
    cy.get(selectors.productsMenu.successPopUp).contains('Success')
    cy.get(selectors.productsMenu.okSuccessButton).click()
    cy.wait(10000)

  });
});

    it('Can Delete a BulkUploadInventory', () => {
    cy.wait(10000)
    cy.get(selectors.mainPage.menuOptions).eq(1).click({force:true});
    cy.get(selectors.mainPage.productsTab).click();
    cy.get(selectors.productsMenu.inventoryButton).click();
    cy.wait(3000)
    cy.get(selectors.productsMenu.productRaw).contains('1331')
    cy.wait(2000)
    cy.get(selectors.productsMenu.productCheckBox).eq('1').click() 
 cy.get(selectors.productsMenu.deleteProductButton).click()
    cy.get(selectors.productsMenu.deleteConfirmationButton).click()
    cy.get(selectors.productsMenu.successDeletionOkButton).contains('Ok').click()


  });
});



