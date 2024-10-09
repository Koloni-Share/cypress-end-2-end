import { selectors } from '../../../../support/selectors.js';

export class LocationsPage {
    constructor() {}

    createNewLocation({locationName, locationAddress, locationEmail, locationPhone}) {
        cy.get(selectors.locations.addLocationButton).click()

        cy.get(selectors.locations.addnewLocationform.nameInput).type(locationName)
        cy.get(selectors.locations.addnewLocationform.addressInput).type(locationAddress).type('{enter}')
        cy.get(selectors.locations.addnewLocationform.CustomerSupportAddNewRadioButon).click()
        cy.get(selectors.locations.addnewLocationform.emailInput).type(locationEmail);
        cy.get(selectors.locations.addnewLocationform.phoneNumberInput).type(locationPhone);
        cy.contains('Submit').click()
    }
}
