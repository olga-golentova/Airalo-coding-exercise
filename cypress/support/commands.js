// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add('selectByDataTestId', (testId) => {
    return cy.get(`[data-testid="${testId}"]`);
  });