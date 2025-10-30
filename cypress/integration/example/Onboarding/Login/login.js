///  <reference types="cypress" />


describe('Flowmono', function()
{
    it('Login Using Existing Credentials', function()
    
    {     
        cy.visit("https://flowmono.com")  //opens the URL
        
        cy.get('.me-lg-3 > .mat-ripple').click() //clicks on the sign in button
        
        //enter email address
        cy.get(':nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("flying@wings.com")
        
        // enter password
        cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("Password") 
        
        //Click on the login button
        cy.get('.w-100 > .btn').click()

        cy.wait(1000)

    })   

})
