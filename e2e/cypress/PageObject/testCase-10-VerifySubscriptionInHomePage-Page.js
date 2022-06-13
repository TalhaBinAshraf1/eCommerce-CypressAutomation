const testCase10Verifysubscriptioninhomepage = {

    
    getSubsCriptionText: () => cy.get(".footer-widget > .container h2" , {timeout :1000}),
    getEmailInputField: () => cy.get("input#susbscribe_email" , {timeout :1000}),
    getSubscribeButton: () => cy.get("button#subscribe" , {timeout :1000}),







    };
    module.exports = testCase10Verifysubscriptioninhomepage;