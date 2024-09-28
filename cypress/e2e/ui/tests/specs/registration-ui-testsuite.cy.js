describe('Registration Test Suite', () => {
    beforeEach(() => {
        cy.clearAllCookies()
        cy.clearLocalStorage()
        cy.visit("https://dev-org.koloni.io/")
    })


    it('should create a new registration', () => {
        
        cy.get('#\\:r1\\:').type('helpdesk@koloni.me')
        cy.get('#\\:r2\\:').type('c3kUt9d@upWBraT97n2jc')
        cy.get('.MuiButton-root').click()
        cy.get(".css-1dzfugc").click()
        cy.contains('Events').click()
        cy.contains('Reservations').click()
        cy.contains('Add Reservation').click()
        cy.get("[id='mui-component-select-mode']").click()
        cy.get('[data-value="delivery"]').click({ force: true })
        cy.get('#\\:rq\\:').type('AUTO-TEST', {force:true})
        cy.get('#\\:rr\\:').click()
        cy.contains('li', 'Koloni HQ Costa Rica').click()
        cy.get('#\\:rt\\:').type('JM')
        cy.get('#\\:ru\\:').type('50683530547')
        cy.get("[id='mui-component-select-id_size']").click()
        cy.contains('Large Propelius (12" x 12" x 12") - 1 door available').click()
        cy.contains('Submit').click()

        cy.contains('h2', 'Success').should('be.visible')

        cy.contains('p', 'Reservation created successfully!').should('be.visible')

    })
})
