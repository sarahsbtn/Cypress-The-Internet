class BasePage {
    // Navigate to a specific url 
    visit(path = '/') {
      cy.visit(path);
    }

    // Verify header text 
    verifyHeader(expectedText) {
        cy.get('h2, h3').should('contain.text', expectedText);
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
  