import BasePage from './BasePage';

class AddRemovePage extends BasePage {
    selectors = {
        addElementButton: 'button[onclick="addElement()"]',
        deleteButtons: 'button.added-manually',
    };

    getAddElementButton() {
        return cy.get(this.selectors.addElementButton).should('be.visible').and('contain.text', 'Add Element');
    }

    clickAddElementButton() {
        this.click(this.selectors.addElementButton); // BasePage click method
    }
    
    getDeleteButton() {
        return cy.get(this.selectors.deleteButtons).should('be.visible').and('contain.text', 'Delete');
    }

    clickDeleteButton(index = 0) {
        cy.get(this.selectors.deleteButtons).eq(index).click();
    }

    verifyNumberOfDeleteButtons(expectedCount) {
        cy.get(this.selectors.deleteButtons).should('have.length', expectedCount);
    }
}

export default AddRemovePage;
