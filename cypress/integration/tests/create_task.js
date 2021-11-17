import moment from 'moment';

describe('Create task', () => {

    
    const taskName='Task_'+ Date.now();
    const description='Task_description_'+ Date.now();

    const now = moment();
    const userName='User_'+ Date.now();

    before(() => {
        cy.visit('http://127.0.0.1:3000/');//открывается сайт
        cy.get(':nth-child(2) > .nav-link').click();//открытиe страницы USERS
        cy.get('.btn').click();//нажатие на кнопку CREATE
        cy.get('.form-control').type(userName);//ввод имени пользователя
        cy.get('.form-control').should('have.value', userName);
        cy.get('.btn').click(); //нажатие на кнопку CREATE
        cy.get('.alert').should('have.text', 'User has been created');
        cy.get(':nth-child(2) > .nav-link').click();//открытиe страницы USERS
        cy.get('.list-group').contains(userName);//поиск юзера в списке
        
    });


    it('Creation task', () => {
        
        cy.visit('http://127.0.0.1:3000/');

        cy.get(':nth-child(1) > .nav-link').click({ force: true });
        cy.get('.h2').should('have.text', 'Tasks');
        cy.get('.btn').click();


        cy.get('.h2').should('have.text', 'Create task');
        cy.get(':nth-child(1) > .form-group > label').should('have.text', 'Name');
        cy.get(':nth-child(2) > .form-group > label').should('have.text', 'Description');
        cy.get(':nth-child(3) > :nth-child(1) > label').should('have.text', 'Start date');
        cy.get(':nth-child(2) > label').should('have.text', 'End date');
        cy.get(':nth-child(4) > .form-group > label').should('have.text', 'Assignee');

        cy.get(':nth-child(1) > .form-group > .form-control').type(taskName);
        cy.get(':nth-child(2) > .form-group > .form-control').type(description);
        cy.get(':nth-child(3) > :nth-child(1) > .form-control').type(now.format('YYYY-MM-DD'));
        cy.get(':nth-child(2) > .form-control').type(now.add(1, 'days').format('YYYY-MM-DD'));
        cy.get('.custom-select').select(userName);
        cy.get('.btn').click(); 

        cy.get('.alert').should('have.text', 'Task has been created');
        cy.get(':nth-child(1) > .nav-link').click();
        
    });
    
    it('Finding created task', () => {
        cy.contains(taskName);
    });
  });