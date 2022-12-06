const testcase26verifyscrollupwithoutusingarrowbuttonandscrolldownfunctionality = {

    
    getSubsCriptionText: () => cy.get(".footer-widget > .container h2" , {timeout :1000}),
    getEmailInputField: () => cy.get("input#susbscribe_email" , {timeout :1000}),
    getTopBannerText: () => cy.get(".carousel-inner > div:nth-of-type(1) > div:nth-of-type(1) > h2" , {timeout :1000}),


    };
    module.exports = testcase26verifyscrollupwithoutusingarrowbuttonandscrolldownfunctionality;