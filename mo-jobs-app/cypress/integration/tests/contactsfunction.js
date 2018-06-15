describe('App Tests', function () {
  it('.should() pass', function () {

    cy.visit('localhost:3000/contact');

    cy.get('body > div > tr > td > button').should('have.text', 'Delete').click();

    cy.get('body > div > form').as('contactForm');

    cy
      .get('@contactForm')
      .eq(0)
      .find('label')
      .should('have.text', 'Name:');

    cy
      .get('@contactForm')
      .eq(1)
      .find('input')
      .type('Test Name');

    cy
      .get('@contactForm')
      .eq(2)
      .find('label')
      .should('have.text', 'Position:');

    cy
      .get('@contactForm')
      .eq(3)
      .find('input')
      .type('Tester');

    cy
      .get('@contactForm')
      .eq(4)
      .find('label')
      .should('have.text', 'Location Met:');

    cy
      .get('@contactForm')
      .eq(5)
      .find('input')
      .type('Field');

    cy
      .get('@contactForm')
      .eq(6)
      .find('label')
      .should('have.text', 'Date Last Interacted:');

    cy
      .get('@contactForm')
      .eq(7)
      .find('input')
      .click();
  });
});
