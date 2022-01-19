/// <reference types="cypress" />
describe("Ticket A001", () =>{
    it("Home page Url Validation",() =>{
    cy.visit(Cypress.env("url"));
    cy.url().should("equal", Cypress.env("url"));
    
    });
    
    it("Validating Company Logo Visible ", () => {
        const logo = cy.get(".logo");
        if (logo.should("be.visible")) {
          cy.log(logo + "Is Visible ");
        } else {
            cy.visit(Cypress.env("url"));
        }
    
    });
    
    });