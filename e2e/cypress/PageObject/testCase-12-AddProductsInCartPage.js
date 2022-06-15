const testcase12addproductincartpage = {

    getProductsButton: () => cy.get(".nav.navbar-nav > li:nth-of-type(2) > a" , {timeout :1000}),
    getAllProductText: () => cy.get(".text-center.title" , {timeout :1000}),
    getCatagoryText: () => cy.get(".left-sidebar > h2" , {timeout :1000}),


  
    getFirstProductAddToCartButtonProductPage: () => cy.get("div:nth-of-type(2) > .product-image-wrapper > .single-products > .productinfo.text-center > .add-to-cart.btn.btn-default" , {timeout :1000}),
    getFirstProductName: () => cy.get("tr:nth-of-type(1)  h4 > a" , {timeout :1000}),
    getFirstProductPrice: () => cy.get("tr:nth-of-type(1) > .cart_price > p" , {timeout :1000}),
    getFirstProductQuantity: () => cy.get("tr:nth-of-type(1) > .cart_quantity" , {timeout :1000}),
    getFirstProductTotalPrice: () => cy.get("tr:nth-of-type(1)  .cart_total_price" , {timeout :1000}),


  
    getContinueShopingbutton: () => cy.get(".btn.btn-block.btn-success.close-modal" , {timeout :1000}),
    getViewCartbutton: () => cy.get(".modal-body > p:nth-of-type(2)" , {timeout :1000}),

    getSecondProductAddToCartButton: () => cy.get(".features_items [class='col-sm-4']:nth-child(4) .text-center .add-to-cart" , {timeout :1000}),
    getSecondProductName: () => cy.get("tr:nth-of-type(2)  h4 > a" , {timeout :1000}),
    getSecondProductPrice: () => cy.get("tr:nth-of-type(2) > .cart_price > p" , {timeout :1000}),
    getSecondProductQuantity: () => cy.get("tr:nth-of-type(2) > .cart_quantity" , {timeout :1000}),
    getSecondProductTotalPrice: () => cy.get("tr:nth-of-type(2)  .cart_total_price" , {timeout :1000}),


    };
    module.exports = testcase12addproductincartpage;