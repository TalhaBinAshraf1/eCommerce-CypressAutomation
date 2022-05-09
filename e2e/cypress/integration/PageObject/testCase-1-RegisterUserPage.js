/// <reference types="cypress" />

describe("Test Case 1: Register User", () =>{
    it("Navigate to url 'http://automationexercise.com'",() =>{
    cy.visit(Cypress.env("url"));
    cy.url().should("equal", Cypress.env("url"));
    cy.request(Cypress.env("url")).should(
        (response) => {
          expect(response.status).to.eq(200);
        }
      );
    
    });
    
    it("Click on 'Signup / Login' button It Should Be visible In this Page  ", () => {
        const signupLogin = cy.get(".nav.navbar-nav > li:nth-of-type(4) > a");
        if (signupLogin.should("be.visible")) {
          signupLogin.click(); 
          cy.log(signupLogin + "Is Visible ");
        } else {
            cy.visit(Cypress.env("url"));
        }
    
    });
        
    it("Verify 'New User Signup!' is visible ", () => {
      const newUserSignup = cy.get(".signup-form > h2");
      if (newUserSignup.should("be.visible")) {
          newUserSignup.should("include.text","New User Signup!")
                       .and("have.length","1");
          cy.log(newUserSignup + "Is Visible ");
      } else {
          cy.visit(Cypress.env("url"));
      }
  
  });  

  it ("Enter name and email address", () =>{

    const nameInputField = cy.get("form[method='post'] > input[name='name']")
    if(nameInputField.should("be.visible"))
    {
      nameInputField.focus();
      //nameInputField.contains("Name");
      nameInputField.type("test012");
      cy.log(" Name Inputted Successfully")
    }else{
      cy.visit(Cypress.env("url"));
    }
    const emailInputField = cy.get(".signup-form > form[method='post'] > input[name='email']");
    if(emailInputField.should("be.visible"))
    {
      emailInputField.focus();
      //cy.get(".signup-form > form[method='post'] > input[name='email']").invoke('val').should('contain', 'Email Address')
      //emailInputField.invoke('attr', 'placeholder').should('contain', 'Email Address')
      emailInputField.type("test on going in cypress");
      cy.log(" Name Inputted Successfully");
    }else{
      cy.visit(Cypress.env("url"));
    }

  });
  


    
    });