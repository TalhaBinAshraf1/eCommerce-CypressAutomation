/// <reference types="cypress" />
describe("Ticket A001", () =>{
    it("Home page Url Validation",() =>{
    cy.visit(Cypress.env("url"));
    cy.url().should("equal", Cypress.env("url"));
    
    });
    
    it("Validating Company Logo Visible ", () => {
        const companyLogo = cy.get(".logo");
        if (companyLogo.should("be.visible")) {
          cy.log(companyLogo + "Is Visible ");
        } else {
            cy.visit(Cypress.env("url"));
        }
    
    });
    
    });