/// <reference types="cypress" />

import testcase13varifyproductqwantityincartpag from "../../../PageObject/testCase-13-VerifyProductQuantityInCartPage"

const positiveMessage = "Inputted Successfully" ; 
const elementVisible = "Is Visible";

describe(" Test Case 13: Verify Product quantity in Cart ", ()=>{

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
    
    
    it ("Click 'View Product' for any product on home page", ()=>{
    
    const productName = cy.get("div:nth-of-type(8) > .product-image-wrapper > .single-products > .productinfo.text-center > p");
        
        if( productName.should("be.visible").should("have.text","Madame Top For Women")  ){

            const viewproductButton  = testcase13varifyproductqwantityincartpag.getViewProductButton();
            if (viewproductButton .should("be.visible").should("contain.text","View Product")) {
              viewproductButton .click(); 
              cy.log(viewproductButton  + elementVisible);
            } else {
                cy.visit(Cypress.env("url"));
            }
        
        }else{
            cy.visit(Cypress.env("url"));
        }
      
     
    
    });
    
    
    it ("Verify product detail is opened ", ()=>{
    
        //   ✅  Name Validation  ✅ 

        const name  = testcase13varifyproductqwantityincartpag.getProductName();
            if (name .should("be.visible").should("contain.text","Madame Top For Women")) {
              cy.log(name + elementVisible);
            } else {
                cy.visit(Cypress.env("url"));
            }


        //   ✅  Price Validation  ✅ 

        const price  = testcase13varifyproductqwantityincartpag.getProductPrice();
            if (price .should("be.visible").should("contain.text","Rs. 1000")) {
              cy.log(price + elementVisible);
            } else {
                cy.visit(Cypress.env("url"));
            }

    
    
    });
    

        
    
    it ("Increase quantity to 4 ", ()=>{
    
        cy.wait(2000)
        const productQuantity  = testcase13varifyproductqwantityincartpag.getProductQuantityInputfield();
        if (productQuantity .should("be.visible")) {
          productQuantity.clear(); 
          productQuantity.type("4"); 
          cy.log(productQuantity + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        } 
    
    
    });

    
    it ("Click 'Add to cart' button ", ()=>{
    
        const  addToCartButton  = testcase13varifyproductqwantityincartpag.getAddToCartButton();
        if ( addToCartButton .should("be.visible").should("contain.text", "Add to cart")) {
           addToCartButton.click(); 
          cy.log( addToCartButton + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        } 
    
    
    });


    it ("Click 'View Cart' button ", ()=>{
    
        const  viewCartButton  = testcase13varifyproductqwantityincartpag.getViewCartButton();
        if ( viewCartButton .should("be.visible").should("contain.text", "View Cart")) {
           viewCartButton.click(); 
          cy.log( viewCartButton + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        } 
    
    });

    
    it ("Verify that product is displayed in cart page with exact quantity ", ()=>{
    
        const  productQuantityInCartPage  = testcase13varifyproductqwantityincartpag.getProductQuantityInCartPage();
        if ( productQuantityInCartPage .should("be.visible").should("contain.text", "4")) {
         
          cy.log( productQuantityInCartPage + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
    
    });

        
    
    });