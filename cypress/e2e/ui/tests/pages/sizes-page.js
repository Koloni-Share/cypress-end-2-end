import { selectors } from '../../../../support/selectors.js'

export class SizesPage {
    constructor() {}

    createNewSize({ sizeName, sizeDescription, sizeWidth, sizeDepth, sizeHeight }) {
        cy.contains('Add Size').click()                
        cy.get('[placeholder="Name"]').type(sizeName)
        cy.get('[placeholder="Description"]').type(sizeDescription)
        cy.get('[placeholder="Width"]').type(sizeWidth)
        cy.get('[placeholder="Depth"]').type(sizeDepth)
        cy.get('[placeholder="Height"]').type(sizeHeight)
        cy.contains('Submit').click()
    }
}