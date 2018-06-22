describe('App Tests', function () {
  it('.should() pass', function () {

    cy.visit('localhost:3000/contact');

    cy.get('h1').contains('Less Probs!');

    cy.get('body > div > tr').as('contactTitle');

    cy
      .get('@contactTitle')
      .eq(0)
      .find('th')
      .should('have.text', 'Delete Contact');

    cy
      .get('@contactTitle')
      .eq(1)
      .find('th')
      .should('have.text', 'Name');

    cy
      .get('@contactTitle')
      .eq(2)
      .find('th')
      .should('have.text', 'Position');

    cy
      .get('@contactTitle')
      .eq(3)
      .find('th')
      .should('have.text', 'Location Met');

    cy
      .get('@contactTitle')
      .eq(4)
      .find('th')
      .should('have.text', 'Date Last Interacted');

    cy
      .get('@contactTitle')
      .eq(5)
      .find('th')
      .should('have.text', 'Company');
  });
});
