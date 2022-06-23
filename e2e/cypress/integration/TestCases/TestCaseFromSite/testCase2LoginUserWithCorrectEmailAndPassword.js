
import  testcase2loginuserwithcorrectemailandpasswordpage  from '../../../PageObject/testCase-2-LoginUserWithCorrectEmailAndPasswordPage';

const positiveMessage = "Inputted Successfully" ; 
const elementVisible = "Is Visible";


describe("Test Case 2: Login User with correct email and password", ()=>{



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


it ("Click on 'Signup / Login' button", ()=>{

    const signupLogin = testcase2loginuserwithcorrectemailandpasswordpage.getSignupLoginButton();
    if (signupLogin.should("be.visible")) {
      signupLogin.click(); 
      cy.log(signupLogin + elementVisible);
    } else {
        cy.visit(Cypress.env("url"));
    }


});


it ("Verify 'Login to your account' is visible", ()=>{

    const logintoYourAccountText = testcase2loginuserwithcorrectemailandpasswordpage.getLoginToYourAccountText();
    if (logintoYourAccountText.should("be.visible")) {
        logintoYourAccountText.should("include.text","Login to your account")
        .and("have.length","1");
        cy.log(logintoYourAccountText + elementVisible);
    } else {
        cy.visit(Cypress.env("url"));
    }
    

});


it ("Enter correct email address and password", ()=>{


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


it ("Click 'login' button", ()=>{

    const loginButton = testcase2loginuserwithcorrectemailandpasswordpage.getLogInButton();
    if(loginButton.should("be.visible"))
    {
      loginButton.click();
      cy.log("Button is Displayed and Clickable ")
    }else{
      cy.visit(Cypress.env("url"));
    }

});


it ("Verify that 'Logged in as username' is visible", ()=>{

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


it ("Click 'Delete Account' button", ()=>{

//  ❌❌   Due to the site vulnarable delete API the "Account delete" not Working properly  ❌❌

  // const  deleteButton = tc1rup.getDeleteButton();
  // if( deleteButton.should("be.visible")
  // .should("have.text","Create Account")
  // .should("have.css", "background-color",)
  // .and ("be.colored" ,"#FE980F") )

  // {
  //   tc1rup.getDeleteButton().click();
  //   cy.log("Button is Displayed and Clickable ")
  // }else{
  //   cy.visit(Cypress.env("url"));
  // }


});



});