const { random } = require("lodash");

describe('Create user with correct params', () => {

    const userName='User_'+ random();

    it('Navigate to users name', () => {
        cy.visit('http://127.0.0.1:3000/');
        cy.get(':nth-child(2) > .nav-link').click();
        cy.get('.h2').should('have.text', 'Tasks');
        cy.get('.btn').click();
        cy.get('.h2').should('have.text', 'Create user');
        cy.get('label').should('have.text', 'Name');
        cy.get('.form-control').type(userName);
        cy.get('.form-control').should('have.value', userName);
        cy.get('.btn').click(); 
        cy.get('.alert').should('have.text', 'User has been created')  
    });
  });