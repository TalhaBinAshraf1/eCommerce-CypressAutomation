
import testcase12addproductincartpage from "../../../PageObject/testCase-12-AddProductsInCartPage"


const positiveMessage = "Inputted Successfully" ; 
const elementVisible = "Is Visible";
const subscription = "Subscription" ;


describe(" Test Case 12: Add Products in Cart ", ()=>{

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
    
    it("TC - 4. Click on 'Products' button ", ()=>{
    
        const productButton  = testcase12addproductincartpage.getProductsButton();
        if (productButton .should("be.visible").should("contain.text"," Products")) {
          productButton .click(); 
          cy.log(productButton  + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
    
    });
    
    
    it("TC - 5. Verify user is navigated to ALL PRODUCTS page successfully ", ()=>{
    
        cy.visit(Cypress.env("productpageurl"));
        cy.url().should("equal", Cypress.env("productpageurl"));
        cy.request(Cypress.env("productpageurl")).should(
            (response) => {
              expect(response.status).to.eq(200);
            }
          );

        const allProductText = testcase12addproductincartpage.getAllProductText();
        if (allProductText.should("be.visible")) {
            allProductText.should("include.text","All Products");
            cy.log(allProductText + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
        const catagoryText = testcase12addproductincartpage.getCatagoryText();
        if (catagoryText.should("be.visible")) {
            catagoryText.should("include.text","Category");
            cy.log(catagoryText + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }

    
    });


    // it(" TC -6. Hover over first product and click 'Add to cart' ", ()=>{

    
    // const firstProductAddToCartButton = testcase12addproductincartpage.getFirstProductAddToCartButtonProductPage();
    //     if (firstProductAddToCartButton.should("be.visible")) {
    //         firstProductAddToCartButton.should("include.text","Add to cart");
    //         cy.wait(2000);
    //         testcase12addproductincartpage.getFirstProductAddToCartButtonProductPage().click();

    //         cy.log(firstProductAddToCartButton + elementVisible);
    //     } else {
    //         cy.visit(Cypress.env("url"));
    //     }
    // });
    

    
    // it("TC - 7. Click 'Continue Shopping' button ", ()=>{
    

    //     const continueShopingButton = testcase12addproductincartpage.getContinueShopingbutton();

    //     if (continueShopingButton.should("be.visible")) {
    //         continueShopingButton.should("include.text","Continue Shopping");
    //         continueShopingButton.click();
    //         cy.log(continueShopingButton + elementVisible);
    //     } else {
    //         cy.visit(Cypress.env("url"));
    //     }
    
    
    // });

    
    // it("TC - 8. Hover over second product and click 'Add to cart' ", ()=>{
    

    //     const secondProductAddToCartButton = testcase12addproductincartpage.getSecondProductAddToCartButton();
    //     if (secondProductAddToCartButton.should("be.visible")) {
    //         secondProductAddToCartButton.should("include.text","Add to cart");
    //         cy.wait(2000);
    //         testcase12addproductincartpage.getSecondProductAddToCartButton().click();

    //         cy.log(secondProductAddToCartButton + elementVisible);
    //     } else {
    //         cy.visit(Cypress.env("url"));
    //     }
    
    
    // });


    // it("TC - 9. Click 'View Cart' button ", ()=>{
    
    //     const continueShopingButton = testcase12addproductincartpage.getContinueShopingbutton();
    //     if (continueShopingButton.should("be.visible")) {
    //         continueShopingButton.should("include.text","Continue Shopping");
    //         continueShopingButton.click();
    //         cy.log(continueShopingButton + elementVisible);
    //     } else {
    //         cy.visit(Cypress.env("url"));
    //     }

    //     const viewCartButton = testcase12addproductincartpage.getViewCartbutton();
    //     if (viewCartButton.should("be.visible")) {
    //         viewCartButton.should("include.text"," Cart");
    //         viewCartButton.click();
    //         cy.log(viewCartButton + elementVisible);
    //     } else {
    //         cy.visit(Cypress.env("url"));
    //     }
    
    
    
    // });


    
    it ("TC - 10. Verify both products are added to Cart ", ()=>{
    
        testcase12addproductincartpage.getFirstProductAddToCartButtonProductPage().click();
        testcase12addproductincartpage.getContinueShopingbutton().click();
        testcase12addproductincartpage.getSecondProductAddToCartButton().click();
        testcase12addproductincartpage.getContinueShopingbutton().click();
        testcase12addproductincartpage.getViewCartbutton().click();


    
    
    });

    
    it ("TC - 11. Verify their prices, quantity and total price", ()=>{
    
    
    
    });
    

        
    
    });