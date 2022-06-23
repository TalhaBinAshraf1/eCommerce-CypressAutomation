
import testcase12addproductincartpage from "../../../PageObject/testCase-12-AddProductsInCartPage"

const positiveMessage = "Inputted Successfully" ; 
const elementVisible = "Is Visible";


describe(" Test Case 12: Add Products in Cart ", ()=>{

    it ("TC - 2. Navigate to url 'http://automationexercise.com'", ()=>{
    
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
    
    it("Click on 'Products' button ", ()=>{
    
        const productButton  = testcase12addproductincartpage.getProductsButton();
        if (productButton .should("be.visible").should("contain.text"," Products")) {
          productButton .click(); 
          cy.log(productButton  + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
    
    });
    
    
    it("Verify user is navigated to ALL PRODUCTS page successfully ", ()=>{
    
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


    it("Hover over first product and click 'Add to cart' ", ()=>{

      //  testcase12addproductincartpage.getFirstProductAddToCartButtonProductPage().click();

    //    ✅   1st product Add to cart  ✅

    const firstProductAddToCartButton = testcase12addproductincartpage.getFirstProductAddToCartButtonProductPage();
        if (firstProductAddToCartButton.should("be.visible").should("include.text","Add to cart")) {
            
            testcase12addproductincartpage.getFirstProductAddToCartButtonProductPage().click();
            cy.log(firstProductAddToCartButton + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }

           //  ✅  continue Shoping Button validation  ✅ 

    const continueShopingButton = testcase12addproductincartpage.getContinueShopingbutton();

        if (continueShopingButton.should("be.visible")) {
            continueShopingButton.should("include.text","Continue Shopping");
            testcase12addproductincartpage.getContinueShopingbutton().click();
            cy.log(continueShopingButton + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }

    
    //    ✅   2ND product Add to cart  ✅

    const secondProductAddToCartButton = testcase12addproductincartpage.getSecondProductAddToCartButton();
        if (secondProductAddToCartButton.should("be.visible")) {
            secondProductAddToCartButton.should("include.text","Add to cart");
            cy.wait(2000);
            testcase12addproductincartpage.getSecondProductAddToCartButton().click();

            cy.log(secondProductAddToCartButton + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
        
        

    });
    

    
    // it("TC - 7. Click 'Continue Shopping' button ", ()=>{
    
    //     testcase12addproductincartpage.getContinueShopingbutton().click();

    //     //  ✅  continue Shoping Button validation  ✅ 
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
    

    //     testcase12addproductincartpage.getSecondProductAddToCartButton().click();


    // //    ✅   2ND product Add to cart  ✅

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


    it("Click 'View Cart' button ", ()=>{


         // cy.get(".modal-body > p:nth-of-type(2)").click();

        const viewCartButton = testcase12addproductincartpage.getViewCartbutton();
        if (viewCartButton.should("be.visible")) {
            viewCartButton.should("include.text"," Cart");
            viewCartButton.click();
            cy.log(viewCartButton + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
    
    
    });

    
    it ("Verify both products are added to Cart ", ()=>{
    
        // testcase12addproductincartpage.getFirstProductAddToCartButtonProductPage().click();
        // testcase12addproductincartpage.getContinueShopingbutton().click();
        // testcase12addproductincartpage.getSecondProductAddToCartButton().click();
        // cy.get(".modal-body > p:nth-of-type(2)").click();

    const firstProductName = testcase12addproductincartpage.getFirstProductName();
        if (firstProductName.should("be.visible")) {
            firstProductName.should("include.text","Blue Top");
            cy.log(firstProductName + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }

    const secondProductName = testcase12addproductincartpage.getSecondProductName();
        if (secondProductName.should("be.visible")) {
            secondProductName.should("include.text","Men Tshirt");
            cy.log(secondProductName + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }

        
    });

    
    it ("TC - 11. Verify their prices, quantity and total price", ()=>{
    
    //  ✅  1st Product Price validation from cart page  ✅
      
    const firstProductPrice = testcase12addproductincartpage.getFirstProductPrice();
    if (firstProductPrice.should("be.visible")) {
        firstProductPrice.should("include.text","Rs. 500");
        cy.log(firstProductPrice + elementVisible);
    } else {
        cy.visit(Cypress.env("url"));
    }

    //  ✅  1st Product Quantity validation from cart page  ✅

    const firstProductQuantity = testcase12addproductincartpage.getFirstProductQuantity();
    if (firstProductQuantity.should("be.visible")) {
        firstProductQuantity.should("include.text","1");
        cy.log(firstProductQuantity + elementVisible);
    } else {
        cy.visit(Cypress.env("url"));
    }


    //  ✅  1st Product Price validation from cart page  ✅

    const firstProductTotalPrice = testcase12addproductincartpage.getFirstProductTotalPrice();
    if (firstProductTotalPrice.should("be.visible")) {
        firstProductTotalPrice.should("include.text","Rs. 500");
        cy.log(firstProductTotalPrice + elementVisible);
    } else {
        cy.visit(Cypress.env("url"));
    }
    

    //  ✅  2nd Product Price validation from cart page  ✅
      
    const secondProductPrice = testcase12addproductincartpage.getSecondProductPrice();
    if (secondProductPrice.should("be.visible")) {
        secondProductPrice.should("include.text","Rs. 400");
        cy.log(secondProductPrice + elementVisible);
    } else {
        cy.visit(Cypress.env("url"));
    }

    //  ✅  2nd Product Quantity validation from cart page  ✅

    const secondProductQuantity = testcase12addproductincartpage.getSecondProductQuantity();
    if (secondProductQuantity.should("be.visible")) {
        secondProductQuantity.should("include.text","1");
        cy.log(secondProductQuantity + elementVisible);
    } else {
        cy.visit(Cypress.env("url"));
    }


    //  ✅  2nd Product Price validation from cart page  ✅

    const secondProductTotalPrice = testcase12addproductincartpage.getSecondProductTotalPrice();
    if (secondProductTotalPrice.should("be.visible")) {
        secondProductTotalPrice.should("include.text","Rs. 400");
        cy.log(secondProductTotalPrice + elementVisible);
    } else {
        cy.visit(Cypress.env("url"));
    }

    
    
    });
    

        
    
    });