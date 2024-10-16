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
  // it cambiar nombres
  it('Add user', () => {

    cy.visit('https://qa-org.koloni.io/')
    cy.get('#\\:r1\\:').type('helpdesk@koloni.me')
    cy.get('#\\:r2\\:').type('c3kUt9d@upWBraT97n2jc')
    cy.get('.MuiButton-root').click()
    cy.get('.css-1dzfugc').click()
    cy.get('ul.MuiList-root > :nth-child(6)').click()
    cy.get(':nth-child(1) > .MuiTypography-inherit > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click({force:true})
    cy.wait(2000)    
    cy.get('.MuiButton-root').eq(`2`).click({force:true})
    cy.get('.MuiOutlinedInput-input').eq(`0`).type('Gabrieltestqa')
    cy.get('.MuiOutlinedInput-input').eq(`1`).type('50689691620') 
    cy.get('.MuiOutlinedInput-input').eq(`2`).type('gabriel@koloni.me')
    cy.get('.MuiOutlinedInput-input').eq(`3`).type('Sur, San José, Curridabat, Villas de Ayarco, 10111')
    cy.get('.MuiOutlinedInput-input').eq(`4`).type('7777')
    cy.get('.MuiOutlinedInput-input').eq(`5`).type('1234')
    cy.get('.MuiLoadingButton-root').click()
    cy.get('.MuiButton-root').eq('4').click()
    cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(1) > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.get('.css-1t62lt9 > :nth-child(2)').click()
    cy.get('.MuiBox-root > .MuiButton-containedPrimary').eq('0').click()
    cy.wait(1000)
    cy.get('.MuiButton-root').eq('4').click({ force: true }) 
  })
})





