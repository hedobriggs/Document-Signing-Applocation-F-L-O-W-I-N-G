///  <reference types="cypress" />


describe('Flowmono', function()
{
    it('Login to the system with valid credentials', function()
    
    {     
        cy.visit("https://flowmono.com")  //opens the URL
        cy.get('.d-flex > .onyx-btn-flat').click()
        cy.get(':nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("Berry@yopmail.com")
        cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("Password@101")
        cy.get('.w-100 > .btn').click()

        cy.wait(3000) //Wait for 3 seconds 
        //Enter first name
        cy.get('.w-100 > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("Cranberry")
        //Enter last name 
         cy.get('.w-100 > :nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("Briggs")
        //Click on the country dropdown
        cy.get('#mat-select-0 > .mat-select-trigger > .mat-select-arrow-wrapper').click()
        //Select country (nigeria)
        cy.get('#mat-option-183 > .mat-option-text > .country-code-container > .flag').click()
        //Enter phone number 
        cy.get(':nth-child(3) > .row > :nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("07099889988")
        //click on the drop down for industry
        cy.get('#mat-select-2 > .mat-select-trigger > .mat-select-arrow-wrapper').click()
        //Select Oil $ Gas
        cy.get('#mat-option-14 > .mat-option-text').click()
        //Enter address
        cy.get(':nth-child(5) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("3,Awin close. Ilaje-Bariga.")
        
        cy.wait(3000) //wait for 3 seconds

        //click the drop down for country (Nigeria)
        cy.get('#mat-select-4 > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow').click()
        //Select Country
        cy.get('#mat-option-424 > .mat-option-text').click()
       
        cy.wait(1000)//wait for 1 second
        //Select the drop down for State
        cy.get('#mat-select-6 > .mat-select-trigger > .mat-select-arrow-wrapper').click()
        //Select the State (Lagos)
        cy.get('#mat-option-526 > .mat-option-text').click()
        //click the drop down for city
        cy.get('#mat-select-8 > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow').click()
        //Select city (Epe)
        cy.get('#mat-option-543 > .mat-option-text').click()
        //Click on the Continue button
        cy.get('.btn').click()
        
        cy.wait(1000)

        //Click on the drop for "How did you hear about us"
        cy.get(':nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click()
        //Select Recommendation
        cy.get('#mat-option-552 > .mat-option-text').click()

        cy.wait(2000)

        //Why are you using FLowmono
        cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("For Document Signing")

        //Click on the Continue button
        cy.get('.btn').click()

        //Select theme color (red)
        cy.get('.theme3').click()
        //Click on the SignUp button
        cy.get('.btn').click()





           

    })

})