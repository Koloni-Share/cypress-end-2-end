import { selectors } from '../../../../support/selectors.js'

export class DevicesPage {
    constructor() {}

    createNewDevice(deviceName, sizeName, locationName) {
        cy.contains('Add Device').click()                
        
        cy.get('[placeholder="Name"]').type(deviceName)

        cy.get('[placeholder="0"]').type('53456')
        
        cy.get('[id="mui-component-select-mode"]').click()
        cy.contains('Storage').click()

        cy.get('[id="mui-component-select-id_size"]').click({force:true})       
        cy.contains(sizeName + ' (5" x 5" x 5")').click()
        
        cy.get('[id="mui-component-select-id_location"]').click()
        cy.contains(locationName).click()

        cy.get('[id="mui-component-select-hardware_type"]').click()
        cy.contains('Virtual Locker').click()

        cy.contains('Submit').click()
        

    }
}