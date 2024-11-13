import { selectors } from '../../../../support/selectors.js';

export class NavigationMenu {
    constructor() {}

    navigateToReservations() {
        cy.contains('Events').click()
        cy.contains('Reservations').click()
    }

    navigateToLocations() {
        cy.contains('Places').click({ force: true })
        cy.get(selectors.navigationMenu.locationsMenuItem).click({ force: true })
       
    }

    navigateToTeamMembers(){
        cy.contains('People').click({ force: true })
        cy.contains('Team Members').click({ force: true })

    }

    navigateToInventory(){
        cy.contains('Products').click({ force: true })
        cy.contains('Inventory').click({ force: true })

    }
        
}
