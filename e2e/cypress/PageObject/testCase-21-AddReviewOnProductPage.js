const testcase21addreviewonproduct = {

    getProductsButton: () => cy.get(".nav.navbar-nav > li:nth-of-type(2) > a" , {timeout :1000}),
    getAllProductText: () => cy.get(".text-center.title" , {timeout :1000}),
    getCatagoryText: () => cy.get(".left-sidebar > h2" , {timeout :1000}),
    getViewProductButton: () => cy.get("div:nth-of-type(2) > .product-image-wrapper > .choose > .nav.nav-justified.nav-pills  a" , {timeout :1000}),
    getNameInputField: () => cy.get("input#name" , {timeout :1000}),
    getemailInputField: () => cy.get("input#email" , {timeout :1000}),
    getReviewInputField: () => cy.get("textarea#review" , {timeout :1000}),
    getSubmitButton: () => cy.get("button#button-review" , {timeout :1000}),
    getWriteYourReviewText: () => cy.get(".nav.nav-tabs  a" , {timeout :1000}),


    };
    module.exports = testcase21addreviewonproduct;