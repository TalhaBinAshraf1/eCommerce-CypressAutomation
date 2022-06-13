const testcase8varifyallproductandproductdetailpage = {

    getProductsButton: () => cy.get(".nav.navbar-nav > li:nth-of-type(2) > a" , {timeout :1000}),
    getAllProductText: () => cy.get(".text-center.title" , {timeout :1000}),
    getCatagoryText: () => cy.get(".left-sidebar > h2" , {timeout :1000}),
    getFirstProductofProductPage: () => cy.get(":nth-child(3) > .product-image-wrapper > .choose > .nav > li > a" , {timeout :1000}),
    getFirstProductName: () => cy.get(".product-information > h2" , {timeout :1000}),
    getFirstProductCategory: () => cy.get(".product-information > p:nth-of-type(1)" , {timeout :1000}),
    getFirstProductPrice: () => cy.get("span > span:nth-of-type(1)  " , {timeout :1000}),
    getFirstProductAvailability: () => cy.get(" .product-information > p:nth-of-type(2) " , {timeout :1000}),

    



    };
    module.exports = testcase8varifyallproductandproductdetailpage;