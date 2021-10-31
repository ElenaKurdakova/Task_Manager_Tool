describe('My First Test', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:3000/');
    });

    it('Create user with valid user name', () => {
        let userName = "vasya-" + Date.now();
        cy.get(':nth-child(2) > .nav-link').click();
        cy.get('.h2').should('have.text', 'Tasks');
        cy.get('.btn').click();
        cy.get('.h2').should('have.text', 'Create user');
        cy.get('[name="user_name"]').type(userName);
        cy.get('.btn').click();
        cy.get('.alert').should('have.text', 'User has been created');
        cy.get(':nth-child(2) > .nav-link').click();
        cy.get('.chartjs-size-monitor').contains(userName)
    });

    it('User with existing user name shouldnt be created', () => {
        let userName = "vasya-" + Date.now();
        cy.get(':nth-child(2) > .nav-link').click();
        cy.get('.h2').should('have.text', 'Tasks');
        cy.get('.btn').click();
        cy.get('.h2').should('have.text', 'Create user');
        cy.get('[name="user_name"]').type(userName);
        cy.get('.btn').click();
        cy.get('.alert').should('have.text', 'User has been created');

        cy.get('[name="user_name"]').type(userName);
        cy.get('.btn').click();
        cy.get('.alert').should('have.text', 'Request failed with status code 400');
    });
});