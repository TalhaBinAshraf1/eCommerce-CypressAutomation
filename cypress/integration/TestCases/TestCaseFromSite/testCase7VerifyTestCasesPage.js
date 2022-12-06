import testcase7VerifyTestCasePage_Page from '../../../PageObject/testCase-7-VerifyTestCasesPage-Page';

import chaiColors from 'chai-colors' 
chai.use(chaiColors)


const positiveMessage = "Inputted Successfully" ; 
const elementVisible = "Is Visible";

describe(" Test Case 7: Verify Test Cases Page ", ()=>{

    
    it ("Navigate to url 'http://automationexercise.com'", ()=>{
    
      cy.visit('/');
      cy.url().should("equal", Cypress.env("url"));
    });

    it ("Verify that home page is visible successfully", ()=>{
    
 
      cy.request(Cypress.env("url")).should(
          (response) => {
            expect(response.status).to.eq(200);
          }
        );
        cy.csrfCookies()
    
      //             ✅  Navbar Validation  ✅

       cy.navbarItems(" Home");
       cy.navbarItems(" Products");
       cy.navbarItems(" Cart");
       cy.navbarItems(" Signup / Login");
       cy.navbarItems(" Test Cases");
       cy.navbarItems(" API Testing");
       cy.navbarItems(" Contact us");
  
  
  });
    

    
    it ("Click on 'Test Cases' button ", ()=>{
    
       const TestCasesButton  = testcase7VerifyTestCasePage_Page.getTestCaseButton();
       if (TestCasesButton .should("be.visible")) {
         TestCasesButton .click(); 
         cy.log(TestCasesButton  + elementVisible);
       } else {
           cy.visit(Cypress.env("url"));
       }

    
    
    });
    
    
    it ("Verify user is navigated to test cases page successfully", ()=>{
    

        cy.url().should("equal", Cypress.env("testcasepageurl"));
        cy.request(Cypress.env("testcasepageurl")).should(
            (response) => {
              expect(response.status).to.eq(200);
            }
          );
          
          const testCasesText = testcase7VerifyTestCasePage_Page.getTestCaseText();
          if (testCasesText.should("be.visible")
          .should("have.css", "color", "rgb(254, 152, 15)")
          .should("have.css","font-family","Roboto, sans-serif")
          .should("have.css", "font-size", "18px")
          .should("have.css", "line-height", "19.8px")
          .should("have.css", "text-align", "center")
          .should("have.css", "text-transform", "uppercase")
          .should("have.css", "-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)")) {
              testCasesText.should("include.text","Test Cases")
              .and("have.length","1");
              cy.log(testCasesText + elementVisible);
          } else {
              cy.visit(Cypress.env("url"));
          }
    

      //   ✅  TestCase List Valiadtion  ✅ 


        cy.testcaselist("Test Case 1: Register User");
        cy.testcaselist("Test Case 2: Login User with correct email and password");
        cy.testcaselist("Test Case 3: Login User with incorrect email and password");
        cy.testcaselist("Test Case 4: Logout User");
        cy.testcaselist("Test Case 5: Register User with existing email");
        cy.testcaselist("Test Case 6: Contact Us Form");
        cy.testcaselist("Test Case 7: Verify Test Cases Page");
        cy.testcaselist("Test Case 8: Verify All Products and product detail page");
        cy.testcaselist("Test Case 9: Search Product");
        cy.testcaselist("Test Case 10: Verify Subscription in home page");
        cy.testcaselist("Test Case 11: Verify Subscription in Cart page");
        cy.testcaselist("Test Case 12: Add Products in Cart");
        cy.testcaselist("Test Case 13: Verify Product quantity in Cart");
        cy.testcaselist("Test Case 14: Place Order: Register while Checkout");
        cy.testcaselist("Test Case 15: Place Order: Register before Checkout");
        cy.testcaselist("Test Case 16: Place Order: Login before Checkout");
        cy.testcaselist("Test Case 17: Remove Products From Cart");
        cy.testcaselist("Test Case 18: View Category Products");
        cy.testcaselist("Test Case 19: View & Cart Brand Products");
        cy.testcaselist("Test Case 20: Search Products and Verify Cart After Login");
        cy.testcaselist("Test Case 21: Add review on product");
        cy.testcaselist("Test Case 22: Add to cart from Recommended items");
        cy.testcaselist("Test Case 23: Verify address details in checkout page");
        cy.testcaselist("Test Case 24: Download Invoice after purchase order");
        cy.testcaselist("Test Case 25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality");
        cy.testcaselist("Test Case 26: Verify Scroll Up without 'Arrow' button and Scroll Down functionality");
        cy.wait(2000);
    
    });
    
        
    
    });