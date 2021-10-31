describe('Create user with correct params', () => {
    it('Navigate to users name', () => {
        cy.visit('http://127.0.0.1:3000/');
        cy.get(':nth-child(2) > .nav-link').click();
        cy.get('.h2').should('have.text', 'Tasks');
    })
  })