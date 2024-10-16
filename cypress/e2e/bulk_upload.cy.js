import { selectors } from "../support/selectors"
import { texts } from "../support/texts"
import { env } from "../fixtures/environment.qa.json"
import 'cypress-file-upload';

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})


describe('Test Add Price', () => {
  // it 
  it('Add Princing', () => {

    cy.visit('https://qa-org.koloni.io/')
    cy.get('#\\:r1\\:').type('helpdesk@koloni.me')
    cy.get('#\\:r2\\:').type('c3kUt9d@upWBraT97n2jc')
    cy.get('.MuiButton-root').click()
    cy.get('.css-1dzfugc').click()
    cy.get('.MuiList-padding > :nth-child(7) > :nth-child(3)').click()
    cy.get(':nth-child(2) > .MuiTypography-inherit > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get('.MuiGrid-root > :nth-child(1)').click()
    cy.get('.MuiTab-root').eq(`1`).click({ force: true })
    cy.log(' test', cy.get('input[type="file"]'))
    cy.fixture('KoloniCSVtemplate.csv')
      .then(fileContent => {
        cy.get('input[type="file"]')
          .attachFile({
            fileContent,
            fileName: 'reservations_template.csv',
            mimeType: 'text/csv',
          });
      })
    cy.get('.MuiLoadingButton-root').click()
  })
})





