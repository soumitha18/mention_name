import { INPUT_PAGE } from "../constant";

describe('Type text in the inputbox when mention the name and test', () => {

    before(() => {
        cy.viewport(1440, 800)
    })

    it('visit the app and type in text box', () => {
        cy.visit("/");
        cy.get(INPUT_PAGE.INPUT_COMPONENT).click();
        cy.focused().type("Hello @");

        cy.get(INPUT_PAGE.DROP_DOWN_LIST).find("div").should('have.length', 1000)

        cy.focused().type("cha")
        cy.get(INPUT_PAGE.DROP_DOWN_LIST).find("div").should('have.length', 5)

        cy.get(INPUT_PAGE.DROP_DOWN_NAME).eq(1).click()
        cy.get(INPUT_PAGE.INPUT_COMPONENT).should("have.value", "Hello @Chan Dunniom")

        cy.get(INPUT_PAGE.INPUT_COMPONENT).click();
        cy.focused().type(", How are you?")

        cy.get(INPUT_PAGE.INPUT_COMPONENT).should("have.value", "Hello @Chan Dunniom, How are you?")
    })
})