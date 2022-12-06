const testcase6contactusformpage = {

    getContuctUsButton: () => cy.get(".nav.navbar-nav > li:nth-of-type(8) > a" , {timeout :1000}),
    getGetinTouchText: () => cy.get(".contact-form > .text-center.title" , {timeout :1000}),
    getNameInputField: () => cy.get("input[name='name']" , {timeout :1000}),
    getEmailInputField: () => cy.get("input[name='email']" , {timeout :1000}),
    getSubjectInputField: () => cy.get("input[name='subject']" , {timeout :1000}),
    getMessageInputField: () => cy.get("textarea#message" , {timeout :1000}),
    getChooseFileButton: () => cy.get("input[name='upload_file']" , {timeout :1000}),
    getSubmitButton: () => cy.get("input[name='submit']" , {timeout :1000}),
    getSucessfulText: () => cy.get(".alert.alert-success.status" , {timeout :1000}),

    
    };
    module.exports = testcase6contactusformpage;
    