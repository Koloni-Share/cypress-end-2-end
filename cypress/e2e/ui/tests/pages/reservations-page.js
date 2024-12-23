import { selectors } from '../../../../support/selectors.js'

export class ReservationsPage {
    constructor() {}

    createNewRegistration({ trackingNumber, locationName, sizeName, userName, phoneNumber }) {
        // Form
        // Mode:
        cy.get(selectors.reservations.addNewReservationForm.modeDropdown).click()
        cy.get(selectors.reservations.addNewReservationForm.deliveryOption).click({ force: true })

        // Tracking number:
        cy.get(selectors.reservations.addNewReservationForm.trackingNumberInput).type(trackingNumber, { force: true })

        // Location:
        //cy.get(selectors.reservations.addNewReservationForm.locationDropdown).click()            
        cy.get(selectors.reservations.addNewReservationForm.locationDropdown).type(locationName)         
        cy.contains('li', locationName).click({ force: true })

        // Username:
        cy.get(selectors.reservations.addNewReservationForm.usernameInput).type(userName, { force: true })

        // Phone number:
        cy.get(selectors.reservations.addNewReservationForm.phoneNumberInput).type(phoneNumber, { force: true })

        // Size:
        const sizeValue = `${sizeName} (5" x 5" x 5") - 1 door available`    
        cy.get(selectors.reservations.addNewReservationForm.sizeDropdown).type(sizeValue)
        cy.contains(sizeValue).click({ force: true })

        // Submit button:
        cy.contains(selectors.reservations.addNewReservationForm.submitButton).click({ force: true })
    }
}
