import BasePage from './BasePage';

class AddRemovePage extends BasePage {
    selectors = {
        addElementButton: 'button[onclick="addElement()"]',
        deleteButton: 'button.added-manually',
    };

    getAddElementButton() {
        return cy.get(this.selectors.addElementButton).should('be.visible').and('contain.text', 'Add Element');
    }

    clickAddElementButton() {
        this.getAddElementButton().click();
    }
    
    getDeleteButton() {
        return cy.get(this.selectors.deleteButton).should('be.visible').and('contain.text', 'Delete');
    }

    clickDeleteButton(index = 0) {
        this.getDeleteButton().eq(index).click();
    }

    verifyNumberOfDeleteButtons(expectedCount) {
        cy.get(this.selectors.deleteButton).should('have.length', expectedCount);
    }
}

export default AddRemovePage;
