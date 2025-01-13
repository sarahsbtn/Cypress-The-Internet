import BasePage from '../support/pages/BasePage';

describe('Broken Images Tests', () => {

    const basePage = new BasePage();

    beforeEach('load the correct page', () => {
        basePage.visit('/broken_images');
        basePage.verifyHeader('Broken Images');
    });

    it('should show the images exist', () => {
        cy.get('.example').within(() => {
            cy.get('img').should('have.length', 3); 
        });
    });

    it('should ')

});