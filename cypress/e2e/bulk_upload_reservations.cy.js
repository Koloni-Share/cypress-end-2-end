
import { selectors } from "../support/selectors"
import { texts } from "../support/texts"
import { env } from "../fixtures/environment.qa.json"
import 'cypress-file-upload';

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})


describe('Test Bulk Upload', () => {
  
  it('Can Bulk Upload', () => {

    cy.visit('https://qa-org.koloni.io/')
    cy.get(selectors.login.usernameTextbox).type(texts.login.username)
    cy.get(selectors.login.passwordTextbox).type(texts.login.password)
    cy.get(selectors.login.loginButton).click()
    cy.get(selectors.mainPage.menuOptions).click()
    cy.get(selectors.mainPage.eventsTab).click()
    cy.get(selectors.mainPage.reservationsTab).click()
    cy.get(selectors.reservationsMenu.addReservationButton).click()
    cy.get(selectors.reservationsMenu.bulkUploadtab).eq(`1`).click({ force: true })
    cy.log(' test', cy.get('input[type="file"]'))
    cy.fixture('CSVBulkUpload.csv')
      .then(fileContent => {
        cy.get('input[type="file"]')
          .attachFile({
            fileContent,
            fileName: 'reservations_template.csv',
            mimeType: 'text/csv',
          });
      })
    cy.get(selectors.reservationsMenu.okErrorbutton).click()
  })
})





