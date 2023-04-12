
describe('Petstore API Test', () => {

  it(' intercepts and mocks API response with fixture', () => {

    cy.visit('https://petstore3.swagger.io/');

    cy.intercept('GET', '**/v3/pet/findByStatus**', {
      fixture: 'mockedPetStatus'
    }).as('getPets');

    cy.contains("Finds Pets by status").click();
    cy.contains('Try it out').click();
    cy.contains('Execute').click();
    cy.wait('@getPets');


    cy.contains("ThisDog");
  });
});