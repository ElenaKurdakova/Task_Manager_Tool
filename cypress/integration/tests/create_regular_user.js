describe('Create user with correct params', () => {

    const userName='User_'+ Date.now();
  
    it('Navigate to users name', () => {
  
        cy.visit('http://127.0.0.1:3000/');//открывается сайт
  
        cy.get(':nth-child(2) > .nav-link').click();//открытиe страницы USERS
        //cy.get('.h2').should('have.text', 'Users');
        
        cy.get('.btn').click();//нажатие на кнопку CREATE
        cy.get('.h2').should('have.text', 'Create user');
        cy.get('label').should('have.text', 'Name');
  
        cy.get('.form-control').type(userName);//ввод имени пользователя
        cy.get('.form-control').should('have.value', userName);
        cy.get('.btn').click(); //нажатие на кнопку CREATE
        cy.get('.alert').should('have.text', 'User has been created');
  
        cy.get(':nth-child(2) > .nav-link').click();//открытиe страницы USERS
        cy.get('.list-group').contains(userName);
    });
  });