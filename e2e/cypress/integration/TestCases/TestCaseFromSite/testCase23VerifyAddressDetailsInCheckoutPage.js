/// <reference types="cypress" />

import testcase23varifyaddressdetailsincheckoutpage from '../../../PageObject/testCase-23-VerifyAddressDetailsInCheckoutPage-Page';

import chaiColors from 'chai-colors' 
chai.use(chaiColors)


const positiveMessage = "Inputted Successfully" ; 
const elementVisible = "Is Visible";
const firstName = "Alex" ;
const lastName = "Smakov" ;
const companyName = "TestCompany";
const address =  "145-W,Troy,Newyork,USA";
const address2 ="145-W,Newyork ";
const state = "NewYork";
const city = "Troy";
const zipCode =  "1256";
const mobileNumber = "+01235525" ; 

beforeEach(() => {
    Cypress.Cookies.defaults({
        preserve: '',
      })
      cy.csrfCookies();
  });



describe ("Test Case 23: Verify address details in checkout page", ()=>{

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

    it ("Click 'Signup / Login' button", ()=>{
       
       const signupLogin = testcase23varifyaddressdetailsincheckoutpage.getSignupLoginButton();
       if (signupLogin.should("be.visible")) {
         signupLogin.click(); 
         cy.log(signupLogin + elementVisible);
       } else {
           cy.visit(Cypress.env("url"));
       }
    
    });
    
    
    it ("Fill all details in Signup and create account", ()=>{
    
        const newUserSignup = testcase23varifyaddressdetailsincheckoutpage.getNewUserSignupText();
      if (newUserSignup.should("be.visible")) {
          newUserSignup.should("include.text","New User Signup!")
          .and("have.length","1");
          cy.log(newUserSignup + elementVisible);
      } else {
          cy.visit(Cypress.env("url"));
      }

      
      const nameInputField = testcase23varifyaddressdetailsincheckoutpage.getNameInputField();
      if(nameInputField.should("be.visible"))
      {
        nameInputField.focus();
        nameInputField.type(Cypress.env("name2"));
        cy.log( nameInputField + positiveMessage)
      }else{
        cy.visit(Cypress.env("url"));
      }

  
      const emailInputField = testcase23varifyaddressdetailsincheckoutpage.getEmailInputField();
      if(emailInputField.should("be.visible"))
      {
        emailInputField.focus();
        emailInputField.type(Cypress.env("email2"));
        cy.log( emailInputField + positiveMessage );
      }else{
        cy.visit(Cypress.env("url"));
      }
  

      const signUpButton = cy.get(".signup-form > form[method='post'] > .btn.btn-default")
      if(signUpButton.should("be.visible"))
      {
        signUpButton.click();
        cy.log("Button is Displayed and Clickable ")
      }else{
        cy.visit(Cypress.env("url"));
      }


      const enterAccountInformationText = testcase23varifyaddressdetailsincheckoutpage.getEnterAccountInformationText();
      if(enterAccountInformationText.should("be.visible"))
      {
        enterAccountInformationText.should("have.text","Enter Account Information")
        cy.log("Element Not Found ")
      }else{
        cy.visit(Cypress.env("url"));
      }
    
    
      const mrRedioButton = testcase23varifyaddressdetailsincheckoutpage.getMrRedioButton();
      if (mrRedioButton.should("be.visible")) {
        mrRedioButton.click();
        cy.log(" ✔✔✔ Button Is Visible and Clickable ✔✔✔");
      } else {
        cy.log(" ❌❌❌ Button Is not Visible ❌❌❌");
      }
  
      
      const mrsRedioButton = testcase23varifyaddressdetailsincheckoutpage.getMrsRedioButton();
      if (mrsRedioButton.should("be.visible")) {
        mrsRedioButton.click();
        cy.log(" ✔✔✔ Button Is Visible and Clickable ✔✔✔");
      } else {
        cy.visit(Cypress.env("url"));
        cy.log(" ❌❌❌ Button Is not Visible ❌❌❌");
      }
  
      //Mr redio Button is clicked 
      testcase23varifyaddressdetailsincheckoutpage.getMrRedioButton().click();
      cy.wait(2000);
  
      //Password Inputted 
      const passwordInputField = testcase23varifyaddressdetailsincheckoutpage.getPasswordinputField();
      if (passwordInputField.should("be.visible")) {
        passwordInputField.type(Cypress.env("password2"));
        cy.log(" ✔✔✔ Input Field Is Visible and Inputted SucessFully ✔✔✔");
      } else {
        cy.visit(Cypress.env("url"));
        cy.log(" ❌❌❌ Input Field Is not Visible ❌❌❌");
      }
  
  
  // Date of birth Dropdown 
  
  //Day Dropdown 
  
  cy.dayDropdown("1","1");
  cy.dayDropdown("2","2");
  cy.dayDropdown("3","3");
  cy.dayDropdown("4","4");
  cy.dayDropdown("5","5");
  cy.dayDropdown("6","6");
  cy.dayDropdown("7","7");
  cy.dayDropdown("8","8");
  cy.dayDropdown("9","9");
  cy.dayDropdown("10","10");
  cy.dayDropdown("11","11");
  cy.dayDropdown("12","12");
  cy.dayDropdown("13","13");
  cy.dayDropdown("14","14");
  cy.dayDropdown("15","15");
  cy.dayDropdown("16","16");
  cy.dayDropdown("17","17");
  
  
  //MonthDropdown 
  
  cy.monthDropdown("January","1");
  cy.monthDropdown("February","2");
  cy.monthDropdown("March","3");
  cy.monthDropdown("April","4");
  cy.monthDropdown("May","5");
  cy.monthDropdown("June","6");
  cy.monthDropdown("July","7");
  cy.monthDropdown("August","8");
  cy.monthDropdown("September","9");
  cy.monthDropdown("October","10");
  cy.monthDropdown("November","11");
  cy.monthDropdown("December","12");
  
  //Year Dropdown 
  
  cy.yearDropdown("2021","2021");
  cy.yearDropdown("2020","2020");
  cy.yearDropdown("2019","2019");
  cy.yearDropdown("2018","2018");
  cy.yearDropdown("2017","2017");
  cy.yearDropdown("2016","2016");
  cy.yearDropdown("2015","2015");
  cy.yearDropdown("2014","2014");
  cy.yearDropdown("1996","1996");
  cy.yearDropdown("1995","1995");
  cy.yearDropdown("1994","1994");
  cy.yearDropdown("1993","1993");
  cy.yearDropdown("1992","1992");
  
  //Select the Date of Birth 
  cy.dayDropdown("13","13");
  cy.monthDropdown("May","5");
  cy.yearDropdown("1994","1994");
  

  const signUpForOurNewsLetterscheckbox = testcase23varifyaddressdetailsincheckoutpage.getSignUpForOurNewsLetterCheckbox();
  if (signUpForOurNewsLetterscheckbox
    .should("be.visible")
    .should("not.be.checked")
    .should("have.text","Sign up for our newsletter!"))
     {
    signUpForOurNewsLetterscheckbox.click();
    cy.log(signUpForOurNewsLetterscheckbox + "Button Is Visible & Checked");
  } else {
    cy.log("Button Not Available!");
  }


  const recieveSpecialOffersFromOurPartnersCheckbox = testcase23varifyaddressdetailsincheckoutpage.getRecivespecialOffersFromOurPartnersCheckbox();
  if (recieveSpecialOffersFromOurPartnersCheckbox
    .should("be.visible")
    .should("not.be.checked")
    .should("have.text","Receive special offers from our partners!")) {
    recieveSpecialOffersFromOurPartnersCheckbox.click();
    cy.log(recieveSpecialOffersFromOurPartnersCheckbox + "Button Is Visible & Checked");
  } else {
    cy.log("Button Not Available!");
  }


   //First Name 
   const firstNameInputField = testcase23varifyaddressdetailsincheckoutpage.getFirstNameInputField();
   if(firstNameInputField.should("be.visible"))
   {
     firstNameInputField.focus();
     firstNameInputField.type(firstName);
     cy.log( firstNameInputField + positiveMessage );
   }else{
     cy.visit(Cypress.env("url"));
   }
 
     //Last Name 
     const lastNameInputField = testcase23varifyaddressdetailsincheckoutpage.getLastNameInputField();
     if(lastNameInputField.should("be.visible"))
     {
       lastNameInputField.focus();
       lastNameInputField.type(lastName);
       cy.log( lastNameInputField + positiveMessage );
     }else{
       cy.visit(Cypress.env("url"));
     }
 
 
     //Company Name 
     const companyNameInputField = testcase23varifyaddressdetailsincheckoutpage.getCompanyNameInputField();
     if(companyNameInputField.should("be.visible"))
     {
       companyNameInputField.focus();
       companyNameInputField.type(companyName);
       cy.log( companyNameInputField + positiveMessage );
     }else{
       cy.visit(Cypress.env("url"));
     }
 
  
     //Address Name 
     const addressInputField = testcase23varifyaddressdetailsincheckoutpage.getAdressInputField();
     if(addressInputField.should("be.visible"))
     {
       addressInputField.focus();
       addressInputField.type(address);
       cy.log( addressInputField + positiveMessage );
     }else{
       cy.visit(Cypress.env("url"));
     } 
     
     //Address2 2 Name
 
     const address2InputField = testcase23varifyaddressdetailsincheckoutpage.getAdressInputField();
     if(address2InputField.should("be.visible"))
     {
       address2InputField.focus();
       address2InputField.type(address2);
       cy.log( address2InputField + positiveMessage );
     }else{
       cy.visit(Cypress.env("url"));
     }  
     
     //Country 
     cy.countryDropdown("India","India");
     cy.countryDropdown("United States","United States");
     cy.countryDropdown("Canada","Canada");
     cy.countryDropdown("Australia","Australia");
     cy.countryDropdown("New Zealand","New Zealand");
     cy.countryDropdown("Singapore","Singapore");
     cy.countryDropdown("United States","United States");
 
     //State 
 
     const stateInputField = testcase23varifyaddressdetailsincheckoutpage.getStateInputField();
     if(stateInputField.should("be.visible"))
     {
       stateInputField.focus();
       stateInputField.type(state);
       cy.log( stateInputField + positiveMessage );
     }else{
       cy.visit(Cypress.env("url"));
     }  
 
     //City
 
     const cityInputField = testcase23varifyaddressdetailsincheckoutpage.getCityInputField();
     if(cityInputField.should("be.visible"))
     {
       cityInputField.focus();
       cityInputField.type(city);
       cy.log( cityInputField + positiveMessage );
     }else{
       cy.visit(Cypress.env("url"));
     }  
 
     //Zipcode
 
     const zipCodeInputField = testcase23varifyaddressdetailsincheckoutpage.getZipcodeInputField();
     if(zipCodeInputField.should("be.visible"))
     {
       zipCodeInputField.focus();
       zipCodeInputField.type(zipCode);
       cy.log( zipCodeInputField + positiveMessage );
     }else{
       cy.visit(Cypress.env("url"));
     }    
     
      //Mobile Number 
 
     const mobileNumberInputField = testcase23varifyaddressdetailsincheckoutpage.getMobileNumberInputField();
     if(mobileNumberInputField.should("be.visible"))
     {
       mobileNumberInputField.focus();
       mobileNumberInputField.type(mobileNumber);
       cy.log( mobileNumberInputField + positiveMessage );
     }else{
       cy.visit(Cypress.env("url"));
     }

     const  createAccountButton = testcase23varifyaddressdetailsincheckoutpage.getCreateAccountButton();
     if( createAccountButton.should("be.visible").should("have.text","Create Account").should("have.css", "background-color",).and ("be.colored" ,"#FE980F") )
    
     {
       testcase23varifyaddressdetailsincheckoutpage.getCreateAccountButton().click();
       cy.log("Button is Displayed and Clickable ")
     }else{
       cy.visit(Cypress.env("url"));
     }
    });

    it ("Verify 'ACCOUNT CREATED!' and click 'Continue' button", ()=>{
    
const  accountCreatedText = testcase23varifyaddressdetailsincheckoutpage.getAccountCreatedText();

  if( accountCreatedText
    .should("be.visible")
    .should("have.text","Account Created!"))
 
   {
     testcase23varifyaddressdetailsincheckoutpage.getAccountCreatedText().click()
     cy.log("Text is Displayed   ")
   }else{
     cy.visit(Cypress.env("url"));
   }

   const  continueButton = testcase23varifyaddressdetailsincheckoutpage.getContinueButton();
   if( continueButton.should("be.visible")
   .should("have.text","Continue")
   .should("have.css", "background-color",)
   .and ("be.colored" ,"#FE980F") )
 
   {
     testcase23varifyaddressdetailsincheckoutpage.getContinueButton().click();
     cy.log("Button is Displayed and Clickable ")
   }else{
     cy.visit(Cypress.env("url"));
   }

    });
    
    
it ("Verify ' Logged in as username' at top", ()=>{
    

  const  loggedInasUserNameText = testcase23varifyaddressdetailsincheckoutpage.getLoggedInAsUsernameText();

  if( loggedInasUserNameText
    .should("be.visible")
    .should("have.text"," Logged in as " + Cypress.env("name2")))
 
   {
     cy.log("Text is Displayed   ")
   }else{
     cy.visit(Cypress.env("url"));
   }


    
    });

    it ("Add products to cart", ()=>{
    
    
    });
    
    
    it ("Click 'Cart' button", ()=>{
    
    
    });

    it ("Verify that cart page is displayed", ()=>{
    
    
    });

    it ("Click Proceed To Checkout", ()=>{
    
    
    });

    it ("Verify that the delivery address is same address filled at the time registration of account", ()=>{
    
    
    });

    it ("Verify that the billing address is same address filled at the time registration of account", ()=>{
    
    
    });

    it ("Click 'Delete Account' button", ()=>{
    
    
    });
    
    it ("Verify 'ACCOUNT DELETED!' and click 'Continue' button", ()=>{
    
    
    });


    
    });