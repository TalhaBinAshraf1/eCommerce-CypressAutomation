/// <reference types="cypress" />

import testCase1RegisterUserPage from '../../../PageObject/testCase-1-RegisterUserPage';

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


describe("Test Case 1: Register User", () =>{

    it("Navigate to url 'http://automationexercise.com'",() =>{

      cy.visit('/');
      cy.url().should("equal", Cypress.env("url"));

    });

    it (" Verify that home page is visible successfully ", ()=>{

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
    
    it("Click on 'Signup / Login' button It Should Be visible In this Page  ", () => {
      
       const signupLogin = testCase1RegisterUserPage.getSignupLoginButton();
        if (signupLogin.should("be.visible")) {
          signupLogin.click(); 
          cy.log(signupLogin + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
    });
        
    it("Verify 'New User Signup!' is visible ", () => {
      const newUserSignup = testCase1RegisterUserPage.getNewUserSignupText();
      if (newUserSignup.should("be.visible")) {
          newUserSignup.should("include.text","New User Signup!")
          .and("have.length","1");
          cy.log(newUserSignup + elementVisible);
      } else {
          cy.visit(Cypress.env("url"));
      }
  
  });  

  it ("Enter name and email address", () =>{

    const nameInputField = testCase1RegisterUserPage.getNameInputField();
    if(nameInputField.should("be.visible"))
    {
      nameInputField.focus();
      nameInputField.type(Cypress.env("name"));
      cy.log( nameInputField + positiveMessage)
    }else{
      cy.visit(Cypress.env("url"));
    }

    const emailInputField = testCase1RegisterUserPage.getEmailInputField();
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


it("Verify that 'ENTER ACCOUNT INFORMATION' is visible ", () => {
  
  const enterAccountInformationText = testCase1RegisterUserPage.getEnterAccountInformationText();
  if(enterAccountInformationText.should("be.visible"))
  {
    enterAccountInformationText.should("have.text","Enter Account Information")
    cy.log("Element Not Found ")
  }else{
    cy.visit(Cypress.env("url"));
  }

});


it("Fill details: Title, Name, Email, Password, Date of birth ", () => {

    const mrRedioButton = testCase1RegisterUserPage.getMrRedioButton();
    if (mrRedioButton.should("be.visible")) {
      mrRedioButton.click();
      cy.log(" ✔✔✔ Button Is Visible and Clickable ✔✔✔");
    } else {
      cy.log(" ❌❌❌ Button Is not Visible ❌❌❌");
    }

    
    const mrsRedioButton = testCase1RegisterUserPage.getMrsRedioButton();
    if (mrsRedioButton.should("be.visible")) {
      mrsRedioButton.click();
      cy.log(" ✔✔✔ Button Is Visible and Clickable ✔✔✔");
    } else {
      cy.visit(Cypress.env("url"));
      cy.log(" ❌❌❌ Button Is not Visible ❌❌❌");
    }

    //Mr redio Button is clicked 
    testCase1RegisterUserPage.getMrRedioButton().click();
    cy.wait(2000);

    //Password Inputted 
    const passwordInputField = testCase1RegisterUserPage.getPasswordinputField();
    if (passwordInputField.should("be.visible")) {
      passwordInputField.type(Cypress.env("password"));
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


});

it("Select checkbox 'Sign up for our newsletter!'", () => {

  const signUpForOurNewsLetterscheckbox = testCase1RegisterUserPage.getSignUpForOurNewsLetterCheckbox();
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

});

it("Select checkbox 'Receive special offers from our partners!'", () => {

  const recieveSpecialOffersFromOurPartnersCheckbox = testCase1RegisterUserPage.getRecivespecialOffersFromOurPartnersCheckbox();
  if (recieveSpecialOffersFromOurPartnersCheckbox
    .should("be.visible")
    .should("not.be.checked")
    .should("have.text","Receive special offers from our partners!")) {
    recieveSpecialOffersFromOurPartnersCheckbox.click();
    cy.log(recieveSpecialOffersFromOurPartnersCheckbox + "Button Is Visible & Checked");
  } else {
    cy.log("Button Not Available!");
  }

});

it("Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number ", () => {

  //First Name 
  const firstNameInputField = testCase1RegisterUserPage.getFirstNameInputField();
  if(firstNameInputField.should("be.visible"))
  {
    firstNameInputField.focus();
    firstNameInputField.type(firstName);
    cy.log( firstNameInputField + positiveMessage );
  }else{
    cy.visit(Cypress.env("url"));
  }

    //Last Name 
    const lastNameInputField = testCase1RegisterUserPage.getLastNameInputField();
    if(lastNameInputField.should("be.visible"))
    {
      lastNameInputField.focus();
      lastNameInputField.type(lastName);
      cy.log( lastNameInputField + positiveMessage );
    }else{
      cy.visit(Cypress.env("url"));
    }


    //Company Name 
    const companyNameInputField = testCase1RegisterUserPage.getCompanyNameInputField();
    if(companyNameInputField.should("be.visible"))
    {
      companyNameInputField.focus();
      companyNameInputField.type(companyName);
      cy.log( companyNameInputField + positiveMessage );
    }else{
      cy.visit(Cypress.env("url"));
    }

 
    //Address Name 
    const addressInputField = testCase1RegisterUserPage.getAdressInputField();
    if(addressInputField.should("be.visible"))
    {
      addressInputField.focus();
      addressInputField.type(address);
      cy.log( addressInputField + positiveMessage );
    }else{
      cy.visit(Cypress.env("url"));
    } 
    
    //Address2 2 Name

    const address2InputField = testCase1RegisterUserPage.getAdressInputField();
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

    const stateInputField = testCase1RegisterUserPage.getStateInputField();
    if(stateInputField.should("be.visible"))
    {
      stateInputField.focus();
      stateInputField.type(state);
      cy.log( stateInputField + positiveMessage );
    }else{
      cy.visit(Cypress.env("url"));
    }  

    //City

    const cityInputField = testCase1RegisterUserPage.getCityInputField();
    if(cityInputField.should("be.visible"))
    {
      cityInputField.focus();
      cityInputField.type(city);
      cy.log( cityInputField + positiveMessage );
    }else{
      cy.visit(Cypress.env("url"));
    }  

    //Zipcode

    const zipCodeInputField = testCase1RegisterUserPage.getZipcodeInputField();
    if(zipCodeInputField.should("be.visible"))
    {
      zipCodeInputField.focus();
      zipCodeInputField.type(zipCode);
      cy.log( zipCodeInputField + positiveMessage );
    }else{
      cy.visit(Cypress.env("url"));
    }    
    
     //Mobile Number 

    const mobileNumberInputField = testCase1RegisterUserPage.getMobileNumberInputField();
    if(mobileNumberInputField.should("be.visible"))
    {
      mobileNumberInputField.focus();
      mobileNumberInputField.type(mobileNumber);
      cy.log( mobileNumberInputField + positiveMessage );
    }else{
      cy.visit(Cypress.env("url"));
    } 
});

it("Click 'Create Account button' ", () => {

    const  createAccountButton = testCase1RegisterUserPage.getCreateAccountButton();
  if( createAccountButton.should("be.visible").should("have.text","Create Account").should("have.css", "background-color",).and ("be.colored" ,"#FE980F") )
 
  {
    testCase1RegisterUserPage.getCreateAccountButton().click();
    cy.log("Button is Displayed and Clickable ")
  }else{
    cy.visit(Cypress.env("url"));
  }


});

it("Verify that 'ACCOUNT CREATED!' is visible ", () => {

  const  accountCreatedText = testCase1RegisterUserPage.getAccountCreatedText();

  if( accountCreatedText
    .should("be.visible")
    .should("have.text","Account Created!"))
 
   {
     testCase1RegisterUserPage.getAccountCreatedText().click()
     cy.log("Text is Displayed   ")
   }else{
     cy.visit(Cypress.env("url"));
   }

});

it("Click 'Continue' button ", () => {

  const  continueButton = testCase1RegisterUserPage.getContinueButton();
   if( continueButton.should("be.visible")
   .should("have.text","Continue")
   .should("have.css", "background-color",)
   .and ("be.colored" ,"#FE980F") )
 
   {
     testCase1RegisterUserPage.getContinueButton().click();
     cy.log("Button is Displayed and Clickable ")
   }else{
     cy.visit(Cypress.env("url"));
   }


});

it("Verify that 'Logged in as username' is visible ", () => {

  cy.wait(2000);
  cy.reload();
  const  loggedInasUserNameText = testCase1RegisterUserPage.getLoggedInAsUsernameText();

  if( loggedInasUserNameText
    .should("be.visible")
    .should("have.text"," Logged in as " + Cypress.env("name")))
 
   {
     cy.log("Text is Displayed   ")
   }else{
     cy.visit(Cypress.env("url"));
   }


});

it("Click 'Delete Account' button ", () => {

//  ❌❌   Due to the site vulnarable API the "Account delete" not Working properly  ❌❌

  // const  deleteButton = testCase1RegisterUserPage.getDeleteButton();
  // if( deleteButton.should("be.visible")
  // .should("have.text","Create Account")
  // .should("have.css", "background-color",)
  // .and ("be.colored" ,"#FE980F") )

  // {
  //   testCase1RegisterUserPage.getDeleteButton().click();
  //   cy.log("Button is Displayed and Clickable ")
  // }else{
  //   cy.visit(Cypress.env("url"));
  // }



});


    
 });