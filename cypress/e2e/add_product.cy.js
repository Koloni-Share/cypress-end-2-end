import { selectors } from "../support/selectors"
import { texts } from "../support/texts"
import { env } from "../fixtures/environment.qa.json"
import 'cypress-file-upload';

Cypress.on('uncaught:exception', (err, runnable) => {

  return false
})

describe('Test Add Product', () => {

  beforeEach(() => {
    cy.loginToApp();
  })

  it('Can Add Product', () => {
    cy.get(selectors.mainPage.menuOptions).click();
    cy.get(selectors.mainPage.productsTab).click();
    cy.get(selectors.productsMenu.inventoryButton).click();
    cy.wait(15000);
    cy.get(selectors.productsMenu.addProductButton, { timeout: 50000 }).click({ force: true });
cy.get(selectors.productsMenu.nameCase).type('Test')
    cy.get(selectors.productsMenu.submittedAddProductButton).click({ force: true })
    cy.wait(4000);
    cy.get(selectors.productsMenu.productAddedSuccessfullyButton).contains('Product created')
  });

  it('Can Delete added Product', () => {
    cy.get(selectors.mainPage.menuOptions).click();
    cy.get(selectors.mainPage.productsTab).click();
    cy.get(selectors.productsMenu.inventoryButton).click();
    cy.wait(15000);

    cy.get(selectors.productsMenu.trashCanButton).eq(0).click({ force: true })
    cy.get(selectors.productsMenu.yesConfirmationButton).eq(2).click({ force: true })

    cy.wait(4000);
    cy.get('.MuiDialog-container').contains('Product deleted successfully')
  });

  it.only('Can add a product as part of a group', ()=>{
    cy.get(selectors.mainPage.menuOptions).click();
    cy.get(selectors.mainPage.productsTab).click();
    cy.get(selectors.productsMenu.inventoryButton).click();
  })

});

