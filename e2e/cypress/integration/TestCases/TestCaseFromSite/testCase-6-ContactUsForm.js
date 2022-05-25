import testcase6contactusformpage from '../../../PageObject/testCase-6-ContactUsFormPage';

import chaiColors from 'chai-colors' 
chai.use(chaiColors)


const positiveMessage = "Inputted Successfully" ; 
const elementVisible = "Is Visible";

const name = "test012";
const email = "test012345@testmail.com";
const subject = "test ongoiing in cypress";
const message = "test ongoiing in cypress";

describe("Test Case 6: Contact Us Form", ()=>{

    
    
    it ("TC - 2. Navigate to url 'http://automationexercisTC - e.com'", ()=>{
        
        cy.visit(Cypress.env("url"));
        cy.url().should("equal", Cypress.env("url"));
        cy.request(Cypress.env("url")).should(
            (response) => {
              expect(response.status).to.eq(200);
            }
          );
          cy.csrfCookies();
    });
    

    
    it ("TC - 4. Click on 'Contact Us' button", ()=>{
       
       const contactUSbutton  = testcase6contactusformpage.getContuctUsButton();
       if (contactUSbutton .should("be.visible")) {
         contactUSbutton .click(); 
         cy.log(contactUSbutton  + elementVisible);
       } else {
           cy.visit(Cypress.env("url"));
       }

    
    });
    
    
    it (" TC -  5. Verify 'GET IN TOUCH' is visible", ()=>{
    
        const getInTouchText = testcase6contactusformpage.getGetinTouchText();
        if (getInTouchText.should("be.visible")) {
            getInTouchText.should("include.text","Get In Touch")
            cy.log(getInTouchText + elementVisible);
        } else {
            cy.visit(Cypress.env("url"));
        }
  
    
    
    });
    
    
    it ("TC - 6. Enter name, email, subject and message ", ()=>{
    
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
    
    
    it (" TC - 7. Upload file ", ()=>{
    
                //Choose File  
       const  chooseFileButton  = testcase6contactusformpage.getChooseFileButton();
       if ( chooseFileButton .should("be.visible")) {
         // chooseFileButton .click(); 
         cy.log( chooseFileButton  + elementVisible);
       } else {
           cy.visit(Cypress.env("url"));
       }
    
    
    });
    
    
    it ("TC - 8. Click 'Submit' button ", ()=>{
    
                //Submit Button
        
       const  submitbutton  = testcase6contactusformpage.getSubmitButton();
       if ( submitbutton .should("be.visible")) {
          submitbutton .click(); 
         cy.log( submitbutton  + elementVisible);
       } else {
           cy.visit(Cypress.env("url"));
       }
    
    
    });


    it ("TC -9. Click OK button ", ()=>{
    
        cy.on("window:confirm", (t) => {
            //verify text on pop-up
            expect(t).to.equal("Press OK to proceed!");
         });
    
    });


    it ("TC - 10. Verify success message 'Success! Your details have been submitted successfully.' is visible", ()=>{
    
    
    
    });

    it ("TC - 11. Click 'Home' button and verify that landed to home page successfully ", ()=>{
    
    
    
    });
    
    
    
    });