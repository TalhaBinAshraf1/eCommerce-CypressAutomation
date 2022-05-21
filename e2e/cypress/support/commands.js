// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Login 
Cypress.Commands.add("login", (username, password) => {
    //adding a new command named login
    cy.get('[id=Email]').clear();
    cy.get('[id=Email]').type(username);
    cy.get('[id=Password]').clear();
    cy.get('[id=Password]').type(password);
    cy.get('[type=submit]').click();
  });

  //csrfCookies clear 
  Cypress.Commands.add("csrfCookies", () => {
    //adding a new command named login
    Cypress.Cookies.defaults({
      preserve: "csrftoken"
  })
  });



//                ✅     testCase-1-RegisterUser     ✅

// DATE OF BIRTH DROPDOWN 

//DAY
  Cypress.Commands.add("dayDropdown",(menuText, value) => {
      cy.get("select#days")
        .select(menuText)
        .should("contain.text", menuText)
        .should("have.value",value)
        .log(menuText + " Available in DropDown!!");
    }
  );

  //Month
  Cypress.Commands.add("monthDropdown",(menuText, value) => {
      cy.get("select#months")
        .select(menuText)
        .should("contain.text", menuText)
        .should("have.value",value)
        .log(menuText + " Available in DropDown!!");
    }
  );

  //YEAR
  Cypress.Commands.add("yearDropdown",(menuText, value) => {
      cy.get("select#years")
        .select(menuText)
        .should("contain.text", menuText)
        .should("have.value",value)
        .log(menuText + " Available in DropDown!!");
    }
  );

//Country
  Cypress.Commands.add("countryDropdown",(menuText, value) => {
      cy.get("select#country")
        .select(menuText)
        .should("contain.text", menuText)
        .should("have.value",value)
        .log(menuText + " Available in DropDown!!");
    }
  );
  
  

