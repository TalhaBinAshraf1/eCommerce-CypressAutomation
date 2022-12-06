import chaiColors from 'chai-colors' 
chai.use(chaiColors)

import testcase9searchproductpage from '../../../PageObject/testCase-9-SearchProductPage';


const positiveMessage = "Inputted Successfully" ; 
const elementVisible = "Is Visible";
const viewProductButtonText ="View Product";
const productname =  "Blue Top" ;
const searchproductText = "Searched Products";


describe(" Test Case 9: Search Product ", ()=>{


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
    
        const productButton  = testcase9searchproductpage.getProductsButton();
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

        const allProductText = testcase9searchproductpage.getAllProductText();
        if (allProductText.should("be.visible")) {
            allProductText.should("include.text","All Products");
            cy.log(allProductText + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }

        cy.scrollTo(0, 800);
    
        const catagoryText = testcase9searchproductpage.getCatagoryText();
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

        
    
    it ("Enter product name in search input and click search button ", ()=>{

        // Blue Top
            
        const searchInputField = testcase9searchproductpage.getSearchInputField();
        if (searchInputField.should("be.visible")) {
            searchInputField.type(productname);
            cy.log(searchInputField + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
        testcase9searchproductpage.getSearchButton().should("be.visible").click();

    
    });


        
    
    it ("Verify 'SEARCHED PRODUCTS' is visible ", ()=>{

        cy.scrollTo(0, 800);

//   ✅    Searched Product Text validation   ✅ 

        const  searchedProductText = testcase9searchproductpage.getSearchedProductsText();
        if ( searchedProductText.should("be.visible")) {
            searchedProductText.should("have.text", searchproductText)
            cy.log( searchedProductText + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
//   ✅    Product name -> " Blue Top" validation ✅ 

        const  productText = testcase9searchproductpage.getBlueTopText();
        if ( productText.should("be.visible")) {
            productText.should("have.text", productname );
            cy.log( productText + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }

    
    
    });

        
    
    });