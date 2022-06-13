describe(" Test Case 11: Verify Subscription in Cart page ", ()=>{

    it (" TC - 1. Launch browser ", ()=>{
    
    
        cy.visit("https://register.rediff.com/register/register.php?FormName=user_details");
        // click on submit button to produce the alert pop up
        cy.get('input[type="submit"]').click();
        // firing window: alert event with on() method
        cy.on('window:alert',(txt)=>{
           //Mocha assertions
           expect(txt).to.contains('Your full name cannot be blank.');
        })
    
    });
    
    
    it ("TC - 2. Navigate to url 'http://automationexercisTC - e.com'", ()=>{
    
    
    
    });
    
    
    
    it ("TC - 3. Verify that home page is visible successfully ", ()=>{
    
    
    
    });
    
    
    it ("TC -4. Click 'Cart' button", ()=>{
    
    
    
    });
    
    
    it (" TC -5. Scroll down to footer' ", ()=>{
    
    
    
    });
    

        
    
    it ("TC - 6. Verify text 'SUBSCRIPTION' ", ()=>{
    
    
    
    });

    
    it ("TC - 7. Enter email address in input and click arrow button ", ()=>{
    
    
    
    });


    it ("TC - 8. Verify success message 'You have been successfully subscribed!' is visible ", ()=>{
    
    
    
    });
    

        
    
    });