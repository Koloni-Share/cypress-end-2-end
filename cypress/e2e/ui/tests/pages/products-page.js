import { selectors } from '../../../../support/selectors.js'

export class ProductsPage {
    constructor() {}

    createNewProductInGroup({ productName, productGroupData }) {
        cy.contains('Add Product').click()                
        cy.get('[placeholder="Product Name"]').type(productName)
        cy.contains('label', 'Select a group...').parent().find('input').type(productGroupData.name).type('{enter}')
    }
}