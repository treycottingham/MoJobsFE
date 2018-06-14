describe('App Tests', function () {
  it('.should() pass', function () {

    cy.visit('./contact');

    cy.get('h1').contains('Mo Jobs, Less Probs!');


  });
});
