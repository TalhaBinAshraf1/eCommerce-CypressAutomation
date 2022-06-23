
import testcase5registeruserwithexistingemailpage from '../../../PageObject/testCase-5-RegisterUserWithExistingEmailPage';

import chaiColors from 'chai-colors' 
chai.use(chaiColors)


const positiveMessage = "Inputted Successfully" ; 
const elementVisible = "Is Visible";


describe("Test Case 5: Register User with existing email", ()=>{


    it("Navigate to url 'http://automationexercise.com'",() =>{

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
    
    it("Click on 'Signup / Login' button It Should Be visible In this Page  ", () => {
      
       const signupLogin = testcase5registeruserwithexistingemailpage.getSignupLoginButton();
        if (signupLogin.should("be.visible")) {
          signupLogin.click(); 
          cy.log(signupLogin + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
    });
        
    it("Verify 'New User Signup!' is visible ", () => {
      const newUserSignup = testcase5registeruserwithexistingemailpage.getNewUserSignupText();
      if (newUserSignup.should("be.visible")) {
          newUserSignup.should("include.text","New User Signup!")
          .and("have.length","1");
          cy.log(newUserSignup + elementVisible);
      } else {
          cy.visit(Cypress.env("url"));
      }
  
  });  


    it ("Enter name and already registered email address ", ()=>{
        const nameInputField = testcase5registeruserwithexistingemailpage.getNameInputField();
        if(nameInputField.should("be.visible"))
        {
          nameInputField.focus();
          nameInputField.type(Cypress.env("name"));
          cy.log( nameInputField + positiveMessage)
        }else{
          cy.visit(Cypress.env("url"));
        }
    
        const emailInputField = testcase5registeruserwithexistingemailpage.getEmailInputField();
        if(emailInputField.should("be.visible"))
        {
          emailInputField.focus();
          emailInputField.type(Cypress.env("email"));
          cy.log( emailInputField + positiveMessage );
        }else{
          cy.visit(Cypress.env("url"));
        }
    
    
    });
    
    it("Click 'Signup' button  ", () => {

        const signUpButton = cy.get(".signup-form > form[method='post'] > .btn.btn-default")
        if(signUpButton.should("be.visible"))
        {
          signUpButton.click();
          cy.log("Button is Displayed and Clickable ")
        }else{
          cy.visit(Cypress.env("url"));
        }
      
      });
      
    
    
    it (" Verify error 'Email Address already exist!' is visible ", ()=>{
    
        const emailAddressAlreadyExistText = testcase5registeruserwithexistingemailpage.getEmailAddressAlreadyExistText();
        if (emailAddressAlreadyExistText.should("be.visible")) {
            emailAddressAlreadyExistText.should("include.text","Email Address already exist!");
            cy.log(emailAddressAlreadyExistText + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
    
    });
    
    
    
    });