/// <reference types="cypress" />


import verifyscrollupusingarrowbuttonandscrolldownfunctionality from '../../../PageObject/testCase-25-VerifyScrollUpUsingArrowButtonAndScrollDownFunctionalityPage';


const elementVisible = "Is Visible";
const  bannerText = "Full-Fledged practice website for Automation Engineers" ; 
const subscription = "Subscription" ;



describe ("Test Case 25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality", ()=>{

    it ("TC - 2. Navigate to url 'http://automationexercise.com'", ()=>{
   
        cy.visit('/');
             
    });
    
    
    it ("Verify that home page is visible successfully", ()=>{
    
        cy.url().should("equal", Cypress.env("url"));

        cy.request(Cypress.env("url")).should(
            (response) => {
              expect(response.status).to.eq(200);
            }
          );
          cy.csrfCookies();
    
    });

    
    it ("Scroll down page to bottom", ()=>{
    
        cy.scrollTo('bottom');

    
    });
    
    
    it ("Verify 'SUBSCRIPTION' is visible", ()=>{
    
        const  subscriptionText = verifyscrollupusingarrowbuttonandscrolldownfunctionality.getSubsCriptionText();
        if ( subscriptionText.should("be.visible")) {
            subscriptionText.should("have.text",subscription );
            cy.log( subscriptionText + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
    });

    
    it ("Click on arrow at bottom right side to move upward", ()=>{
    
        let scrollUpButton;
        let scrollUpButtonLocator =cy.get("a#scrollUp");

      
      cy.get("a#scrollUp").then(
          ($button) => {
            scrollUpButton = $button.position();
          }
        );
        
        cy.wait(100);
        
        cy.get("a#scrollUp").should(
            ($button) => {
              expect($button.position()).deep.equal(scrollUpButton);
            }
          );

          cy.get("a#scrollUp").click();
          
    
    });
    
    
    it ("Verify that page is scrolled up and 'Full-Fledged practice website fTC - or Automation Engineers' text is visible on screen", ()=>{
    
        const  topBannerTextValidation = verifyscrollupusingarrowbuttonandscrolldownfunctionality.getTopBannerText();
        if ( topBannerTextValidation.should("be.visible")) {
            topBannerTextValidation.should("have.text",bannerText );
            cy.log( topBannerTextValidation + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
    });

    
    
    });