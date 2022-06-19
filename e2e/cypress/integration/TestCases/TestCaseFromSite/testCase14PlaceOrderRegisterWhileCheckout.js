/// <reference types="cypress" />

import chaiColors from 'chai-colors' 
chai.use(chaiColors)

import testcase14placeorderregisterwhitecheckoutpage from "../../../PageObject/testCase-14-PlaceOrderRegisterWhileCheckoutPage" ;
import  testcase2loginuserwithcorrectemailandpasswordpage  from '../../../PageObject/testCase-2-LoginUserWithCorrectEmailAndPasswordPage';

const positiveMessage = "Inputted Successfully" ; 
const elementVisible = "Is Visible";


describe(" Test Case 14: Place Order: Register while Checkout ", ()=>{

    it ("TC - 2. Navigate to url 'http://automationexercise.com'", ()=>{
    
      cy.visit('/');
      cy.url().should("equal", Cypress.env("url"));


    });
    
    
    
    it ("TC - 3. Verify that home page is visible successfully ", ()=>{
    
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
    
    it ("TC - 4. Product Add products to cart", ()=>{
    
        const  addToCartButton  = testcase14placeorderregisterwhitecheckoutpage.getAddToCartButton();
        if ( addToCartButton .should("be.visible").should("contain.text", "Add to cart")) {
           addToCartButton.click(); 
          cy.log( addToCartButton + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        } 
      
        testcase14placeorderregisterwhitecheckoutpage.getContinueShopingButton().should("be.visible").click();
    

        const cartButton  = testcase14placeorderregisterwhitecheckoutpage.getCartButton();
        if (cartButton .should("be.visible").should("contain.text"," Cart")) {
          cartButton .click(); 
          cy.log(cartButton  + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }



    });
    
 
    it ("TC - 6. Verify that cart page is displayed ", ()=>{
    
      cy.url().should("equal", Cypress.env("cartpageurl"));
    
    
    });

    
    it ("TC - 7. Click Proceed To Checkout ", ()=>{

      const proceedToCheckoutButton  = testcase14placeorderregisterwhitecheckoutpage.getProceedToCheckOutButton();
      if (proceedToCheckoutButton .should("be.visible").should("contain.text","Proceed To Checkout")) {
        proceedToCheckoutButton .click(); 
        cy.log(proceedToCheckoutButton  + elementVisible);
      } else {
          cy.visit(Cypress.env("url"));
      }

  
    
    });


    it("TC - 8. Click 'Register / Login' button  ", () => {
      
      const signupLogin = cy.get(".modal-content u");
       if (signupLogin.should("be.visible")) {
         signupLogin.click(); 
         cy.log(signupLogin + elementVisible);
       } else {
           cy.visit(Cypress.env("url"));
       }
   
      });     
it (" TC - 5. Verify 'Login to your account' is visible", ()=>{

  const logintoYourAccountText = testcase2loginuserwithcorrectemailandpasswordpage.getLoginToYourAccountText();
  if (logintoYourAccountText.should("be.visible")) {
      logintoYourAccountText.should("include.text","Login to your account")
      .and("have.length","1");
      cy.log(logintoYourAccountText + elementVisible);
  } else {
      cy.visit(Cypress.env("url"));
  }
  

});


it ("TC - 6. Enter correct email address and password", ()=>{


  const emailInputField = testcase2loginuserwithcorrectemailandpasswordpage.getEmailInputField();
  if(emailInputField.should("be.visible"))
  {
    emailInputField.focus();
    emailInputField.type(Cypress.env("email"));
    cy.log( emailInputField + positiveMessage );
  }else{
    cy.visit(Cypress.env("url"));
  }

  const passwordInputField = testcase2loginuserwithcorrectemailandpasswordpage.getPasswordInputField();
  if(passwordInputField.should("be.visible"))
  {
    passwordInputField.focus();
    passwordInputField.type(Cypress.env("password"));
    cy.log( passwordInputField + positiveMessage)
  }else{
    cy.visit(Cypress.env("url"));
  }

});


it (" TC - 7. Click 'login' button", ()=>{

  const loginButton = testcase2loginuserwithcorrectemailandpasswordpage.getLogInButton();
  if(loginButton.should("be.visible"))
  {
    loginButton.click();
    cy.log("Button is Displayed and Clickable ")
  }else{
    cy.visit(Cypress.env("url"));
  }

});


it ("TC - 8. Verify that 'Logged in as username' is visible", ()=>{

  cy.wait(2000);
  const  loggedInasUserNameText = testcase2loginuserwithcorrectemailandpasswordpage.getLoggedInAsUsernameText();

  if( loggedInasUserNameText
    .should("be.visible")
    .should("have.text"," Logged in as " + Cypress.env("name")))
 
   {
     cy.log("Text is Displayed   ")
   }else{
     cy.visit(Cypress.env("url"));
   }


});


it ("TC - 12.Click 'Cart' button ", ()=>{
      
  const  addToCartButton  = testcase14placeorderregisterwhitecheckoutpage.getAddToCartButton();
  if ( addToCartButton .should("be.visible").should("contain.text", "Add to cart")) {
     addToCartButton.click(); 
    cy.log( addToCartButton + elementVisible);
  } else {
      cy.visit(Cypress.env("url"));
  } 

  testcase14placeorderregisterwhitecheckoutpage.getContinueShopingButton().should("be.visible").click();


  const cartButton  = testcase14placeorderregisterwhitecheckoutpage.getCartButton();
  if (cartButton .should("be.visible").should("contain.text"," Cart")) {
    cartButton .click(); 
    cy.log(cartButton  + elementVisible);
  } else {
      cy.visit(Cypress.env("url"));
  }

    
    });


    it ("TC -13. Click 'Proceed To Checkout' button ", ()=>{
    
      const proceedToCheckoutButton  = testcase14placeorderregisterwhitecheckoutpage.getProceedToCheckOutButton();
      if (proceedToCheckoutButton .should("be.visible").should("contain.text","Proceed To Checkout")) {
        proceedToCheckoutButton .click(); 
        cy.log(proceedToCheckoutButton  + elementVisible);
      } else {
          cy.visit(Cypress.env("url"));
      }
    
    
    });


    it ("TC - 14. Verify Address Details and Review Your Order ", ()=>{
    
    
    
    });


    it ("TC - 15. Enter description in comment text area and click 'Place Order' ", ()=>{
    
    
    
    });


    it ("TC - 16. Enter payment details: Name on Card, Card Number, CVC, Expiration date ", ()=>{
    
    
    
    });

    it ("TC - 17. Click 'Pay and Confirm Order' button ", ()=>{
    
    
    
    });

    it ("TC - 18. Verify success message 'Your order has been placed successfully!' ", ()=>{
    
    
    
    });

    it ("TC - 19. Click 'Delete Account' button ", ()=>{
    
    
    
    });

    it ("TC - 20. Verify 'ACCOUNT DELETED!' and click 'Continue' button ", ()=>{
    
    
    
    });


        
  });

    