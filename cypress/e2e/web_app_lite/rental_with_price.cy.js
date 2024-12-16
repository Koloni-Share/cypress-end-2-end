describe('Basic URL Visit Test', () => {
    it('should visit the homepage', () => {
      cy.visit('https://web-qa.koloni.io/?location=8e525b63-cd11-4cea-89f1-b34e982a577c&org=qa-org');
      cy.get('#radix-\:r0\:-trigger-email').contains('email').click({force:true})

    });
  });