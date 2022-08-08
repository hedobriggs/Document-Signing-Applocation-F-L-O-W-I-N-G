///  <reference types="cypress" />


describe('Flowmono', function()
{
    it('Add Footer Message', function()
    
    {     
        cy.visit("https://flowmono.com")  //opens the URL
        
        cy.get('.me-lg-3 > .mat-ripple').click() //clicks on the sign in button

        cy.get(':nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("flowlive@yopmail.com") //enter email address
        cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("Password@101") // enter password
        cy.get('.w-100 > .btn').click()

        //wait for 1 second
        cy.wait(3000)

        //click on Account Settings
        cy.get('[routerlink="/app/organization-account"] > .link-container > .menu-list-name').click()

        //wait for 1 second
        cy.wait(1000)

        //click on customization
        cy.get(':nth-child(4) > .mat-ripple').click()

        //wait for 1 second
        cy.wait(1000)

        //toggle to switch off the Footer Message 
        cy.get('.mat-slide-toggle-bar').click()

        //click on the save button
        cy.get('.onyx-btn-flat').click()

        //wait for 2 seconds 
        cy.wait(2000)

        //Logout from system 
        cy.get(':nth-child(6) > .link-container > .menu-list-name').click()

        //wait for 3 seconds
        cy.wait(2000)

        //Relogin to verify the Footer Message change

        //enter email address
        cy.get(':nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("flowlive@yopmail.com") 
        //enter password
        cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("Password@101")
        //click on the login button
        cy.get('.w-100 > .btn').click()

        //wait for 1 second
        cy.wait(3000)

        //click on Account Settings
        cy.get('[routerlink="/app/organization-account"] > .link-container > .menu-list-name').click()

        //wait for 1 second
        cy.wait(1000)
 
        //click on customization
        cy.get(':nth-child(4) > .mat-ripple').click()
 
        //wait for 1 second
        cy.wait(1000)
 

    })
           

})