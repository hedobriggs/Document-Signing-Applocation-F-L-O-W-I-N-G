///  <reference types="cypress" />


describe('Flowmono', function()
{
    it('View Document Folder ', function()
    
    {     
        cy.visit("https://flowmono.com")  //opens the URL
        
        cy.get('.me-lg-3 > .mat-ripple').click() //clicks on the sign in button

        cy.get(':nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("flowlive@yopmail.com") //enter email address
        cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("Password@101") // enter password
        cy.get('.w-100 > .btn').click()

        //wait for 1 second
        cy.wait(3000)

        //click on Document
        cy.get('[href="/app/document"] > .link-container > .menu-list-name').click()

        //wait for 9 second
        cy.wait(9000)

        //click on new folder
        cy.get('span').click()

        //wait for 2 seconds
        cy.wait(2000)

        //Enter folder name
        cy.get('.g-1 > :nth-child(1) > .input-style1 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("Passive")

        //Toggle on the "Advance Settings"
        //cy.get('.mat-slide-toggle-bar').click()

        //wait for 1 second
        //cy.wait(2000)

        //Add a new user into the folder created
        //cy.get('.col-md-10 > .input-style1 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click()

        //wait for 1 second
        //cy.wait(1000)

        
        cy.get('form.ng-dirty > .cta-container > .onyx-btn-flat').click()

        //wait for 1 second
        cy.wait(1000)

    })
           

})