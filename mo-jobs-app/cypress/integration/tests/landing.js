describe('App Tests', function () {
  it('.should() pass', function () {

    cy.visit('localhost:3000/landing');

    cy.get('h1').should('have.text', 'Mo\' Jobs, Less Probs');

    cy
      .get('body content')
      .find('h3')
      .eq(0)
      .should('have.text', 'Who are We?');

    cy
      .get('body content')
      .find('p')
      .eq(0)
      .contains('We are 4 Geeks');

    cy
      .get('body content')
      .find('h3')
      .eq(1)
      .should('have.text', 'How are we different?');

    cy
      .get('body content')
      .find('p')
      .eq(1)
      .contains('designed by 4 guys');

    cy
      .get('body content')
      .find('h3')
      .eq(2)
      .should('have.text', 'Completely Free');

    cy
      .get('body content')
      .find('p')
      .eq(2)
      .contains('Tired of getting roped');

    cy.get('a').click();

    cy.url().should('be', 'localhost:3000/company');
  });
});
