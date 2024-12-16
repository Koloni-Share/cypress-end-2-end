import { selectors } from "../support/selectors"
import { texts } from "../support/texts"

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('navigateToUser', (email, password) => {
  cy.get(selectors.users.PeopleTab).click()
  cy.get(selectors.users.UsersTab).click()
  cy.get(selectors.users.addUserButton).contains('Add User');
})
//

// -- This is a command to log in --
Cypress.Commands.add('loginToApp', () => {
  cy.visit(texts.urls.main)
  cy.get(selectors.login.usernameTextbox).type(texts.login.username)
  cy.get(selectors.login.passwordTextbox).type(texts.login.password)
  cy.get(selectors.login.loginButton).click()
})
//

Cypress.Commands.add('addReservation', () => {
    cy.get(selectors.reservations.addNewReservationForm.userSelected, { timeout: 600000 }).eq(0).click({ force: true })
    cy.get(selectors.reservations.addNewReservationForm.calendarDate).eq(0).click({ force: true })
    cy.get(selectors.reservations.addNewReservationForm.timeSelection, { timeout: 500000 }).contains('20').click({ force: true })
    cy.get(selectors.reservations.addNewReservationForm.calendarDate).eq(1).click({ force: true })
    cy.get(selectors.reservations.addNewReservationForm.timeSelection, { timeout: 500000 }).contains('27').click({ force: true })
    cy.get(selectors.reservations.addNewReservationForm.locationField).eq(3).click({ force: true })
    cy.wait(500)
    cy.get(selectors.reservations.addNewReservationForm.locationSelected, { timeout: 600000 }).eq(0).click({ force: true })
    cy.get(selectors.reservations.addNewReservationForm.sizeField).click()
    cy.get(selectors.reservations.addNewReservationForm.sizeSelected).click()
    cy.get(selectors.reservations.addNewReservationForm.submitReservationButton).click()
    cy.get(selectors.reservations.addNewReservationForm.successPopUp).contains('Success')
    cy.get(selectors.reservations.addNewReservationForm.okSuccessButton).click()
    const currentLength = cy.get('.MuiTableRow-root').its('length');
    cy.deleteReservation()
    const afterEdit = cy.get('.MuiTableRow-root').its('length');
    expect(currentLength).to.not.equal(afterEdit);

})

Cypress.Commands.add('addRecurringPeriod', () => {

    cy.get(selectors.reservations.addNewReservationForm.userSelected, { timeout: 600000 }).eq(0).click({ force: true })
    cy.get(selectors.reservations.addNewReservationForm.calendarDate).eq(0).click({ force: true })
    cy.get(selectors.reservations.addNewReservationForm.timeSelection, { timeout: 500000 }).contains('20').click({ force: true })
    cy.get(selectors.reservations.addNewReservationForm.calendarDate).eq(1).click({ force: true })
    cy.get(selectors.reservations.addNewReservationForm.timeSelection, { timeout: 500000 }).contains('27').click({ force: true })
    cy.get(selectors.reservations.addNewReservationForm.locationField).eq(3).click({ force: true })
    cy.wait(500)
    cy.get(selectors.reservations.addNewReservationForm.locationSelected, { timeout: 600000 }).eq(0).click({ force: true })
    cy.get(selectors.reservations.addNewReservationForm.sizeField).click()
    cy.get(selectors.reservations.addNewReservationForm.sizeSelected).click()
    cy.get(selectors.reservations.addNewReservationForm.submitReservationButton).click()
    cy.get(selectors.reservations.addNewReservationForm.successPopUp).contains('Success')
    cy.get(selectors.reservations.addNewReservationForm.okSuccessButton).click()
    cy.deleteReservation()
    const currentLength = cy.get('.MuiTableRow-root').its('length');
    cy.deleteReservation()
    const afterEdit = cy.get('.MuiTableRow-root').its('length');
    expect(currentLength).to.not.equal(afterEdit);

})
Cypress.Commands.add('navigateToReservation', () => {
  cy.get(selectors.mainPage.menuOptions).click() // Crear el navigate to reservations  
  cy.get(selectors.mainPage.eventsTab).click()
  cy.get(selectors.mainPage.reservationsTab).click()  // fin navigate to reservation 
})

Cypress.Commands.add('navigateProducts', () => {
  cy.get(selectors.mainPage.menuOptions).click() // Crear el navigate to reservations  
  cy.get(selectors.mainPage.eventsTab).click()
  cy.get(selectors.mainPage.reservationsTab).click()  // fin navigate to reservation 
})

// -- This is a command to fill user in --
Cypress.Commands.add('fillUserForm', () => {
  cy.get(selectors.mainPage.menuOptions).click()
  cy.get(selectors.mainPage.peopleTab).click()
  cy.get(selectors.mainPage.usersTab).click({ force: true })
})
//

<<<<<<< Updated upstream
=======
// -- This is a command to delete reservation --
Cypress.Commands.add('deleteReservation', () => {
  cy.get(selectors.reservations.reservationCheckBox).click()
  cy.get(selectors.reservations.deleteButton).click()
  cy.get(selectors.reservations.yesDeletionButton).click()
  cy.get(selectors.reservations.deletionPopUp).contains('Success')
  cy.get(selectors.reservations.okDeletionButton).click()

})


//

>>>>>>> Stashed changes


// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('loginByAPI', () => {
  cy.request({
    method: 'POST',
    url: 'https://qa.api.koloni.io/v3/partner/login',
    form: true,
    body: {
      username: 'jose@koloni.me',
      password: '123Test!',
      user_pool_id: 'us-east-1_I01JXA4Ok',
      client_id: '2nt59ti9o33b3f23s60aan8brs'
    }
  }).then((response) => {
    expect(response.status).to.eq(200);
    const token = response.body;
    cy.wrap(token).as('authToken');
  });
});


/// <reference types="Cypress" />

Cypress.Commands.add('postRequest', (endpoint, body, authToken, contentType, form) => {
  const baseUrl = 'https://qa.api.koloni.io/v3/';
  return cy.request({
    method: 'POST',
    url: `${baseUrl}${endpoint}`,
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': contentType
    },
    form: form,
    body: body,
    failOnStatusCode: false
  });
});


Cypress.Commands.add('getRequest', (endpoint, authToken) => {
  const baseUrl = 'https://qa.api.koloni.io/v3/';
  return cy.request({
    method: 'GET',
    url: `${baseUrl}${endpoint}`,
    headers: {
      Authorization: `Bearer ${authToken}`
    },
    failOnStatusCode: false
  });
});


Cypress.Commands.add('deleteRequest', (endpoint, body, authToken, contentType, form) => {
  const baseUrl = 'https://qa.api.koloni.io/v3/';
  return cy.request({
    method: 'DELETE',
    url: `${baseUrl}${endpoint}`,
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': contentType || 'application/json'
    },
    form: form,
    body: body,
    failOnStatusCode: false
  });
});


Cypress.Commands.add('putRequest', (endpoint, body, authToken, contentType) => {
  const baseUrl = 'https://qa.api.koloni.io/v3/';
  return cy.request({
    method: 'PUT',
    url: `${baseUrl}${endpoint}`,
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': contentType || 'application/json'
    },
    body: body,
    failOnStatusCode: false
  });
});


Cypress.Commands.add('patchRequest', (endpoint, body, authToken, contentType) => {
  const baseUrl = 'https://qa.api.koloni.io/v3/';
  return cy.request({
    method: 'PATCH',
    url: `${baseUrl}${endpoint}`,
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': contentType || 'application/json'
    },
    body: body,
    failOnStatusCode: false
  });
});