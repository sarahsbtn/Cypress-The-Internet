import AddRemovePage from '../support/pages/AddRemovePage';

describe('Add/Remove Elements Tests', () => {

    const addRemovePage = new AddRemovePage();

    beforeEach('load the correct page', () => {
        addRemovePage.visit('/add_remove_elements/');
        addRemovePage.verifyHeader('Add/Remove Elements');
    });

    it('should have the Add Element button', () => {
        addRemovePage.getAddElementButton();
    });

    it('should add Delete button after clicking Add Element button', () => {
        addRemovePage.clickAddElementButton();
        addRemovePage.verifyNumberOfDeleteButtons(1);
    });

    it('should remove the Delete button after clicking it', () => {
        addRemovePage.clickAddElementButton();
        addRemovePage.getDeleteButton();
        addRemovePage.clickDeleteButton();
        addRemovePage.verifyNumberOfDeleteButtons(0);
    });

    it('should add and remove multiple Delete buttons', () => {
        const numberOfButtons = 5;
        for (let i = 0; i < numberOfButtons; i++) {
            addRemovePage.clickAddElementButton();;
        }
        addRemovePage.getDeleteButton().should('have.length', numberOfButtons);
        addRemovePage.getDeleteButton().each((button) => {
            cy.wrap(button).click();
        });
        addRemovePage.verifyNumberOfDeleteButtons(0);
    });
    
    it('should add and remove a large number of Delete buttons', () => {
        const numberOfButtons = 100;
        for (let i = 0; i < numberOfButtons; i++) {
            addRemovePage.clickAddElementButton();;
        }
        addRemovePage.getDeleteButton().should('have.length', numberOfButtons);
        addRemovePage.getDeleteButton().each((button) => {
            cy.wrap(button).click();
        });
        addRemovePage.verifyNumberOfDeleteButtons(0);
    });

});