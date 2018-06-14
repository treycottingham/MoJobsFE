describe('App Tests', function () {
  it('.should() pass', function () {

    cy.visit('./company');

    cy.get('body > div > table > tr > td > button').should('have.text', 'Delete Company');

    cy.get('body > div > table > tr > td > button').click();

    cy.get('body > div > div').as('tableButton');

    cy
      .get('@tableButton')
      .eq(0)
      .find('button')
      .click();

    cy.get('body > div > form').as('companyForm');

    cy
      .get('@companyForm')
      .eq(0)
      .find('label')
      .should('have.text', 'Company Name');

    cy
      .get('@companyForm')
      .eq(1)
      .find('input')
      .type('Nationwide');

    cy
      .get('@companyForm')
      .eq(2)
      .find('label')
      .should('have.text', 'Resume');

    cy
      .get('@companyForm')
      .eq(3)
      .find('input')
      .check();

    cy
      .get('@companyForm')
      .eq(4)
      .find('label')
      .should('have.text', 'Cover Letter');

    cy
      .get('@companyForm')
      .eq(5)
      .find('input')
      .check();

    cy
      .get('@companyForm')
      .eq(6)
      .find('label')
      .should('have.text', 'Date Applied');

    cy
      .get('@companyForm')
      .eq(7)
      .find('input')
      .click();

    cy
      .get('@companyForm')
      .eq(8)
      .find('label')
      .should('have.text', 'Date of Interview');

    cy
      .get('@companyForm')
      .eq(9)
      .find('input')
      .click();

    cy
      .get('@companyForm')
      .eq(10)
      .find('label')
      .should('have.text' , 'Description');

    cy
      .get('@companyForm')
      .eq(11)
      .find('input')
      .type('This is a test');

    cy
      .get('@companyForm')
      .eq(12)
      .find('label')
      .should('have.text', 'Required Technologies');

    cy
      .get('@companyForm')
      .eq(13)
      .find('input')
      .type('Test');

    cy.get('form').submit();

    cy.get().click();

    cy.url().should('be', './contact');

  });
});
