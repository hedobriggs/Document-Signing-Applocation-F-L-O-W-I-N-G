///  <reference types="cypress" />


describe('Flowmono', function()
{
    it('Quick sign as an existing user', function()
    
    {     
        cy.visit("https://flowmono.com")  //opens the URL

        //clicks on the sign in button        
        cy.get('.d-flex > .onyx-btn-outline').click() 

        //wait for 1 second
        cy.wait(1000) 

        //Click on "Sign on a document"
        cy.get('.active > .drop_more_feature > .mat-ripple').click() 
        
        //wait for 1 second
        cy.wait(1000) 

        //Sign in as an existing user
        cy.get('.subheader > span').click() 

        //wait for 1 second
        cy.wait(1000) 

        //Enter email address
        cy.get(':nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("flowlive@yopmail.com")
        
        //Enter Password
        cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("Password@101")
        
        //Click on the 
        cy.get('.w-100 > .btn').click()

        
    

    })

    

})