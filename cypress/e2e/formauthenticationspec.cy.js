import LoginPage from '../support/pages/LoginPage';

describe('Login Page Tests', () => {

    const loginPage = new LoginPage();

    beforeEach('load the correct page', () => {
        loginPage.visit('/login');
        loginPage.verifyHeader('Login Page');
    });

    it('should verify that all login form elements exist', () => {
        cy.get(loginPage.selectors.usernameInput).should('exist');
        cy.get(loginPage.selectors.passwordInput).should('exist');
        cy.get(loginPage.selectors.loginButton).should('exist');
    });
    
    it('should verify input field attributes', () => {
        cy.get(loginPage.selectors.usernameInput).should('have.attr', 'type', 'text');
        cy.get(loginPage.selectors.passwordInput).should('have.attr', 'type', 'password');
    });

    it('should login with the correct credentials', () => {
        loginPage.correctLogin();
        loginPage.verifyHeader('Secure Area');
        loginPage.verifyLoginSuccess('You logged into a secure area!');
    });

    it('should log the user out on clicking the logout button', () => {
        loginPage.correctLogin();
        loginPage.getLogoutButton().click();
        loginPage.verifyHeader('Login Page');
        loginPage.getLogoutButton().should('not.exist');
    });

    it('should display an error message when no credentials are entered', () => {
        loginPage.verifyLoginError('', '', 'Your username is invalid!');
    });

    it('should display an error message when both credentials are incorrect', () => {
        loginPage.verifyLoginError('invalidUsername', 'invalidPassword', 'Your username is invalid!');
    });

    it('should display a username error if username is incorrect', () => {
        loginPage.verifyLoginError('invalidUsername', 'SuperSecretPassword!', 'Your username is invalid!'); 
    });

    it('should display a password error if passsword is incorrect', () => {
        loginPage.verifyLoginError('tomsmith', 'invalidPassword', 'Your password is invalid!');
    });

    it('should maintain session after a page refresh', () => {
        loginPage.correctLogin();
        cy.reload();
        loginPage.verifyHeader('Secure Area');
    });

    it('should redirect to login page when accessing secure area without login and display login prompt message', () => {
        loginPage.visit('/secure');
        loginPage.verifyHeader('Login Page');
        loginPage.getFlashMessage().should('contain.text', 'You must login to view the secure area!');
    });
    
});