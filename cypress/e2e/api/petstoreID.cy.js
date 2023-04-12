describe('Petstore API Test GET method', () => {
  it('should intercept and mock GET response', () => {

        cy.visit('https://petstore3.swagger.io/');

        cy.intercept('GET','**/v3/pet/1**',{
          statusCode: 201,
            body: {
                id: 1000,
                name: "APIDOG",
                category: {
                  id: 1,
                  name: "Dogs"
                },
                photoUrls: [
                  "string"
                ],
                tags: [
                  {
                    id: 0,
                    name: "string"
                  }
                ],
                status: "available"
              }
        }).as('myPetId')

        cy.contains("Find pet by ID").click();
        cy.contains("Try it out").click();
        cy.get('[placeholder = "petId"]').type("1");
        cy.contains("Execute").click();
        cy.wait('@myPetId');


        cy.get('@myPetId').then((inter) => { expect(inter.response.statusCode).to.eq(201)});
        cy.get('@myPetId').its('response.body.name').should('eq', "APIDOG");
        cy.get('@myPetId').its('response.body.id').should('eq', 1000);

  });
});