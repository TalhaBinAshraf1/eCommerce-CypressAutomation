const testcase8varifyallproductandproductdetailpage = {

    getProductsButton: () => cy.get(".nav.navbar-nav > li:nth-of-type(2) > a" , {timeout :1000}),
    getAllProductText: () => cy.get(".text-center.title" , {timeout :1000}),
    getCatagoryText: () => cy.get(".left-sidebar > h2" , {timeout :1000}),


    
    };
    module.exports = testcase8varifyallproductandproductdetailpage;