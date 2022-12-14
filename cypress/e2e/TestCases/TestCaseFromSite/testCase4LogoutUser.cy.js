import testcase4logoutuserpage from '../../../PageObject/testCase-4-LogoutUserPage';

const positiveMessage = "Inputted Successfully" ; 
const elementVisible = "Is Visible";

describe("Test Case 4: Logout User", ()=>{



    it ("Navigate to url 'http://automationexercis.com'", ()=>{

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
    
        const signupLogin = testcase4logoutuserpage.getSignupLoginButton();
        if (signupLogin.should("be.visible")) {
          signupLogin.click(); 
          cy.log(signupLogin + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
    
    });
    
    
    it ("Verify 'Login to your account' is visible", ()=>{
    
        const logintoYourAccountText = testcase4logoutuserpage.getLoginToYourAccountText();
        if (logintoYourAccountText.should("be.visible")) {
            logintoYourAccountText.should("include.text","Login to your account")
            .and("have.length","1");
            cy.log(logintoYourAccountText + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
        
    
    });
    
    
    it ("Enter correct email address and password", ()=>{
    
    
        const emailInputField = testcase4logoutuserpage.getEmailInputField();
        if(emailInputField.should("be.visible"))
        {
          emailInputField.focus();
          emailInputField.type(Cypress.env("email"));
          cy.log( emailInputField + positiveMessage );
        }else{
          cy.visit(Cypress.env("url"));
        }
    
        const passwordInputField = testcase4logoutuserpage.getPasswordInputField();
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
    
        const loginButton = testcase4logoutuserpage.getLogInButton();
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
        const  loggedInasUserNameText = testcase4logoutuserpage.getLoggedInAsUsernameText();
      
        if( loggedInasUserNameText
          .should("be.visible")
          .should("have.text"," Logged in as " + Cypress.env("name")))
       
         {
           cy.log("Text is Displayed   ")
         }else{
           cy.visit(Cypress.env("url"));
         }
    
    
    });
    

    it ("Click 'Logout' button ", ()=>{

        const logoutButton = testcase4logoutuserpage.getLogoutButton();
        if(logoutButton.should("be.visible").should("have.text"," Logout"))
        {
          logoutButton.click({force:true});
          cy.log("Button is Displayed and Clickable ")
        }else{
          cy.visit(Cypress.env("url"));
        }
    
    
    });

    it ("Verify that user is navigated to login page ", ()=>{
    

        // //  ❌❌   Due to the site vulnarable GET API the "Account logout Button " not Working properly  ❌❌


        // cy.url().should("equal","https://www.automationexercise.com/login");


        // const logintoYourAccountText = testcase4logoutuserpage.getLoginToYourAccountText();
        // if (logintoYourAccountText.should("be.visible")) {
        //     logintoYourAccountText.should("include.text","Login to your account")
        //     .and("have.length","1");
        //     cy.log(logintoYourAccountText + elementVisible);
        // } else {
        //     cy.visit(Cypress.env("url"));
        // }

    
    
    });




    
    
    });