
context('Create user', () => {
    before(() => {
        cy.visit('http://127.0.0.1:3000/');
    });

    let userName = "raya-" + Date.now();


    it('Click to users menu', () => {
        cy.get(':nth-child(2) > .nav-link').click();
        cy.get('h2').should('have.text', 'Tasks');
    });

    it('Click to create button', () => {
        cy.get('.btn').click();
        cy.get('.h2').should('have.text', 'Create user');
    });

    it('Create user', () => {

        cy.get('.form-control').type(userName);
        cy.get('.btn').click();
        cy.get('.alert').should('have.text', 'User has been created');
    });

    it('Navigate to users list', () => {
        cy.get(':nth-child(2) > .nav-link').click();
        cy.wait(3000);
        let l = cy.get('.list-group').its('length');
        console.log(l);
        cy.get('.list-group').contains(userName);
    });

});
