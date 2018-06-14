describe('App Tests', function () {
  it('.should() pass', function () {

    cy.visit('./comapny');

    cy.get('h1').contains('Mo Jobs, Less Probs!');

    cy.get('body > div > table > tr').as('tableTitle');

    cy.get('body > div > div').as('tableButton')

    cy
      .get('@tableTitle')
      .eq(0)
      .find('th')
      .should('have.text', 'Delete Company');

    cy
      .get('@tableTitle')
      .eq(1)
      .find('th')
      .should('have.text', 'Resume');

    cy
      .get('@tableTitle')
      .eq(2)
      .find('th')
      .should('have.text', 'Cover Letter');

    cy
      .get('@tableTitle')
      .eq(3)
      .find('th')
      .should('have.text', 'Date Applied');

    cy
      .get('@tableTitle')
      .eq(4)
      .find('th')
      .should('have.text', 'Date of Interview');

    cy
      .get('@tableTitle')
      .eq(5)
      .find('th')
      .should('have.text', 'Description');

    cy
      .get('@tableButton')
      .eq(1)
      .find('button')
      .click();

  });
});
