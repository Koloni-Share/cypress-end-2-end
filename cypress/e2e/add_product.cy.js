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
    cy.get(selectors.mainPage.menuOptions).eq(1).click({force:true});
    cy.get(selectors.mainPage.productsTab).click(); 
    cy.intercept('GET','https://qa.api.koloni.io/v3/partner/products?page=1&size=50&search=').as('httpRequest')

    cy.get(selectors.productsMenu.inventoryButton).click();
   
    cy.wait("@httpRequest") 
    cy.wait(2000)
    cy.get(selectors.productsMenu.addProductButton,{ timeout: 50000 }).click({ force: true });
    cy.get(selectors.productsMenu.nameCase).type('Test')
    cy.get(selectors.productsMenu.submittedAddProductButton).click({ force: true })
    cy.wait(2000)
    
  });
    
  it('Can Delete added Product', () => {
    const currentLength = cy.get('.MuiTableRow-root').its('length');
    cy.get(selectors.mainPage.menuOptions).eq(1).click({force:true});
    cy.get(selectors.mainPage.productsTab).click();
    cy.get(selectors.productsMenu.inventoryButton).click();
    cy.wait(15000);
    cy.get(selectors.productsMenu.trashCanButton).eq(0).click({ force: true })
    cy.get(selectors.productsMenu.yesConfirmationButton).eq(2).click({ force: true })
    const afterEdit = cy.get('.MuiTableRow-root').its('length');
    expect(currentLength).to.not.equal(afterEdit);


   
  });
  
  it('Can add a product as part of a group', ()=>{
    cy.get(selectors.mainPage.menuOptions).eq(1).click({force:true});
    cy.get(selectors.mainPage.productsTab).click(); 
    cy.intercept('GET','https://qa.api.koloni.io/v3/partner/products?page=1&size=50&search=').as('httpRequest')

    cy.get(selectors.productsMenu.inventoryButton).click();
   
    cy.wait("@httpRequest") 
    cy.wait(2000)
    cy.get(selectors.productsMenu.addProductButton,{ timeout: 50000 }).click({ force: true });
    cy.get(selectors.productsMenu.nameCase).type('Test')
    cy.wait(2000)
    cy.get(selectors.productsMenu.addProductPrice).eq(3).type(texts.products.productPrice)
    cy.get(selectors.productsMenu.addProductPrice).eq(4).type(texts.products.productPrice)
    cy.get(selectors.productsMenu.addProductPrice).eq(5).type(texts.products.productPrice)
    cy.get(selectors.addProduct.groupDropdown).click()
    cy.wait(500)
    cy.get(selectors.addProduct.groupSelection, { timeout: 600000 }).eq(0).click({ force: true }).click() 
  });

  it('Can Delete added Product', () => {
    const currentLength = cy.get('.MuiTableRow-root').its('length');
    cy.get(selectors.mainPage.menuOptions).eq(1).click({force:true});
    cy.get(selectors.mainPage.productsTab).click();
    cy.get(selectors.productsMenu.inventoryButton).click();
    cy.wait(15000);
    cy.get(selectors.productsMenu.trashCanButton).eq(0).click({ force: true })
    cy.get(selectors.productsMenu.yesConfirmationButton).eq(2).click({ force: true })
    const afterEdit = cy.get('.MuiTableRow-root').its('length');
    expect(currentLength).to.not.equal(afterEdit);

   
  });

  

});

