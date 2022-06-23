const testcase2loginuserwithcorrectemailandpasswordpage = {

    getSignupLoginButton: () => cy.get('.nav.navbar-nav > li:nth-of-type(4) > a' , {timeout :1000}),
    getLoginToYourAccountText: () => cy.get(".login-form > h2" , {timeout :1000}),
    getPasswordInputField: () => cy.get("form[method='post'] > input[name='password']" , {timeout :1000}),
    getEmailInputField: () => cy.get(".login-form > form[method='post'] > input[name='email']" , {timeout :1000}),
    getLogInButton: () => cy.get(".login-form > form[method='post'] > .btn.btn-default" , {timeout :1000}),
    getEnterAccountInformationText: () => cy.get(".login-form > .text-center.title > b" , {timeout :1000}),
    getLoggedInAsUsernameText: () => cy.get("li:nth-of-type(10) > a" , {timeout :1000}),

    // getNameInputField: () => cy.get("" , {timeout :1000}),
  
    
    };
    module.exports = testcase2loginuserwithcorrectemailandpasswordpage;
    