const testcase5registeruserwithexistingemailpage = {

    getSignupLoginButton: () => cy.get('.nav.navbar-nav > li:nth-of-type(4) > a' , {timeout :1000}),
    getNewUserSignupText: () => cy.get('.signup-form > h2' , {timeout :1000}),
    getNameInputField: () => cy.get("form[method='post'] > input[name='name']" , {timeout :1000}),
    getEmailInputField: () => cy.get(".signup-form > form[method='post'] > input[name='email']" , {timeout :1000}),
    getSignupButton: () => cy.get(".signup-form > form[method='post'] > .btn.btn-default" , {timeout :1000}),
    getEmailAddressAlreadyExistText: () => cy.get(".signup-form > form[method='post'] > p" , {timeout :1000})


    
    };
    module.exports = testcase5registeruserwithexistingemailpage;
    