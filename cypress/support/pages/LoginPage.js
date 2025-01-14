import BasePage from './BasePage';

class LoginPage extends BasePage {
    selectors = {
        usernameInput: '#username',
        passwordInput: '#password',
        loginButton: 'button[type="submit"]',
        logoutButton: 'a.button.secondary.radius',
        flashMessage: '#flash'
    };

    fillUsername(username) {
        this.typeText(this.selectors.usernameInput, username); 
    }

    fillPassword(password) {
        this.typeText(this.selectors.passwordInput, password); 
    }

    clickLogin() {
        this.click(this.selectors.loginButton); 
    }

    login(username, password) {
        this.fillUsername(username);
        this.fillPassword(password);
        this.clickLogin();
    }

    correctLogin() {
        this.login('tomsmith', 'SuperSecretPassword!');
    }

    getLogoutButton() {
        return cy.get(this.selectors.logoutButton);
    }

    getFlashMessage(){
        return cy.get(this.selectors.flashMessage);
    }

    verifyLoginSuccess(expectedText) {
        this.getFlashMessage().should('be.visible').and('have.class', 'flash success').and('contain.text', expectedText);
    }

    verifyErrorMessage(expectedText) {
        this.getFlashMessage() .should('be.visible').and('have.class', 'flash error').and('contain.text', expectedText);
    }

    verifyLoginError(username, password, expectedErrorMessage) {
        if (username) this.fillUsername(username);
        if (password) this.fillPassword(password);
        this.clickLogin();
        this.verifyErrorMessage(expectedErrorMessage);
    }
}

export default LoginPage;