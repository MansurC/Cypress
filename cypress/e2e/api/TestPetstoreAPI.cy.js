describe('Petstore API Test GET method', () => {

  beforeEach(() => {
    cy.visit('https://petstore3.swagger.io/');
    cy.intercept('GET', '**/v3/pet/findByStatus**', {
          fixture: 'mockedPetStatus'
        }).as('getPetStatus');
        cy.contains("Finds Pets by status").click();
        cy.contains('Try it out').click();
        cy.contains('Execute').click();
        cy.wait('@getPetStatus');
});


    it('should have a response with status code 200', () => {
        cy.get('@getPetStatus').then((inter) => {
        expect(inter.response.statusCode).to.eq(200)});
        });

    it('should have a response with a correct id', () => {
             cy.get('@getPetStatus').its('response.body.id').should('eq', 99);

        });

    it('should have a response with a correct name', () => {
             cy.get('@getPetStatus').its('response.body.name').should('eq', 'ThisDog');

        });

    it('should have a response with category including "id" and "name"', () => {
      cy.get('@getPetStatus').its('response.body.category').should('deep.include', {id: 1, name: 'FearDogs'});
        });

    it('should have a response with photoUrls as string', () => {
      cy.get('@getPetStatus').its('response.body.photoUrls').should('include', 'string')
        });

    it('should have a response including tags with "id" and "name"', () => {
      cy.get('@getPetStatus').its('response.body.tags').should('deep.include', {id: 0, name: 'string'});
        });

    it('should have a response with status "available"', () => {
      cy.get('@getPetStatus').its('response.body.status').should('eq', "available");
        });


});