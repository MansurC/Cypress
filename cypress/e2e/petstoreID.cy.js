describe('Petstore API Test', () => {
  it(' intercepts and mocks GET response', () => {

        cy.visit('https://petstore3.swagger.io/');

        cy.intercept('GET','**/v3/pet/1**',{
          statusCode: 201,
            body: {
              name: 'Mocked response with mocked status code'}
        }).as('myPetId')

        cy.contains("Find pet by ID").click();
        cy.contains("Try it out").click();
        cy.get('[placeholder = "petId"]').type("1");

        cy.contains("Execute").click();
        cy.wait('@myPetId');

        cy.contains("Mocked response with mocked status code");

  });
});