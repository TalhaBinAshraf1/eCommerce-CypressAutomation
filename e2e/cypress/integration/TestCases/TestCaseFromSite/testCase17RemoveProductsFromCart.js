/// <reference types="cypress" />

import testcase17removeproductfromcartpage  from "../../../PageObject/testCase-17-RemoveProductsFromCartPage" ;

const positiveMessage = "Inputted Successfully" ; 
const elementVisible = "Is Visible";

describe ("Test Case 17: Remove Products From Cart", ()=>{


    it ("Navigate to url 'http://automationexercise.com'", ()=>{
    
      cy.visit('/');
      cy.url().should("equal", Cypress.env("url"));

    });
    
    it ("Verify that home page is visible successfully ", ()=>{
    
        cy.request(Cypress.env("url")).should(
            (response) => {
              expect(response.status).to.eq(200);
            }
          );
          cy.csrfCookies();

        //             ✅  Navbar Validation  ✅

        cy.navbarItems(" Home");
        cy.navbarItems(" Products");
        cy.navbarItems(" Cart");
        cy.navbarItems(" Signup / Login");
        cy.navbarItems(" Test Cases");
        cy.navbarItems(" API Testing");
        cy.navbarItems(" Contact us");

    
    });
    
    it ("Product Add products to cart", ()=>{
    
        const  addToCartButton  = testcase17removeproductfromcartpage.getAddToCartButton();
        if ( addToCartButton .should("be.visible").should("contain.text", "Add to cart")) {
           addToCartButton.click(); 
          cy.log( addToCartButton + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        } 
      
        testcase17removeproductfromcartpage.getContinueShopingButton().should("be.visible").click();
    

        const cartButton  = testcase17removeproductfromcartpage.getCartButton();
        if (cartButton .should("be.visible").should("contain.text"," Cart")) {
          cartButton .click(); 
          cy.log(cartButton  + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }

    });
    
 
    it (" Verify that cart page is displayed ", ()=>{
    
      cy.url().should("equal", Cypress.env("cartpageurl"));
    
    
    });

    
    it (" Click 'X' button corresponding to particular product", ()=>{
    
        const cartquantityDeleteButton  = testcase17removeproductfromcartpage.getCartQuantityDeleteButton();
        if (cartquantityDeleteButton .should("be.visible")) {
          cartquantityDeleteButton .click(); 
          cy.log(cartquantityDeleteButton  + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
        

    
    });

    it (" Verify that product is removed from the cart", ()=>{

           
        const cartEmptyText  = testcase17removeproductfromcartpage.getCartEmptyText();
        if (cartEmptyText .should("be.visible").should("have.text","Cart is empty! Click here to buy products."))
         {
          cy.log(cartEmptyText  + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
        
    
    });
    
    
    
    });