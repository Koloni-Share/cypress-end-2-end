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

  it('Can Add Device', () => {
    cy.get(selectors.mainPage.menuOptions).eq(1).click({force:true});
    cy.get('.MuiList-padding > :nth-child(4) > :nth-child(3)').click()
    cy.get(':nth-child(2) > .MuiTypography-inherit > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get('[name="addDevice"]').click()
    cy.wait(3000)
    

    
  });



});

