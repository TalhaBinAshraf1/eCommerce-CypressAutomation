/// <reference types="cypress" />

import testcase8varifyallproductandproductdetailpage from '../../../PageObject/testCase-8-VerifyAllProductsAndProductDetailPage-Page';
import testcase19viewandcartbrandproductpage from '../../../PageObject/testCase-19-View&CartBrandProductsPage';



const positiveMessage = "Inputted Successfully" ; 
const elementVisible = "Is Visible";
const viewProductButtonText ="View Product";

describe ("Test Case 19: View & Cart Brand Products", ()=>{

    it ("Navigate to url 'http://automationexercise.com'", ()=>{
    
        cy.visit('/');
        cy.url().should("equal", Cypress.env("url"));
    
    });
    
    
    it ("Click on 'Products' button", ()=>{
    
           
        const productButton  = testcase19viewandcartbrandproductpage.getProductsButton();
        if (productButton .should("be.visible").should("contain.text"," Products")) {
          productButton .click(); 
          cy.log(productButton  + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
    });

    it ("Verify that Brands are visible on left side bar", ()=>{
    
        let brandElementPosition;

        cy.get('.brands_products > h2').then(
          ($button) => {
            brandElementPosition = $button.position();
          }
        );
        
        cy.wait(100);
        
        cy.get('.brands_products > h2').should(
            ($button) => {
              expect($button.position()).deep.equal(brandElementPosition);
            }
          );
    
    });
    
    
    it (" Click on any brand name", ()=>{
    
        const poloBrand  = testcase19viewandcartbrandproductpage.getPoloBrand();
        if (poloBrand .should("be.visible").should("contain.text","Polo")) {
          poloBrand .click(); 
          cy.log(poloBrand  + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
    
    });

    it ("Verify that user is navigated to brand page and brand products are displayed", ()=>{
    
            
        cy.url().should("equal", Cypress.env("polobrandpageurl"));
        cy.request(Cypress.env("polobrandpageurl")).should(
            (response) => {
              expect(response.status).to.eq(200);
            }
          );

        const poloBrandText = testcase19viewandcartbrandproductpage.getPoloBrandProductText();
        if (poloBrandText.should("be.visible")) {
            poloBrandText.should("include.text","Brand - Polo Products");
            cy.log(poloBrandText + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }


        cy.poloBrandProducts("Blue Top");
        cy.poloBrandProducts("Fancy Green Top");
        cy.poloBrandProducts("Premium Polo T-Shirts");
        cy.poloBrandProducts("Soft Stretch Jeans");
        cy.poloBrandProducts("Grunt Blue Slim Fit Jeans");

    
    });
    
    
    it ("On left side bar, click on any other brand link", ()=>{
    
            
        let hnmbrandPosition;

        cy.get('.nav.nav-pills.nav-stacked > li:nth-of-type(2) > a').then(
          ($button) => {
            hnmbrandPosition = $button.position();
          }
        );
        
        cy.wait(100);
        
        cy.get('.nav.nav-pills.nav-stacked > li:nth-of-type(2) > a').should(
            ($button) => {
              expect($button.position()).deep.equal(hnmbrandPosition);
            }
          );


          const hnmBrand  = testcase19viewandcartbrandproductpage.getHnmBrand();
          if (hnmBrand .should("be.visible").should("contain.text","H&M")) {
            hnmBrand .click(); 
            cy.log(hnmBrand  + elementVisible);
          } else {
              cy.visit(Cypress.env("url"));
          }


    
    });

    it ("Verify that user is navigated to that brand page and can see products", ()=>{
    

        cy.url().should("equal", Cypress.env("hnmbrandpageurl"));
        cy.request(Cypress.env("hnmbrandpageurl")).should(
            (response) => {
              expect(response.status).to.eq(200);
            }
          );

        const hnmBrandText = testcase19viewandcartbrandproductpage.getHnmBrandProductText();
        if (hnmBrandText.should("be.visible")) {
            hnmBrandText.should("include.text","Brand - H&M Products");
            cy.log(hnmBrandText + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }

        cy.hnmBrandProducts("Men Tshirt");
        cy.hnmBrandProducts("Summer White Top");
        cy.hnmBrandProducts("Pure Cotton V-Neck T-Shirt");
        cy.hnmBrandProducts("Pure Cotton Neon Green Tshirt");
        cy.hnmBrandProducts("Regular Fit Straight Jeans");


    });
    
    
    });