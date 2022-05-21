/// <reference types="cypress" />

import tc1rup, { getAccountCreatedText } from '../../../PageObject/testCase-1-RegisterUserPage';

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
          cy.log(signupLogin + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
    });
        
    it("Verify 'New User Signup!' is visible ", () => {
      const newUserSignup = tc1rup.getNewUserSignupText();
      if (newUserSignup.should("be.visible")) {
          newUserSignup.should("include.text","New User Signup!")
          .and("have.length","1");
          cy.log(newUserSignup + elementVisible);
      } else {
          cy.visit(Cypress.env("url"));
      }
  
  });  

  it ("Enter name and email address", () =>{

    const nameInputField = tc1rup.getNameInputField();
    if(nameInputField.should("be.visible"))
    {
      nameInputField.focus();
      nameInputField.type(Cypress.env("name"));
      cy.log( nameInputField + positiveMessage)
    }else{
      cy.visit(Cypress.env("url"));
    }

    const emailInputField = tc1rup.getEmailInputField();
    if(emailInputField.should("be.visible"))
    {
      emailInputField.focus();
      emailInputField.type(Cypress.env("email"));
      cy.log( emailInputField + positiveMessage );
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

    const mrRedioButton = tc1rup.getMrRedioButton();
    if (mrRedioButton.should("be.visible")) {
      mrRedioButton.click();
      cy.log(" ✔✔✔ Button Is Visible and Clickable ✔✔✔");
    } else {
      cy.log(" ❌❌❌ Button Is not Visible ❌❌❌");
    }

    
    const mrsRedioButton = tc1rup.getMrsRedioButton();
    if (mrsRedioButton.should("be.visible")) {
      mrsRedioButton.click();
      cy.log(" ✔✔✔ Button Is Visible and Clickable ✔✔✔");
    } else {
      cy.visit(Cypress.env("url"));
      cy.log(" ❌❌❌ Button Is not Visible ❌❌❌");
    }

    //Mr redio Button is clicked 
    tc1rup.getMrRedioButton().click();
    cy.wait(2000);

    //Password Inputted 
    const passwordInputField = tc1rup.getPasswordinputField();
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

it("TC - 10. Select checkbox 'Sign up for our newsletter!'", () => {

  const signUpForOurNewsLetterscheckbox = tc1rup.getSignUpForOurNewsLetterCheckbox();
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

it(" TC - 11. Select checkbox 'Receive special offers from our partners!'", () => {

  const recieveSpecialOffersFromOurPartnersCheckbox = tc1rup.getRecivespecialOffersFromOurPartnersCheckbox();
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

it(" TC - 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number ", () => {

  //First Name 
  const firstNameInputField = tc1rup.getFirstNameInputField();
  if(firstNameInputField.should("be.visible"))
  {
    firstNameInputField.focus();
    firstNameInputField.type(firstName);
    cy.log( firstNameInputField + positiveMessage );
  }else{
    cy.visit(Cypress.env("url"));
  }

    //Last Name 
    const lastNameInputField = tc1rup.getLastNameInputField();
    if(lastNameInputField.should("be.visible"))
    {
      lastNameInputField.focus();
      lastNameInputField.type(lastName);
      cy.log( lastNameInputField + positiveMessage );
    }else{
      cy.visit(Cypress.env("url"));
    }


    //Company Name 
    const companyNameInputField = tc1rup.getCompanyNameInputField();
    if(companyNameInputField.should("be.visible"))
    {
      companyNameInputField.focus();
      companyNameInputField.type(companyName);
      cy.log( companyNameInputField + positiveMessage );
    }else{
      cy.visit(Cypress.env("url"));
    }

 
    //Address Name 
    const addressInputField = tc1rup.getAdressInputField();
    if(addressInputField.should("be.visible"))
    {
      addressInputField.focus();
      addressInputField.type(address);
      cy.log( addressInputField + positiveMessage );
    }else{
      cy.visit(Cypress.env("url"));
    } 
    
    //Address2 2 Name

    const address2InputField = tc1rup.getAdressInputField();
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

    const stateInputField = tc1rup.getStateInputField();
    if(stateInputField.should("be.visible"))
    {
      stateInputField.focus();
      stateInputField.type(state);
      cy.log( stateInputField + positiveMessage );
    }else{
      cy.visit(Cypress.env("url"));
    }  

    //City

    const cityInputField = tc1rup.getCityInputField();
    if(cityInputField.should("be.visible"))
    {
      cityInputField.focus();
      cityInputField.type(city);
      cy.log( cityInputField + positiveMessage );
    }else{
      cy.visit(Cypress.env("url"));
    }  

    //Zipcode

    const zipCodeInputField = tc1rup.getZipcodeInputField();
    if(zipCodeInputField.should("be.visible"))
    {
      zipCodeInputField.focus();
      zipCodeInputField.type(zipCode);
      cy.log( zipCodeInputField + positiveMessage );
    }else{
      cy.visit(Cypress.env("url"));
    }    
    
     //Mobile Number 

    const mobileNumberInputField = tc1rup.getMobileNumberInputField();
    if(mobileNumberInputField.should("be.visible"))
    {
      mobileNumberInputField.focus();
      mobileNumberInputField.type(mobileNumber);
      cy.log( mobileNumberInputField + positiveMessage );
    }else{
      cy.visit(Cypress.env("url"));
    } 
});

it(" TC - 13. Click 'Create Account button' ", () => {

    const  createAccountButton = tc1rup.getCreateAccountButton();
  if( createAccountButton.should("be.visible").should("have.text","Create Account").should("have.css", "background-color",).and ("be.colored" ,"#FE980F") )
 
  {
    tc1rup.getCreateAccountButton().click();
    cy.log("Button is Displayed and Clickable ")
  }else{
    cy.visit(Cypress.env("url"));
  }


});

it("  TC - 14. Verify that 'ACCOUNT CREATED!' is visible ", () => {

  const  accountCreatedText = tc1rup.getAccountCreatedText();

  if( accountCreatedText
    .should("be.visible")
    .should("have.text","Account Created!"))
 
   {
     tc1rup.getAccountCreatedText().click()
     cy.log("Text is Displayed   ")
   }else{
     cy.visit(Cypress.env("url"));
   }

});

it(" TC - 15. Click 'Continue' button ", () => {

  const  continueButton = tc1rup.getContinueButton();
   if( continueButton.should("be.visible")
   .should("have.text","Continue")
   .should("have.css", "background-color",)
   .and ("be.colored" ,"#FE980F") )
 
   {
     tc1rup.getContinueButton().click();
     cy.log("Button is Displayed and Clickable ")
   }else{
     cy.visit(Cypress.env("url"));
   }


});

// it(" TC - 16. Verify that 'Logged in as username' is visible ", () => {

//   cy.wait(2000);
//   cy.reload();
//   const  loggedInasUserNameText = tc1rup.getLoggedInAsUsernameText();

//   if( loggedInasUserNameText
//     .should("be.visible")
//     .should("have.text"," Logged in as " + Cypress.env("name")))
 
//    {
//      cy.log("Text is Displayed   ")
//    }else{
//      cy.visit(Cypress.env("url"));
//    }


// });

// it("  TC - 17. Click 'Delete Account' button ", () => {

//   const  deleteButton = tc1rup.getDeleteButton();
//   if( deleteButton.should("be.visible")
//   .should("have.text","Create Account")
//   .should("have.css", "background-color",)
//   .and ("be.colored" ,"#FE980F") )

//   {
//     tc1rup.getDeleteButton().click();
//     cy.log("Button is Displayed and Clickable ")
//   }else{
//     cy.visit(Cypress.env("url"));
//   }



// });


    
 });