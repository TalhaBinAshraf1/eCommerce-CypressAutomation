const testcase23varifyaddressdetailsincheckoutpage = {

    getSignupLoginButton: () => cy.get('.nav.navbar-nav > li:nth-of-type(4) > a' , {timeout :1000}),
    getNewUserSignupText: () => cy.get('.signup-form > h2' , {timeout :1000}),
    getNameInputField: () => cy.get("form[method='post'] > input[name='name']" , {timeout :1000}),
    getEmailInputField: () => cy.get(".signup-form > form[method='post'] > input[name='email']" , {timeout :1000}),
    getSignupButton: () => cy.get(".signup-form > form[method='post'] > .btn.btn-default" , {timeout :1000}),
    getEnterAccountInformationText: () => cy.get(".login-form > .text-center.title > b" , {timeout :1000}),
    getMrRedioButton: () => cy.get("div:nth-of-type(1) > .top" , {timeout :1000}),
    getMrsRedioButton: () => cy.get("div:nth-of-type(2) > .top" , {timeout :1000}),
    getPasswordinputField: () => cy.get("input#password" , {timeout :1000}),
    getSignUpForOurNewsLetterCheckbox: () => cy.get("div:nth-of-type(6) > label" , {timeout :1000}),
    getRecivespecialOffersFromOurPartnersCheckbox: () => cy.get("div:nth-of-type(7) > label" , {timeout :1000}),
    getAddressinformationText: () => cy.get("form[method='post'] > .text-center.title > b" , {timeout :1000}),
    getFirstNameInputField: () => cy.get("input#first_name" , {timeout :1000}),
    getLastNameInputField: () => cy.get("input#last_name" , {timeout :1000}),
    getCompanyNameInputField: () => cy.get("input#company" , {timeout :1000}),
    getAdressInputField: () => cy.get("input[name='address1']" , {timeout :1000}),
    getAdress2InputField: () => cy.get("input[name='address2']" , {timeout :1000}),
    getStateInputField: () => cy.get("input#state" , {timeout :1000}),
    getCityInputField: () => cy.get("input#city" , {timeout :1000}),
    getZipcodeInputField: () => cy.get("input#zipcode" , {timeout :1000}),
    getMobileNumberInputField: () => cy.get("input#mobile_number" , {timeout :1000}),
    getCreateAccountButton: () => cy.get(".login-form > form > .btn" , {timeout :1000}),
    getAccountCreatedText: () => cy.get(".text-center.title > b" , {timeout :1000}),
    getContinueButton: () => cy.get(".btn.btn-primary" , {timeout :1000}),
    getLoggedInAsUsernameText: () => cy.get("li:nth-of-type(10) > a" , {timeout :1000}),
    getDeleteButton: () => cy.get(".nav.navbar-nav > li:nth-of-type(5)" , {timeout :1000}),
    

    };
    module.exports = testcase23varifyaddressdetailsincheckoutpage;