import { selectors } from "../support/selectors"
import {texts} from "../support/texts"
import {env} from "../fixtures/environment.qa.json"

describe('Koloni Smoke test', () => {
  beforeEach(()=>{
    cy.visit('https://gabrielgarden.koloni.io/auth/login')
    cy.get(selectors.login.usernameTextbox).type('gabriel@koloni.me')
    cy.get(selectors.login.passwordTextbox).type('Blockchained2024!')
    cy.get(selectors.login.loginButton).click()
  })
  // it('Logs in to app', () => { 
   
  //   cy.get(selectors.mainPage.mainHeader).contains(texts.main.dashboardText)
  // }) 
  it('Create user', () => { 
    cy.get(selectors.users.SignInButton).click()
    cy.navigateToUser();
    cy.get(selectors.users.addUserButton).click()
    cy.get(selectors.users.name).type(texts.users.name)
    cy.get(selectors.users.phoneNumber).type(texts.users.phoneNumber)
    cy.get(selectors.users.email).type('gabriel+1@koloni.me')
    cy.get(selectors.users.Address).type('Test Location')
    cy.get(selectors.users.User).type(1234)
    cy.get(selectors.users.PIN).type(8764)
    cy.get(selectors.users.Submit).click()
    cy.get(selectors.users.tilte).contains('Success')
    cy.get(selectors.users.message).contains('User created correctly')
    cy.get(selectors.users.SubmitButton).click()

    cy.get('.MuiBox-root > .MuiButton-root > :nth-child(2)').click()
    cy.get('.MuiTableRow-root > :nth-child(9) > .MuiBox-root > :nth-child(2)').click()
    cy.get('.MuiBox-root > .MuiButton-containedPrimary').click()
    cy.get('.MuiBox-root > .MuiButton-root').click()
    cy.get(':nth-child(1) > .MuiTypography-inherit > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()

  }) 

//   it('Opens site menu', () => { 
  
//     cy.get(selectors.mainPage.menuOptions).click()
// //falta assertion
// //cy.get('.MuiToolbar-root').contains(texts.main.dashboardText)

//   }) 
})

