import { selectors } from '../../../../support/selectors.js';

export class TeamMembersPage {
    constructor() {}

    createNewTeamMember({teamMemberEmail, teamMemberFirstName, teamMemberLastname, teamMemberPinCode, teamMemberRole}) {
        cy.contains("Add Team Member").click()
       
        cy.get(selectors.TeamMembers.addNewTeamMemberForm.emailInput).type(teamMemberEmail)
        cy.get(selectors.TeamMembers.addNewTeamMemberForm.firstNameInput).type(teamMemberFirstName)
        cy.get(selectors.TeamMembers.addNewTeamMemberForm.lastNameInput).type(teamMemberLastname)
        cy.get(selectors.TeamMembers.addNewTeamMemberForm.pinCode).type(teamMemberPinCode)
        cy.get(selectors.TeamMembers.addNewTeamMemberForm.roleDropdown).click()
        cy.get(`.MuiMenuItem-root[data-value="${teamMemberRole}"]`).click();
        cy.contains('Submit').click()
    }
}
