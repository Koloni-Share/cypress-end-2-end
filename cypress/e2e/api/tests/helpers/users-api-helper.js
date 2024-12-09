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

    getUserByID(authToken, id){
      const url = `${this.users_endpoint}?search=${id}&page=1&size=50&by_email=false&by_user_id=true&all_pages=false&exact_match=false`;

      return cy.getRequest(url, authToken).as('getResponse')
    }

    deleteUserById(authToken, userId) {
      const body = [userId]      
      return cy.deleteRequest(this.users_endpoint, body, authToken).as('deleteResponse')
    }
    
    
  }
  