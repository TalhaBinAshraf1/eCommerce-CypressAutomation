import testcase8varifyallproductandproductdetailpage from '../../../PageObject/testCase-8-VerifyAllProductsAndProductDetailPage-Page';


const positiveMessage = "Inputted Successfully" ; 
const elementVisible = "Is Visible";
const viewProductButtonText ="View Product";

describe(" Test Case 8: Verify All Products and product detail page ", ()=>{
    
    it ("Navigate to url 'http://automationexercise.com'", ()=>{
    
      cy.visit('/');
      cy.url().should("equal", Cypress.env("url"));


    });
    
    
    
    it ("Verify that home page is visible successfully ", ()=>{
    
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
    
    
    it ("Click on 'Products' button ", ()=>{
    
        const productButton  = testcase8varifyallproductandproductdetailpage.getProductsButton();
        if (productButton .should("be.visible").should("contain.text"," Products")) {
          productButton .click(); 
          cy.log(productButton  + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
    
    });
    
        
    
    it ("Verify user is navigated to ALL PRODUCTS page successfully ", ()=>{
    
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

    
    it ("The products list is visible ", ()=>{
    
        cy.categoryList("Women");
        cy.categoryList("Men");
        cy.categoryList("Kids");
        //cy.categoryList("")

    
    
    });
        
    
    it ("Click on 'View Product' of first product", ()=>{
    
        const viewProductButton  = testcase8varifyallproductandproductdetailpage.getFirstProductofProductPage();
        if (viewProductButton .should("be.visible").should("contain.text", viewProductButtonText)) {
          viewProductButton .click(); 
          cy.log(viewProductButton  + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
    
    });
    

    it ("User is landed to product detail page ", ()=>{
    
        cy.url().should("equal", Cypress.env("firstproductpageurl"));
  
    });

    
    it ("Verify that detail detail is visible: product name, category, price, availability ", ()=>{
    
    //✅   NAME VALIDATION   ✅

        const productNameText  = testcase8varifyallproductandproductdetailpage.getFirstProductName();
        if (productNameText .should("be.visible").should("contain.text", "Blue Top")) {
    
          cy.log(productNameText  + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }

    //  ✅  Category Validation  ✅ 

        const  category  = testcase8varifyallproductandproductdetailpage.getFirstProductCategory();
        if ( category .should("be.visible").should("contain.text", "Category: Women > Tops")) {
    
          cy.log( category  + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }


     //  ✅  PRODUCT Price Validation  ✅ 

     const  price  = testcase8varifyallproductandproductdetailpage.getFirstProductPrice();
     if ( price .should("be.visible").should("contain.text", "Rs. 500")) {
 
       cy.log( price  + elementVisible);
     } else {
         cy.visit(Cypress.env("url"));
     }             

      //  ✅  PRODUCT Availability Validation  ✅ 

      const  availability  = testcase8varifyallproductandproductdetailpage.getFirstProductAvailability();
      if ( availability .should("be.visible").should("contain.text", " In Stock")) {
  
        cy.log( availability  + elementVisible);
      } else {
          cy.visit(Cypress.env("url"));
      }

    
    });

    

        
    
    });