import testCase11Verifysubscriptionincartpage from "../../../PageObject/testCase-11-VerifySubscriptionInCartPage-Pages"


const elementVisible = "Is Visible";
const subscription = "Subscription" ;

describe(" Test Case 11: Verify Subscription in Cart page ", ()=>{

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
    
    
    it ("Click 'Cart' button", ()=>{
    
    const   cartButton = testCase11Verifysubscriptionincartpage.getCartButton();
        if (  cartButton.should("be.visible")) {
             cartButton.should("have.text"," Cart" );
             cartButton.click();
            cy.log(  cartButton + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
        
        
    
    });
    
    
    it ("Verify text 'SUBSCRIPTION' ", ()=>{
     
            
//   ✅    Product name -> " Blue Top" validation ✅ 

        const  subscriptionText = testCase11Verifysubscriptionincartpage.getSubsCriptionText();
        if ( subscriptionText.should("be.visible")) {
            subscriptionText.should("have.text",subscription );
            cy.log( subscriptionText + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
    });
    

    it ("Enter email address in input and click arrow button ", ()=>{
    
        const emailinputField = testCase11Verifysubscriptionincartpage.getEmailInputField();
        if (emailinputField.should("be.visible")) {
            emailinputField.type("test012@gmail.com");

            cy.log(emailinputField + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
     

    
    
    });


    it ("Verify success message 'You have been successfully subscribed!' is visible ", ()=>{
    

        testCase11Verifysubscriptionincartpage.getSubscribeButton().should("be.visible").click();

    cy.on('window:alert', (str) => {
        expect(str).to.contains('You have been successfully subscribed!');
      })

      cy.on('window:confirm', (txt) => {
        expect(txt).to.contains('You have been successfully subscribed!');
        return false;
      });

    });


        
    
    });