const testcase17removeproductfromcartpage  = {


    getAddToCartButton: () => cy.get(".features_items [class='col-sm-4']:nth-child(4) .text-center .add-to-cart" , {timeout :1000}),
    getContinueShopingButton: () => cy.get(".btn.btn-block.btn-success.close-modal" , {timeout :1000}),
    getCartButton: () => cy.get(".nav.navbar-nav > li:nth-of-type(3) > a" , {timeout :1000}),
    getProceedToCheckOutButton: () => cy.get(".btn.btn-default.check_out" , {timeout :1000}),
    getCartQuantityDeleteButton: () => cy.get(".cart_quantity_delete" , {timeout :1000}),
    getCartEmptyText: () => cy.get("#empty_cart .text-center" , {timeout :1000}),

    

    

    };
    module.exports = testcase17removeproductfromcartpage ;