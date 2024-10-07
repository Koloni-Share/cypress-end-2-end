import { selectors } from "../support/selectors"

import ApiCalls from "../e2e/api/helpers/api-calls"

const apiCalls = new ApiCalls()
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
      user_pool_id: 'us-east-1_TzJHzebgk',
      client_id: '6k8s8t7kbhurg4trdak4rvmghi'
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


Cypress.Commands.add('getRequest', (endpoint) => {
  return apiCalls.get(endpoint)
})

Cypress.Commands.add('deleteRequest', (endpoint, body, authToken, contentType, form) => {
  const requestBody = {
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': contentType || 'application/json'
    },
    form: form, 
    body: body,
    failOnStatusCode: false
  };
  return apiCalls.delete(endpoint, requestBody);})

Cypress.Commands.add('putRequest', (endpoint, body) => {
  return apiCalls.put(endpoint, body)
})

Cypress.Commands.add('patchRequest', (endpoint, body, authToken, contentType) => {
  const requestBody = {
    body: body,
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': contentType || 'application/json'
    }
  };
  return apiCalls.patch(endpoint, requestBody);
});