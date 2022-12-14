
/// <reference types="cypress" />


import testcase22addtocartromrecommendeditems from '../../../PageObject/testCase-22-AddToCartFromRecommendedItemsPage';

const recomandedItemText = "recommended items";
const elementVisible = "Is Visible";

describe ("Test Case 22: Add to cart from Recommended items", ()=>{

    it ("Navigate to url 'http://automationexercise.com'", ()=>{
    
        cy.visit('/');
        cy.url().should("equal", Cypress.env("url"));
    
    });
    
    
    it ("Scroll to bottom of page", ()=>{
    
        cy.scrollTo('bottom');
    
    });

    it ("Verify 'RECOMMENDED ITEMS' are visible", ()=>{

        const recomandedItemTextLocator  = testcase22addtocartromrecommendeditems.getRecomandedItemText();
        if (recomandedItemTextLocator .should("be.visible").should("contain.text",recomandedItemText)) {
          recomandedItemTextLocator .click(); 
          cy.log(recomandedItemTextLocator  + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
        cy.recomandedItemsList1("Stylish Dress");
        cy.recomandedItemsList1("Winter Top");
        cy.recomandedItemsList1("Summer White Top");
        cy.recomandedItemsList2("Blue Top");
        cy.recomandedItemsList2("Men Tshirt");
        cy.recomandedItemsList2("Rs. 1000");

    
    });
    
    
    it ("Click on 'Add To Cart' on Recommended product", ()=>{
    
        const addToCartButton = testcase22addtocartromrecommendeditems.getAddTocartButton();
        if (addToCartButton.should("be.visible").should("include.text","Add to cart")) {
            
            testcase22addtocartromrecommendeditems.getAddTocartButton().click();
            cy.log(addToCartButton + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
    
    });

    it ("Click on 'View Cart' button", ()=>{
    
        const viewCartButton = testcase22addtocartromrecommendeditems.getViewCartButton1();
        if (viewCartButton.should("include.text","View Cart")) {
            
            testcase22addtocartromrecommendeditems.getViewCartButton1().click();
            cy.log(viewCartButton + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
  
    });
    
    
    it ("Verify that product is displayed in cart page", ()=>{
    
        
        cy.url().should("equal", Cypress.env("cartpageurl"));
        cy.request(Cypress.env("cartpageurl")).should(
            (response) => {
              expect(response.status).to.eq(200);
            }
          );
          cy.csrfCookies();

        const blueTop = testcase22addtocartromrecommendeditems.getBlueTop();
        if (blueTop.should("be.visible").should("include.text","Blue Top")) {
            cy.log(blueTop + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
    });
    
    });