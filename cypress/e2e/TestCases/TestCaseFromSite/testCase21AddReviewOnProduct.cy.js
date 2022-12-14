/// <reference types="cypress" />

import testcase21addreviewonproduct from '../../../PageObject/testCase-21-AddReviewOnProductPage';


const elementVisible = "Is Visible";
const productname =  "Blue Top" ;
const searchproductText = "Searched Products";
const positiveMessage = "Inputted Successfully" ; 

describe ("Test Case 21: Add review on product", ()=>{

    it ("Navigate to url 'http://automationexercise.com'", ()=>{
    
        cy.visit('/');
        cy.url().should("equal", Cypress.env("url"));
    
    });
    
    
    it ("Click on 'Products' button", ()=>{
    
           
        const productButton  = testcase21addreviewonproduct.getProductsButton();
        if (productButton .should("be.visible").should("contain.text"," Products")) {
          productButton .click(); 
          cy.log(productButton  + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
    });

    it ("Verify user is navigated to ALL PRODUCTS page successfully", ()=>{
    
        cy.url().should("equal", Cypress.env("productpageurl"));
        cy.request(Cypress.env("productpageurl")).should(
            (response) => {
              expect(response.status).to.eq(200);
            }
          );

        const allProductText = testcase21addreviewonproduct.getAllProductText();
        if (allProductText.should("be.visible")) {
            allProductText.should("include.text","All Products");
            cy.log(allProductText + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }

        cy.scrollTo(0, 800);
    
        const catagoryText = testcase21addreviewonproduct.getCatagoryText();
        if (catagoryText.should("be.visible")) {
            catagoryText.should("include.text","Category");
            cy.log(catagoryText + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
    
    });
    
    
    it ("Click on 'View Product' button", ()=>{
    
        
        const viewProductButton = testcase21addreviewonproduct.getViewProductButton();
        if (viewProductButton.should("be.visible")) {
            viewProductButton.should("include.text","View Product");
            viewProductButton.click();
            cy.log(viewProductButton + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
    });
    

    it ("Verify 'Write Your Review' is visible", ()=>{
    
        const writeYourReviewText = testcase21addreviewonproduct.getWriteYourReviewText();
        if (writeYourReviewText.should("be.visible")) {
            writeYourReviewText.should("include.text","Write Your Review");
            cy.log(writeYourReviewText + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
    });
    
    
    it ("Enter name, email and review", ()=>{

        const nameInputField = testcase21addreviewonproduct.getNameInputField();
        if (nameInputField.should("be.visible").invoke("attr","placeholder").should("contain","Your Name")) {

            testcase21addreviewonproduct.getNameInputField().type("test012")
            cy.log(nameInputField + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }

        const emailInputField = testcase21addreviewonproduct.getemailInputField();
        if (emailInputField.should("be.visible").invoke("attr","placeholder").should("contain","Email Address")) {
            testcase21addreviewonproduct.getemailInputField().type("test012@testmail.com")
            cy.log(emailInputField + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }

        const reviewInputField = testcase21addreviewonproduct.getReviewInputField();
        if (reviewInputField.should("be.visible").invoke("attr","placeholder").should("contain","Add Review Here!")) {
            testcase21addreviewonproduct.getReviewInputField().type("test on going in cypress")
            cy.log(reviewInputField + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }

    
    });

    it ("Click 'Submit' button", ()=>{


        const submitButton = testcase21addreviewonproduct.getSubmitButton();
        if (submitButton.should("be.visible").should("have.text","\n\t\t\t\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t\t\t\t")) {
            submitButton.click();
            cy.log(submitButton + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }    
    
    
    });
    
    it ("Verify success message 'Thank you for your review.'", ()=>{
    
              cy.get('#review-section > div > div > span').should(($div) => {
            // access the native DOM element
            expect($div.get(0).innerText).to.eq('Thank you for your review.')
          })
    
    });

    });