class BasePage {
    // Navigate to a specific url 
    visit(path = '/') {
      cy.visit(path);
    }

    verifyHeader(expectedText) {
        cy.get('h3').should('have.text', expectedText);
    }
    
    // Click selectors
    click(selector) {
        cy.get(selector).click();
    }

    // Type in text to selectors
    typeText(selector, text) {
        cy.get(selector).type(text);
    }

    // Ascertain correct text is displayed 
    assertText(selector, expectedText) {
        cy.get(selector).should('be.visible').and('contain.text', expectedText);
    }
  }

  export default BasePage;
  