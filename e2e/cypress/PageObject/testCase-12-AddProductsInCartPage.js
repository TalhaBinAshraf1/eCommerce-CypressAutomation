const testcase12addproductincartpage = {

    getProductsButton: () => cy.get(".nav.navbar-nav > li:nth-of-type(2) > a" , {timeout :1000}),
    getAllProductText: () => cy.get(".text-center.title" , {timeout :1000}),
    getCatagoryText: () => cy.get(".left-sidebar > h2" , {timeout :1000}),


    getFirstProductAddToCartButtonProductPage: () => cy.get("div:nth-of-type(2) > .product-image-wrapper > .single-products > .productinfo.text-center > .add-to-cart.btn.btn-default" , {timeout :1000}),
    getFirstProductName: () => cy.get(".product-information > h2" , {timeout :1000}),
    getFirstProductCategory: () => cy.get(".product-information > p:nth-of-type(1)" , {timeout :1000}),
    getFirstProductPrice: () => cy.get("span > span:nth-of-type(1)  " , {timeout :1000}),
    getFirstProductAvailability: () => cy.get(" .product-information > p:nth-of-type(2) " , {timeout :1000}),
    getSearchInputField: () => cy.get("input#search_product" , {timeout :1000}),
    getSearchButton: () => cy.get("button#submit_search" , {timeout :1000}),
    getSearchedProductsText: () => cy.get(".text-center.title" , {timeout :1000}),
    getBlueTopText: () => cy.get(".productinfo.text-center > p" , {timeout :1000}),

    getContinueShopingbutton: () => cy.get(".btn.btn-block.btn-success.close-modal" , {timeout :1000}),
    getViewCartbutton: () => cy.get(".nav.navbar-nav > li:nth-of-type(3) > a" , {timeout :1000}),

    getSecondProductAddToCartButton: () => cy.get(".features_items [class='col-sm-4']:nth-child(4) .text-center .add-to-cart" , {timeout :1000}),
    

    };
    module.exports = testcase12addproductincartpage;