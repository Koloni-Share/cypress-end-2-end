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
}
