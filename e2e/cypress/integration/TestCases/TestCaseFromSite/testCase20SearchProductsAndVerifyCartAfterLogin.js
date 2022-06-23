/// <reference types="cypress" />


import testcase20searchproductandvarifycartafterlogin from '../../../PageObject/testCase-20-SearchProductsAndVerifyCartAfterLoginPage';
import testcase3loginuserwithincorrectemailandpasswordpage from '../../../PageObject/testCase-3-LoginUserWithIncorrectEmailAndPasswordPage';
import testcase14placeorderregisterwhitecheckoutpage from "../../../PageObject/testCase-14-PlaceOrderRegisterWhileCheckoutPage" ;


const elementVisible = "Is Visible";
const productname =  "Blue Top" ;
const searchproductText = "Searched Products";
const positiveMessage = "Inputted Successfully" ; 

describe ("Test Case 20: Search Products and Verify Cart After Login", ()=>{
    
    it ("Navigate to url 'http://automationexercise.com'", ()=>{
    
        cy.visit('/');
        cy.url().should("equal", Cypress.env("url"));
    
    });

    it ("Click on 'Products' button", ()=>{
    
        const productButton  = testcase20searchproductandvarifycartafterlogin.getProductsButton();
        if (productButton .should("be.visible").should("contain.text"," Products")) {
          productButton .click(); 
          cy.log(productButton  + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
    });
    
    
    it ("Verify user is navigated to ALL PRODUCTS page successfully", ()=>{
    
        cy.url().should("equal", Cypress.env("productpageurl"));
        cy.request(Cypress.env("productpageurl")).should(
            (response) => {
              expect(response.status).to.eq(200);
            }
          );

        const allProductText = testcase20searchproductandvarifycartafterlogin.getAllProductText();
        if (allProductText.should("be.visible")) {
            allProductText.should("include.text","All Products");
            cy.log(allProductText + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }

        cy.scrollTo(0, 800);
    
        const catagoryText = testcase20searchproductandvarifycartafterlogin.getCatagoryText();
        if (catagoryText.should("be.visible")) {
            catagoryText.should("include.text","Category");
            cy.log(catagoryText + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
    
    });

    it ("Enter product name in search input and click search button", ()=>{
    
          // Blue Top
            
          const searchInputField = testcase20searchproductandvarifycartafterlogin.getSearchInputField();
          if (searchInputField.should("be.visible")) {
              searchInputField.type(productname);
              cy.log(searchInputField + elementVisible);
          } else {
              cy.visit(Cypress.env("url"));
          }
      
          testcase20searchproductandvarifycartafterlogin.getSearchButton().should("be.visible").click();
  
    
    });
    
    
    it ("Verify 'SEARCHED PRODUCTS' is visible", ()=>{

        cy.scrollTo(0, 800);

        //   ✅    Searched Product Text validation   ✅ 
        
                const  searchedProductText = testcase20searchproductandvarifycartafterlogin.getSearchedProductsText();
                if ( searchedProductText.should("be.visible")) {
                    searchedProductText.should("have.text", searchproductText)
                    cy.log( searchedProductText + elementVisible);
                } else {
                    cy.visit(Cypress.env("url"));
                }
            

        
            
    
    });

    it ("Verify all the products related to search are visible", ()=>{
    
                //   ✅    Product name -> " Blue Top" validation ✅ 
        
                const  productText = testcase20searchproductandvarifycartafterlogin.getBlueTopText();
                if ( productText.should("be.visible")) {
                    productText.should("have.text", productname );
                    cy.log( productText + elementVisible);
                } else {
                    cy.visit(Cypress.env("url"));
                }
    
    });
    
    
    it ("Add those products to cart", ()=>{

        const firstProductAddToCartButton = testcase20searchproductandvarifycartafterlogin.getFirstProductAddToCartButtonProductPage();
        if (firstProductAddToCartButton.should("be.visible").should("include.text","Add to cart")) {
            
            testcase20searchproductandvarifycartafterlogin.getFirstProductAddToCartButtonProductPage().click();
            cy.log(firstProductAddToCartButton + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }

        cy.wait(3000)
           //  ✅  continue Shoping Button validation  ✅ 

    const viewCart = testcase20searchproductandvarifycartafterlogin.getViewCartbutton();

        if (viewCart.should("be.visible")) {
            viewCart.should("include.text","View Cart");
            testcase20searchproductandvarifycartafterlogin.getViewCartbutton().click();
            cy.log(viewCart + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
    
    });

 
    
    it ("Click 'Signup / Login' button and submit login details", ()=>{
    
   const signupLogin = testcase3loginuserwithincorrectemailandpasswordpage.getSignupLoginButton();
        if (signupLogin.should("be.visible")) {
          signupLogin.click(); 
          cy.log(signupLogin + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
     
   const emailInputField = testcase3loginuserwithincorrectemailandpasswordpage.getEmailInputField();
   if(emailInputField.should("be.visible"))
   {
     emailInputField.focus();
     emailInputField.type(Cypress.env("wrong-email"));
     cy.log( emailInputField + positiveMessage );
   }else{
     cy.visit(Cypress.env("url"));
   }

   const passwordInputField = testcase3loginuserwithincorrectemailandpasswordpage.getPasswordInputField();
   if(passwordInputField.should("be.visible"))
   {
     passwordInputField.focus();
     passwordInputField.type(Cypress.env("wrong-password"));
     cy.log( passwordInputField + positiveMessage)
   }else{
     cy.visit(Cypress.env("url"));
   }
    
    });

    it ("Again, go to Cart page", ()=>{
    
        
        const cartButton  = testcase14placeorderregisterwhitecheckoutpage.getCartButton();
        if (cartButton .should("be.visible").should("contain.text"," Cart")) {
          cartButton .click(); 
          cy.log(cartButton  + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }

        cy.url().should("equal", Cypress.env("cartpageurl"));


    
    });
    
    
    it ("Verify that those products are visible in cart after login as well", ()=>{
    
        //     ❌ Now,It doesn't Work.❌ 
        //      ❌Need to Inform the devoloper ❌ 
    
    });
    
    });