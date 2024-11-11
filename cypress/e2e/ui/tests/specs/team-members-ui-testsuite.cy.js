import { LoginPage } from "../pages/login-page.js"
import { NavigationMenu } from "../pages/navigation-menu.js"
import { faker } from '@faker-js/faker'
import { TeamMembersPage } from "../pages/team-members-page.js"

const teamMembersPage = new TeamMembersPage()
const loginPage = new LoginPage()
const navigationMenu = new NavigationMenu()

describe('Team Members Test Suite', () => {
    beforeEach(() => {
        cy.clearAllCookies()
        cy.clearLocalStorage()
        cy.visit(Cypress.env('baseUrl'))
        cy.loginByAPI()
    })

    const roles = ['admin', 'viewer', 'member']

    roles.forEach((role) => {
        it(`should successfully create a new team member with role ${role}`, () => {
            loginPage.login(Cypress.env('username'), Cypress.env('password'))
            navigationMenu.navigateToTeamMembers()

            teamMembersPage.createNewTeamMember({
                teamMemberEmail: faker.internet.email(),
                teamMemberFirstName: faker.person.firstName(),
                teamMemberLastname: faker.person.lastName(),
                teamMemberPinCode: faker.string.numeric(6),
                teamMemberRole: role
            })

            // Assertions:
            cy.contains('h2', 'Success').should('be.visible')
            cy.contains('p', 'New member created successfully!').should('be.visible')
        })
    })
})
