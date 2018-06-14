describe('App Tests', function () {
  it('.should() pass', function () {

    cy.visit('./landing');

    cy.get('h1').contains('Mo Jobs, Less Probs!');

    cy.get('body > content').as('Content');

    cy
      .get('@Content')
      .eq(0)
      .find('h3')
      .should('have.text', 'Who are We?');

    cy
      .get('@Content')
      .eq(1)
      .find('p')
      .contains('We are 4 Geeks');

    cy
      .get('@Content')
      .eq(2)
      .find('h3')
      .should('have.text', 'How are we different?');

    cy
      .get('@Content')
      .eq(3)
      .find('p')
      .contains('designed by 4 guys');

    cy
      .get('@Content')
      .eq(4)
      .find('h3')
      .should('have.text', 'Completely Free');

    cy
      .get('@Content')
      .eq(5)
      .find('p')
      .contains('Tired of getting roped');

    cy.get('button').click();

    cy.url().should('be', '/company');
  });
});
