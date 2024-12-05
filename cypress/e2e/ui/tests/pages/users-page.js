import { selectors } from '../../../../support/selectors.js';

export class UsersPage {
    constructor() {}

    createNewUserInAGroup({groupName, name, lastName, phone, address, id, pin}) {
        cy.contains("Add User").click()
            
        cy.get(selectors.addUserForm.name).type(name)
        cy.get(selectors.addUserForm.lastName).type(lastName)
        cy.get(selectors.addUserForm.phoneNumber).type(phone)
        cy.get(selectors.addUserForm.address).type(address)
        cy.get(selectors.addUserForm.userId).type(id)
        cy.get(selectors.addUserForm.pinCode).type(pin)
        cy.get(selectors.addUserForm.group).type(groupName).type('{enter}')
        //cy.contains('Submit').click()
        
    }
}
