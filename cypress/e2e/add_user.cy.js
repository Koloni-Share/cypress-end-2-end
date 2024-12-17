import { selectors } from "../support/selectors"
import { texts } from "../support/texts"
import { env } from "../fixtures/environment.qa.json"
import 'cypress-file-upload';

Cypress.on('uncaught:exception', (err, runnable) => {

  return false
})

describe('Test Add User', () => {

  // Here we login to the app
  beforeEach(() => {
    cy.loginToApp();
    cy.navigateToUser()
  })

  it('Can Add user', () => {
    cy.wait(2000)    
    cy.get(selectors.usersMenu.addUserButton).eq(`2`).click({force:true})
    cy.get(selectors.usersMenu.nameField).eq(`0`).type(texts.users.name)
    cy.get(selectors.usersMenu.phoneNumberField).eq(`2`).type(texts.users.phoneNumber) 
    cy.get(selectors.usersMenu.emailField).eq(`3`).type(texts.users.email)
    cy.get(selectors.usersMenu.addressField).eq(`4`).type(texts.users.address)
    cy.get(selectors.usersMenu.userIdField).eq(`5`).type(texts.users.userId)
    cy.get(selectors.usersMenu.pinCodeField).eq(`6`).type(texts.users.pinCode)
    cy.get(selectors.usersMenu.submitButton).click()
    cy.get(selectors.usersMenu.okSuccessButton).eq('4').click()
    cy.get(selectors.users.usersList).contains(texts.users.email)
    
  }),

  it('Can Delete a User', () => {
    cy.get(selectors.usersMenu.userCheckBox).click()
    cy.get(selectors.usersMenu.deleteButton).click()
    cy.get(selectors.usersMenu.confirmDeleteButton).eq('0').click()
    cy.wait(1000)
    cy.get(selectors.usersMenu.okDeletedButton).eq('4').click({ force: true })
    cy.get(selectors.users.usersList).contains(texts.users.email).should('not.exist')
  })
})