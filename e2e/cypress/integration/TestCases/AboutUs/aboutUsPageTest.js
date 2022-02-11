describe("base url Visit ", () => {

  it("Validating Navigation to Official Website -> Shipping Page", () => {
    let baseUrl="https://www.nonstopdogwear.com/en/for-dogs/" ;
    cy.visit(baseUrl);
    cy.wait(4000);
    cy.url().should("equal", baseUrl );
    cy.request(baseUrl).should((response) => {
      expect(response.status).to.eq(200);
    });

});


});