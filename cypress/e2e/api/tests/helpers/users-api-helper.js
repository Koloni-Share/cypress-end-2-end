export class UsersApiHelper {
    endpoint = 'partner/users'
  
    createUser(authToken, userData) {
      const url = `${this.endpoint}`
      return cy.postRequest(url, userData, authToken, 'application/json', false).as('createUser')
    }
  }
  