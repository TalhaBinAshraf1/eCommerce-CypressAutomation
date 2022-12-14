/// <reference types="cypress" />

describe ("Test Case 16: Place Order: Login before Checkout", ()=>{

it ("Navigate to url 'http://automationexercise.com'", ()=>{

    cy.visit('/');
    cy.url().should("equal", Cypress.env("url"));

});


it ("Verify that home page is visible successfully", ()=>{


});

it ("Click 'Signup / Login' button", ()=>{


});


it ("Fill email, password and click 'Login' button", ()=>{


});


it ("Verify 'Logged in as username' at top", ()=>{


});


it ("Add products to cart", ()=>{


});

it ("Click 'Cart' button", ()=>{


});


it ("Verify that cart page is displayed", ()=>{


});
it (" Click Proceed To Checkout", ()=>{


});


it (" Verify Address Details and Review Your Order", ()=>{


});

it (" Enter description in comment text area and click 'Place Order'", ()=>{


});


it (" Enter payment details: Name on Card, Card Number, CVC, Expiration date", ()=>{


});
it (" Click 'Pay and Confirm Order' button", ()=>{


});


it (" Verify success message 'Your order has been placed successfully!'", ()=>{


});

it (" Click 'Delete Account' button", ()=>{


});


it (" Verify 'ACCOUNT DELETED!' and click 'Continue' button", ()=>{


});

});