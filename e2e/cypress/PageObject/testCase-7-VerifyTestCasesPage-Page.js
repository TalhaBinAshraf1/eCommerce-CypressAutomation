const testcase7VerifyTestCasePage_Page = {

    getTestCaseButton: () => cy.get(".nav.navbar-nav > li:nth-of-type(5) > a" , {timeout :1000}),
    getTestCaseText: () => cy.get(".text-center.title" , {timeout :1000}),

    
    };
    module.exports = testcase7VerifyTestCasePage_Page;