const testcase14placeorderregisterwhitecheckoutpage  = {


    getAddToCartButton: () => cy.get(".features_items [class='col-sm-4']:nth-child(4) .text-center .add-to-cart" , {timeout :1000}),
    getContinueShopingButton: () => cy.get(".btn.btn-block.btn-success.close-modal" , {timeout :1000}),
    getCartButton: () => cy.get(".nav.navbar-nav > li:nth-of-type(3) > a" , {timeout :1000}),
    getProceedToCheckOutButton: () => cy.get(".btn.btn-default.check_out" , {timeout :1000}),


    

    };
    module.exports = testcase14placeorderregisterwhitecheckoutpage ;