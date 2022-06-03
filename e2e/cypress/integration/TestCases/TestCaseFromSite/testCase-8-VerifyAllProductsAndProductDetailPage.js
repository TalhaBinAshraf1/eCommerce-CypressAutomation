import chaiColors from 'chai-colors' 
chai.use(chaiColors)

import testcase8varifyallproductandproductdetailpage from '../../../PageObject/testCase-8-VerifyAllProductsAndProductDetailPage-Page';


const positiveMessage = "Inputted Successfully" ; 
const elementVisible = "Is Visible";


describe(" Test Case 8: Verify All Products and product detail page ", ()=>{
    
    it ("TC - 2. Navigate to url 'http://automationexercise.com'", ()=>{
    
        cy.visit(Cypress.env("url"));
        cy.url().should("equal", Cypress.env("url"));


    });
    
    
    
    it ("TC - 3. Verify that home page is visible successfully ", ()=>{
    
        cy.request(Cypress.env("url")).should(
            (response) => {
              expect(response.status).to.eq(200);
            }
          );
          cy.csrfCookies();

        //             ✅  Navbar Validation  ✅

        cy.navbarItems(" Home");
        cy.navbarItems(" Products");
        cy.navbarItems(" Cart");
        cy.navbarItems(" Signup / Login");
        cy.navbarItems(" Test Cases");
        cy.navbarItems(" API Testing");
        cy.navbarItems(" Contact us");

    
    });
    
    
    it ("TC - 4. Click on 'Products' button ", ()=>{
    
        const productButton  = testcase8varifyallproductandproductdetailpage.getProductsButton();
        if (productButton .should("be.visible").should("contain.text"," Products")) {
          productButton .click(); 
          cy.log(productButton  + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
    
    });
    
        
    
    it ("TC - 5. Verify user is navigated to ALL PRODUCTS page successfully ", ()=>{
    
        cy.url().should("equal", Cypress.env("productpageurl"));
        cy.request(Cypress.env("productpageurl")).should(
            (response) => {
              expect(response.status).to.eq(200);
            }
          );

        const allProductText = testcase8varifyallproductandproductdetailpage.getAllProductText();
        if (allProductText.should("be.visible")) {
            allProductText.should("include.text","All Products");
            cy.log(allProductText + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
        const catagoryText = testcase8varifyallproductandproductdetailpage.getCatagoryText();
        if (catagoryText.should("be.visible")) {
            catagoryText.should("include.text","Category");
            cy.log(catagoryText + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    

    
    });


        
    
    it ("TC - 6. The products list is visible ", ()=>{
    
        cy.categoryList("Women");
        cy.categoryList("Men");
        cy.categoryList("Kids");
        //cy.categoryList("")

    
    
    });


        
    
    it ("TC -7. Click on 'View Product' of first product", ()=>{
    
    
    
    });
    

    it ("TC - 8. User is landed to product detail page ", ()=>{
    
    
    
    });


        
    
    it ("TC 9. Verify that detail detail is visible: product name, category, price, availability, condition, brand ", ()=>{
    
    
    
    });

    

        
    
    });