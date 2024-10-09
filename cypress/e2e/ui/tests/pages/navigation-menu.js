import { selectors } from '../../../../support/selectors.js';

export class NavigationMenu {
    constructor() {}

    navigateToReservations() {
        cy.contains('Events').click()
        cy.contains('Reservations').click()
    }

    navigateToLocations() {
        cy.contains('Places').click({ force: true })
        cy.get(':nth-child(1) > .MuiTypography-inherit > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click({ force: true })
       
    }
}
