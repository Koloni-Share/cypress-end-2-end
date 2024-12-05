export class UsersApiHelper {
    users_endpoint = 'partner/users'
    groups_endpoint = 'partner/groups'

    createUser(authToken, userData) {
      const url = `${this.users_endpoint}`
      return cy.postRequest(url, userData, authToken, 'application/json', false).as('createUser')
    }
    createGroup(authToken, groupData) {
      const { name, ...restData } = groupData
      const url = `${this.groups_endpoint}?name=${encodeURIComponent(name)}`    
      
      return cy.postRequest(url, restData, authToken, 'application/json', false).as('createGroup')
    }
    
  }
  