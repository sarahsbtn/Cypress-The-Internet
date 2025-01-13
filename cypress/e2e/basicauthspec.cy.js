import BasePage from '../support/pages/BasePage';

describe('Basic Authentication Tests', () => {
    
    const basePage = new BasePage();

    beforeEach('load the authenticated page', () => {
        // Provide credentials for basic authentication
        basePage.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');
    });

    it('should display the correct header', () => {
        basePage.verifyHeader('Basic Auth'); 
    });

    it('should display the success message', () => {
        basePage.assertText('p', 'Congratulations! You must have the proper credentials.');
    });

});
