///  <reference types="cypress" />


describe('Flowmono', function()
{
    it('Quick sign as an New user', function()
    
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

        //Enter email address
        cy.get(':nth-child(1) > .input-style1 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("Briggs2@yopmail.com")
        //Enter password
        cy.get(':nth-child(2) > .input-style1 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("Password@101")
        //Enter First name
        cy.get(':nth-child(3) > .input-style1 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("Briggs")
        //Enter Last name 
        cy.get(':nth-child(4) > .input-style1 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("Billionaire")
        
        //wait for 1 second

        //click on dropdown for country code 
        //cy.get('.mat-select-arrow').click()

        //wait for 1 second
      

        //select country (Nigeria)
        //cy.get('#mat-option-413 > .mat-option-text > .country-code-container > .country').click()

        //wait for 1 second
        cy.wait(2000)

        //Enter phone number 
        cy.get(':nth-child(6) > .input-style1 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("0987654321")
        //Enter job title (Software Quality Tester)
        cy.get('.col-md-12 > .input-style1 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex').type("Software Quality Tester")
        
        //wait for 1 second 
        cy.wait(1000)
        //Click on continue button
        cy.get('.w-100').click()



        
       
    

    })

    

})