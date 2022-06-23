/// <reference types="cypress" />

import testcase26verifyscrollupwithoutusingarrowbuttonandscrolldownfunctionality from '../../../PageObject/testCase-26-VerifyScrollUpWithoutArrowButtonAndScrollDownFunctionalityPage';


const elementVisible = "Is Visible";
const  bannerText = "Full-Fledged practice website for Automation Engineers" ; 
const subscription = "Subscription" ;

describe ("Test Case 26: Verify Scroll Up without 'Arrow' button and Scroll Down functionality", ()=>{


    it ("TC - 2. Navigate to url 'http://automationexercise.com'", ()=>{
   
        cy.visit('/');
             
    });
    
    
    it ("TC - 3. Verify that home page is visible successfully", ()=>{
    
        cy.url().should("equal", Cypress.env("url"));

        cy.request(Cypress.env("url")).should(
            (response) => {
              expect(response.status).to.eq(200);
            }
          );
          cy.csrfCookies();
    
    });

    
    it ("TC - 4. Scroll down page to bottom", ()=>{
    
        cy.scrollTo('bottom');

    
    });
    

    it ("5. Verify 'SUBSCRIPTION' is visible", ()=>{

        
        const  subscriptionText = testcase26verifyscrollupwithoutusingarrowbuttonandscrolldownfunctionality.getSubsCriptionText();
        if ( subscriptionText.should("be.visible")) {
            subscriptionText.should("have.text",subscription );
            cy.log( subscriptionText + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
    });
    
    
    it ("6. Scroll up page to top", ()=>{
    
        cy.scrollTo("top");
    
    });

    it ("7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen", ()=>{
    
        const  topBannerTextValidation = testcase26verifyscrollupwithoutusingarrowbuttonandscrolldownfunctionality.getTopBannerText();
        if ( topBannerTextValidation.should("be.visible")) {
            topBannerTextValidation.should("have.text",bannerText );
            cy.log( topBannerTextValidation + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
    });

    });