describe('Create user with correct params', () => {

  const userName='User_'+ Date.now();
  const expectedCount=1; 

  it('Navigate to users name 1', () => {

      cy.visit('http://127.0.0.1:3000/');//открывается сайт
      
      //создание первого пользователя
      cy.get(':nth-child(2) > .nav-link').click();//открытиe страницы USERS       
      cy.get('.btn').click();//нажатие на кнопку CREATE
      cy.get('.form-control').type(userName);//ввод имени пользователя
      cy.get('.form-control').should('have.value', userName);
      cy.get('.btn').click(); //нажатие на кнопку CREATE
      cy.get('.alert').should('have.text', 'User has been created');
  });

  it('Navigate to users name 2', () => {

      //создание второго пользователя
      cy.get(':nth-child(2) > .nav-link').click();//открытиe страницы USERS
      cy.get('.btn').click();//нажатие на кнопку CREATE
      cy.get('.form-control').type(userName);//ввод имени 2го пользователя
      cy.get('.form-control').should('have.value', userName);
      cy.get('.btn').click(); //нажатие на кнопку CREATE
      //cy.get('.alert').should('have.text', 'Such username already exists');


      cy.get(':nth-child(2) > .nav-link').click();//открытиe страницы USERS
      cy.get('.list-group').contains(userName);
      cy.get('.list-group').should('have.length',expectedCount);
});

it('User list contains one user', () => {

  cy.get(':nth-child(2) > .nav-link').click();//открытиe страницы USERS
  // cy.get('.list-group').contains(userName);
  cy.get('.list-group').contains(userName).should('have.length',expectedCount);
});


});