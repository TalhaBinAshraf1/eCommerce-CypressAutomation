
import tc2luwcap from '../../../PageObject/testCase-2-LoginUserWithCorrectEmailAndPasswordPage';

const positiveMessage = "Inputted Successfully" ; 
const elementVisible = "Is Visible";


describe("Test Case 2: Login User with correct email and password", ()=>{



it ("TC - 2. Navigate to url 'http://automationexercisTC - e.com'", ()=>{

    cy.visit(Cypress.env("url"));

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


it ("TC - 4. Click on 'Signup / Login' button", ()=>{

    const signupLogin = tc2luwcap.getSignupLoginButton();
    if (signupLogin.should("be.visible")) {
      signupLogin.click(); 
      cy.log(signupLogin + elementVisible);
    } else {
        cy.visit(Cypress.env("url"));
    }


});


it (" TC - 5. Verify 'Login to your account' is visible", ()=>{

    const logintoYourAccountText = tc2luwcap.getLoginToYourAccountText();
    if (logintoYourAccountText.should("be.visible")) {
        logintoYourAccountText.should("include.text","Login to your account")
        .and("have.length","1");
        cy.log(logintoYourAccountText + elementVisible);
    } else {
        cy.visit(Cypress.env("url"));
    }
    

});


it ("TC - 6. Enter correct email address and password", ()=>{


    const emailInputField = tc2luwcap.getEmailInputField();
    if(emailInputField.should("be.visible"))
    {
      emailInputField.focus();
      emailInputField.type(Cypress.env("email"));
      cy.log( emailInputField + positiveMessage );
    }else{
      cy.visit(Cypress.env("url"));
    }

    const passwordInputField = tc2luwcap.getPasswordInputField();
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

    const loginButton = tc2luwcap.getLogInButton();
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
    const  loggedInasUserNameText = tc2luwcap.getLoggedInAsUsernameText();
  
    if( loggedInasUserNameText
      .should("be.visible")
      .should("have.text"," Logged in as " + Cypress.env("name")))
   
     {
       cy.log("Text is Displayed   ")
     }else{
       cy.visit(Cypress.env("url"));
     }


});


it ("TC - 9. Click 'Delete Account' button", ()=>{



});



});