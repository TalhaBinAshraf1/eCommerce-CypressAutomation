import testcase6contactusformpage from '../../../PageObject/testCase-6-ContactUsFormPage';

import 'cypress-file-upload';
import chaiColors from 'chai-colors' 
chai.use(chaiColors)


const positiveMessage = "Inputted Successfully" ; 
const elementVisible = "Is Visible";

const name = "test012";
const email = "test012345@testmail.com";
const subject = "test ongoiing in cypress";
const message = "test ongoiing in cypress";
const sucesstext ="Success! Your details have been submitted successfully.";

describe("Test Case 6: Contact Us Form", ()=>{

    
    it (" Navigate to url 'http://automationexercise.com'", ()=>{
        
        cy.visit('/');
        cy.url().should("equal", Cypress.env("url"));
    
    });


    it ("Verify that home page is visible successfully", ()=>{
    
 
        cy.request(Cypress.env("url")).should(
            (response) => {
              expect(response.status).to.eq(200);
            }
          );
          cy.csrfCookies()
      
        //             ✅  Navbar Validation  ✅
  
         cy.navbarItems(" Home");
         cy.navbarItems(" Products");
         cy.navbarItems(" Cart");
         cy.navbarItems(" Signup / Login");
         cy.navbarItems(" Test Cases");
         cy.navbarItems(" API Testing");
         cy.navbarItems(" Contact us");
    
    
    });
    

    
    it ("Click on 'Contact Us' button", ()=>{
       
       const contactUSbutton  = testcase6contactusformpage.getContuctUsButton();
       if (contactUSbutton .should("be.visible")) {
         contactUSbutton .click(); 
         cy.log(contactUSbutton  + elementVisible);
       } else {
           cy.visit(Cypress.env("url"));
       }

    
    });
    
    
    it (" Verify 'GET IN TOUCH' is visible", ()=>{
    
        const getInTouchText = testcase6contactusformpage.getGetinTouchText();
        if (getInTouchText.should("be.visible")) {
            getInTouchText.should("include.text","Get In Touch")
            cy.log(getInTouchText + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
  
    
    
    });
    
    
    it ("Enter name, email, subject and message ", ()=>{
    
        //Name

        const  getNameInputField = testcase6contactusformpage.getNameInputField();
        if ( getNameInputField.should("be.visible")) {
            getNameInputField.type(name);
            cy.log( getNameInputField + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }

        //Email

        const  getEmailInputField = testcase6contactusformpage.getEmailInputField();
        if ( getEmailInputField.should("be.visible")) {
            getEmailInputField.type(email);
            cy.log( getEmailInputField + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }

        //Subject

        
        const  getSubjectInputField = testcase6contactusformpage.getSubjectInputField();
        if ( getSubjectInputField.should("be.visible")) {
            getSubjectInputField.type(subject);
            cy.log( getSubjectInputField + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
        
        //Message
    
        const  getMessageInputField = testcase6contactusformpage.getMessageInputField();
        if ( getMessageInputField.should("be.visible")) {
            getMessageInputField.type(message);
            cy.log( getMessageInputField + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }


    
    });
    
    
    it ("Upload file ", ()=>{
    
                //Choose File  
       const  chooseFileButton  = testcase6contactusformpage.getChooseFileButton();
       if ( chooseFileButton .should("be.visible")) {
          chooseFileButton.attachFile("testImage.jpg"); 
         cy.log( chooseFileButton  + elementVisible);
       } else {
           cy.visit(Cypress.env("url"));
       }
    
    
    });
    
    
    it ("Click 'Submit' button ", ()=>{
    
                //Submit Button
        
       const  submitbutton  = testcase6contactusformpage.getSubmitButton();
       if ( submitbutton .should("be.visible")) {
          submitbutton .click(); 
         cy.log( submitbutton  + elementVisible);
       } else {
           cy.visit(Cypress.env("url"));
       }
    
    
    });


    it ("Click OK button ", ()=>{
    
        cy.on("window:confirm", (t) => {
            //verify text on pop-up
            expect(t).to.equal("Press OK to proceed!");
         });
    
    });


    it ("Verify success message 'Success! Your details have been submitted successfully.' is visible", ()=>{
    
        const sucessfulText = testcase6contactusformpage.getSucessfulText();
   
        sucessfulText .should(($div) => {
            // access the native DOM element
            expect($div.get(0).innerText).to.eq(sucesstext)
          })
    
    });


    
    
    
    });