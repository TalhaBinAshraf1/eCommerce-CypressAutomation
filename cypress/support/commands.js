
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

  
//  ✅ Navbar Items Validation ✅

Cypress.Commands.add("navbarItems",(menuText) => {
  cy.get("li > a")
    .should("be.visible" ,menuText )
    .should("contain.text", menuText)
    .log(menuText + " Available in page");
}

);


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
  



  //      ✅  Test Case 7: Verify Test Cases Page   ✅

  Cypress.Commands.add("testcaselist",(menuText) => {
    cy.get("div > .panel.panel-default > .panel-heading")
      .should("be.visible" ,menuText )
      .should("contain.text", menuText)
      .log(menuText + " Available in page");
  }
  
);



//  ✅  Test Case 8: Verify All Products and product detail page ✅


Cypress.Commands.add("categoryList",(menuText) => {
  cy.get("div > .panel-heading > .panel-title")
    .should("be.visible" ,menuText )
    .should("contain.text", menuText)
    .log(menuText + " Available in page");
}

);



Cypress.Commands.add("categorySubItems",(menuText) => {
  cy.get("div.panel-body ul > li")
    .should("be.visible" ,menuText )
    .should("contain.text", menuText)
    .log(menuText + " Available in page");
    
}

);


Cypress.Commands.add("brandList",(menuText) => {
  cy.get(".nav.nav-pills.nav-stacked > li > a")
    .should("be.visible" ,menuText )
    .should("contain.text", menuText)
    .log(menuText + " Available in page");
}

);


//  ✅  TC - 18    ✅


Cypress.Commands.add("womenCategoryItems",(menuText) => {
  cy.get("div#Women  ul > li > a")
    .should("be.visible" ,menuText )
    .should("contain.text", menuText)
    .log(menuText + " Available in page");
}

);

// ✅ TC - 19 ✅

Cypress.Commands.add("poloBrandProducts",(menuText) => {
  cy.get("div > .product-image-wrapper > .single-products > .productinfo.text-center > p")
    .should("be.visible" ,menuText )
    .should("contain.text", menuText)
    .log(menuText + " Available in page");
}

);

Cypress.Commands.add("hnmBrandProducts",(menuText) => {
  cy.get("div > .product-image-wrapper > .single-products > .productinfo.text-center > p")
    .should("be.visible" ,menuText )
    .should("contain.text", menuText)
    .log(menuText + " Available in page");
}

);

//   ✅ TC 22 ✅

Cypress.Commands.add("recomandedItemsList1",(menuText) => {
  cy.get("div:nth-of-type(2) > div > .product-image-wrapper > .single-products > .productinfo.text-center > p")
    .should("be.visible" ,menuText )
    .should("contain.text", menuText)
    .log(menuText + " Available in page");
}

);

Cypress.Commands.add("recomandedItemsList2",(menuText) => {
  cy.get(".carousel-inner > div:nth-of-type(1) >div> .product-image-wrapper > .single-products > .productinfo.text-center > p")
    .should("be.visible" ,menuText )
    .should("contain.text", menuText)
    .log(menuText + " Available in page");
}

);


