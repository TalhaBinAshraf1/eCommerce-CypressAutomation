import testcase3loginuserwithincorrectemailandpasswordpage from '../../../PageObject/testCase-3-LoginUserWithIncorrectEmailAndPasswordPage';

const positiveMessage = "Inputted Successfully" ; 
const elementVisible = "Is Visible";


describe("Test Case 3: Login User with incorrect email and password", ()=>{


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
    

        const signupLogin = testcase3loginuserwithincorrectemailandpasswordpage.getSignupLoginButton();
        if (signupLogin.should("be.visible")) {
          signupLogin.click(); 
          cy.log(signupLogin + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
    
    });
    
    
    it ("Verify 'Login to your account' is visible", ()=>{
    
        const logintoYourAccountText = testcase3loginuserwithincorrectemailandpasswordpage.getLoginToYourAccountText();
        if (logintoYourAccountText.should("be.visible")) {
            logintoYourAccountText.should("include.text","Login to your account")
            .and("have.length","1");
            cy.log(logintoYourAccountText + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
    
    });
    
    
    it ("Enter incorrect email address and password", ()=>{
    
        
    const emailInputField = testcase3loginuserwithincorrectemailandpasswordpage.getEmailInputField();
    if(emailInputField.should("be.visible"))
    {
      emailInputField.focus();
      emailInputField.type(Cypress.env("wrong-email"));
      cy.log( emailInputField + positiveMessage );
    }else{
      cy.visit(Cypress.env("url"));
    }

    const passwordInputField = testcase3loginuserwithincorrectemailandpasswordpage.getPasswordInputField();
    if(passwordInputField.should("be.visible"))
    {
      passwordInputField.focus();
      passwordInputField.type(Cypress.env("wrong-password"));
      cy.log( passwordInputField + positiveMessage)
    }else{
      cy.visit(Cypress.env("url"));
    }
    
    
    });
    
    
    it ("Click 'login' button", ()=>{
    
        const loginButton = testcase3loginuserwithincorrectemailandpasswordpage.getLogInButton();
        if(loginButton.should("be.visible"))
        {
          loginButton.click();
          cy.log("Button is Displayed and Clickable ")
        }else{
          cy.visit(Cypress.env("url"));
        }
    
    
    });
    
    
    it ("Verify error 'Your email or password is incorrect!' is visible", ()=>{
    
        cy.wait(2000);
        const  yourEmailOrPasswordisIncorrect = testcase3loginuserwithincorrectemailandpasswordpage.getYourEmailOrPasswordIsIncorrectText();
      
        if( yourEmailOrPasswordisIncorrect
          .should("be.visible")
          .should("have.text","Your email or password is incorrect!"))
       
         {
           cy.log("Text is Displayed   ")
         }else{
           cy.visit(Cypress.env("url"));
         }
    
    
    });
    

    
    
    });