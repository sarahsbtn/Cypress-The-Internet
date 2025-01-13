import BasePage from '../support/pages/BasePage';

describe('Homepage Tests', () => {

    const basePage = new BasePage();

    beforeEach('load the homepage', () => {
        basePage.visit('/');
        cy.title().should('eq', 'The Internet');
    });

    it('should display the correct header', () => {
        basePage.assertText('h1.heading', 'Welcome to the-internet');
    });

    it('should display example links', () => {
        cy.get('#content').within(() => {
            cy.get('a').should('have.length.greaterThan', 0); 
        });
    });

    it('should verify there are 44 example links', () => {
        cy.get('#content a').should('have.length', 44);
    });

});