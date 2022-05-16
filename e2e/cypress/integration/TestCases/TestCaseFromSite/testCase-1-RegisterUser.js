/// <reference types="cypress" />

import tc1rup from '../../PageObject/testCase-1-RegisterUserPage';


describe("Test Case 1: Register User", () =>{
    it("Navigate to url 'http://automationexercise.com'",() =>{
    cy.visit(Cypress.env("url"));
    cy.url().should("equal", Cypress.env("url"));
    cy.request(Cypress.env("url")).should(
        (response) => {
          expect(response.status).to.eq(200);
        }
      );
      cy.csrfCookies();
    });
    
    it("Click on 'Signup / Login' button It Should Be visible In this Page  ", () => {
      
       const signupLogin = tc1rup.getSignupLoginButton();
        if (signupLogin.should("be.visible")) {
          signupLogin.click(); 
          cy.log(signupLogin + "Is Visible ");
        } else {
            cy.visit(Cypress.env("url"));
        }
    
    });
        
    it("Verify 'New User Signup!' is visible ", () => {
      const newUserSignup = tc1rup.getNewUserSignupText();
      if (newUserSignup.should("be.visible")) {
          newUserSignup.should("include.text","New User Signup!")
          .and("have.length","1");
          cy.log(newUserSignup + "Is Visible ");
      } else {
          cy.visit(Cypress.env("url"));
      }
  
  });  

  it ("Enter name and email address", () =>{

    const nameInputField = tc1rup.getNameInputField();
    if(nameInputField.should("be.visible"))
    {
      nameInputField.focus();
      //nameInputField.contains("Name");
      nameInputField.type("test01289");
      cy.log(" Name Inputted Successfully")
    }else{
      cy.visit(Cypress.env("url"));
    }
    const emailInputField = tc1rup.getEmailInputField();
    if(emailInputField.should("be.visible"))
    {
      emailInputField.focus();
      //cy.get(".signup-form > form[method='post'] > input[name='email']").invoke('val').should('contain', 'Email Address')
      //emailInputField.invoke('attr', 'placeholder').should('contain', 'Email Address')
      emailInputField.type("alexsmkovtkvtzb489799@sgisfg.com");
      cy.log(" Email Inputted Successfully ");
    }else{
      cy.visit(Cypress.env("url"));
    }

  });
  

  // it("should login using the custom commands", () => {
  //   cy.visit("https://admin-demo.nopcommerce.com/");
  //   cy.login("admin@yourstore.com", "admin");
  //   cy.url().should('be.equal', 'https://admin-demo.nopcommerce.com/admin/')
  // });


it("TC - 7. Click 'Signup' button  ", () => {

  const signUpButton = cy.get(".signup-form > form[method='post'] > .btn.btn-default")
  if(signUpButton.should("be.visible"))
  {
    signUpButton.focus();
    signUpButton.click();
    cy.log("Button is Displayed and Clickable ")
  }else{
    cy.visit(Cypress.env("url"));
  }

});


it("TC - 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible ", () => {
  
  const enterAccountInformationText = tc1rup.getEnterAccountInformationText();
  if(enterAccountInformationText.should("be.visible"))
  {
    enterAccountInformationText.should("have.text","Enter Account Information")
    cy.log("Element Not Found ")
  }else{
    cy.visit(Cypress.env("url"));
  }

});


it(" TC - 9. Fill details: Title, Name, Email, Password, Date of birth ", () => {


});

it("TC - 10. Select checkbox 'Sign up for our newsletter!'", () => {


});

it(" TC - 11. Select checkbox 'Receive special offers from our partners!'", () => {


});

it(" TC - 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number ", () => {


});

it(" TC - 13. Click 'Create Account button' ", () => {


});

it("  TC - 14. Verify that 'ACCOUNT CREATED!' is visible ", () => {


});

it(" TC - 15. Click 'Continue' button ", () => {


});

it(" TC - 16. Verify that 'Logged in as username' is visible ", () => {


});

it("  TC - 17. Click 'Delete Account' button ", () => {


});

it(" TC - 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button ", () => {


});

    
 });