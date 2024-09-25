import { selectors } from "../support/selectors"
import {texts} from "../support/texts"
import {env} from "../fixtures/environment.qa.json"
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})


describe('Test Reservation', () => {
  // it 
  it('Add Reservation', () => {

    cy.visit('https://qa-org.koloni.io/')
    cy.get('#\\:r1\\:').type('helpdesk@koloni.me')
    cy.get('#\\:r2\\:').type('c3kUt9d@upWBraT97n2jc!')
    cy.get('.MuiButton-root').click()

    
   }) 
  }) 
//   it('Opens site menu', () => { 
  
//     cy.get(selectors.mainPage.menuOptions).click()
// //falta assertion
// //cy.get('.MuiToolbar-root').contains(texts.main.dashboardText)

//   }) 


