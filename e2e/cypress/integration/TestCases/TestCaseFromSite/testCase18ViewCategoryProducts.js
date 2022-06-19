/// <reference types="cypress" />

describe ("Test Case 18: View Category Products", ()=>{

    it ("TC - 2. Navigate to url 'http://automationexercise.com'", ()=>{
    
       cy.visit('/');
       cy.url().should("equal", Cypress.env("url"));


    });
    
    
    
    it ("TC - 3. Verify that categories are visible on left side bar", ()=>{
    
      let initialPosition;

      cy.get('.left-sidebar > h2').then(
        ($button) => {
          initialPosition = $button.position();
        }
      );
      
      cy.wait(100);
      
      cy.get('.left-sidebar > h2').should(
          ($button) => {
            expect($button.position()).deep.equal(initialPosition);
          }
        );
 
  
    });

    
    it ("TC - 4. Click on 'Women' category", ()=>{
    
    
    });
    
    
    it ("TC - 5. Click on any category link under 'Women' category, for example: Dress", ()=>{
    
    
    });

    it ("TC - 6. Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'", ()=>{
    
    
    });
    
    
    it ("TC - 7. On left side bar, click on any sub-category link of 'Men' category", ()=>{
    
    
    });

    
    it ("TC - 8. Verify that user is navigated to that category page", ()=>{
    
    
    });
    
    
    
    
    });