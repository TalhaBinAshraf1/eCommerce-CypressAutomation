const  testcase19viewandcartbrandproductpage  = {

    getPoloBrand: () => cy.get(".nav.nav-pills.nav-stacked > li:nth-of-type(1) > a" , {timeout :1000}),
    getProductsButton: () => cy.get(".nav.navbar-nav > li:nth-of-type(2) > a" , {timeout :1000}),
    getPoloBrandProductText: () => cy.get(".text-center.title" , {timeout :1000}),

    getHnmBrand: () => cy.get(".nav.nav-pills.nav-stacked > li:nth-of-type(2) > a" , {timeout :1000}),
    getHnmBrandProductText: () => cy.get(".text-center.title" , {timeout :1000}),

    



    
    };
    module.exports =  testcase19viewandcartbrandproductpage ;