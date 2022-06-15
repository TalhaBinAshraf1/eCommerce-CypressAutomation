const testcase13varifyproductqwantityincartpage  = {

    getProductsButton: () => cy.get(".nav.navbar-nav > li:nth-of-type(2) > a" , {timeout :1000}),
    getAllProductText: () => cy.get(".text-center.title" , {timeout :1000}),
    getViewProductButton: () => cy.get("div:nth-of-type(8) > .product-image-wrapper > .choose > .nav.nav-justified.nav-pills  a" , {timeout :1000}),

    getProductName: () => cy.get(".product-information > h2" , {timeout :1000}),
    getProductPrice: () => cy.get(".product-information span:nth-child(5) span" , {timeout :1000}),
    getProductQuantityInputfield: () => cy.get("input#quantity" , {timeout :1000}),
    getProductQuantityIncressButton: () => cy.get("" , {timeout :1000}),
    getProductQuantityDecressButton: () => cy.get("" , {timeout :1000}),

    getAddToCartButton: () => cy.get(".btn.btn-default.cart" , {timeout :1000}),
    getViewCartButton: () => cy.get(".modal-body > p:nth-of-type(2)" , {timeout :1000}),
    getProductQuantityInCartPage: () => cy.get(".cart_quantity" , {timeout :1000}),
   


    };
    module.exports = testcase13varifyproductqwantityincartpage ;