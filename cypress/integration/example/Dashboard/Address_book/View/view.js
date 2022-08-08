///  <reference types="cypress" />


describe('Flowmono', function()
{
    it('Login to the system with valid credentials and Logout', function()
    
    {     
        cy.visit("https://flowmono.com")  //opens the URL
        
        cy.get('.me-lg-3 > .mat-ripple').click() //clicks on the sign in button

        cy.get(':nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("flowlive@yopmail.com") //enter email address
        cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("Password@101") // enter password
        cy.get('.w-100 > .btn').click()

        //wait for 1 second
        cy.wait(1000)

        //click on Address book 
        cy.get('[routerlink="address-book"] > .link-container > .menu-list-name').click()

        //wait for 1 second
        cy.wait(1000) 

    })
        
})