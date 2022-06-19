/// <reference types="cypress" />

import testcase18viewcategoryproductpage  from "../../../PageObject/testCase-18-ViewCategoryProductsPage" ;

const elementVisible = "Is Visible";

describe ("Test Case 18: View Category Products", ()=>{

    it ("TC - 2. Navigate to url 'http://automationexercise.com'", ()=>{
    
       cy.visit('/');
       cy.url().should("equal", Cypress.env("url"));


    });
    
    
    
    it ("TC - 3. Verify that categories are visible on left side bar", ()=>{
    
      let categoryelementPosition;

      cy.get('.left-sidebar > h2').then(
        ($button) => {
          categoryelementPosition = $button.position();
        }
      );
      
      cy.wait(100);
      
      cy.get('.left-sidebar > h2').should(
          ($button) => {
            expect($button.position()).deep.equal(categoryelementPosition);
          }
        );
 
  
    });

    
    it ("TC - 4. Click on 'Women' category", ()=>{
    
      const womenCategory  = testcase18viewcategoryproductpage.getWomenCategory();
      if (womenCategory .should("be.visible").should("have.text","\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\tWomen\n\t\t\t\t\t\t\t\t\t\t")) {
       
        womenCategory.click({force:true});
        cy.log(womenCategory  + elementVisible);
      } else {
          cy.visit(Cypress.env("url"));
      }

      
      cy.womenCategoryItems("Dress ");
      cy.womenCategoryItems("Tops ");
      cy.womenCategoryItems("Saree ");


    
    });
    
    
    it ("TC - 5. Click on any category link under 'Women' category, for example: Dress", ()=>{
    

      cy.visit("/");
      cy.get(":nth-child(1) > .panel-heading > .panel-title > a").click({force:true});
      cy.wait(2000);
      cy.xpath("//div[@id='Women']//ul/li[1]").click({force:true});

      
    
    });

    it ("TC - 6. Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'", ()=>{
    
    
    });
    
    
    it ("TC - 7. On left side bar, click on any sub-category link of 'Men' category", ()=>{
    
    
    });

    
    it ("TC - 8. Verify that user is navigated to that category page", ()=>{
    
    
    });
    
    
    
    
    });