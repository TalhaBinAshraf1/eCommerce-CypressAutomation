const testcase22addtocartromrecommendeditems = {

    getProductsButton: () => cy.get(".nav.navbar-nav > li:nth-of-type(2) > a" , {timeout :1000}),
    getRecomandedItemText: () => cy.get(".recommended_items > .text-center.title" , {timeout :1000}),
    getAddTocartButton: () => cy.get("div:nth-of-type(1) > div:nth-of-type(1) > .product-image-wrapper > .single-products > .productinfo.text-center > .add-to-cart.btn.btn-default" , {timeout :1000}),
    getViewCartButton1: () => cy.get(".modal-body .text-center:nth-of-type(2)" , {timeout :1000}),

    getBlueTop: () => cy.get("h4 > a" , {timeout :1000}),

    

    };
    module.exports = testcase22addtocartromrecommendeditems;