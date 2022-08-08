///  <reference types="cypress" />


describe('Flowmono', function()
{
    it('Login to the system with valid credentials', function()
    
    {     
        cy.visit("https://flowmono.com")  //opens the URL
        cy.get(':nth-child(2) > .mat-ripple').click() // Click on the try for free option
        cy.get(':nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("maga@yopmail.com") //enter email address
        cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("Password@101") // enter password
        cy.get('.w-100 > .btn').click()

        //Enter User Details
        cy.get('.w-100 > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("Remote")
        cy.get('.w-100 > :nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("Millionaire")
        cy.get(':nth-child(3) > .row > :nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("07099009988")
        cy.get(':nth-child(4) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("CryptoCurrency")
        cy.get(':nth-child(5) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("3, Awin Close.Ilaje-Bariga. Lagos State. Nigeria")
        cy.get(':nth-child(6) > .row > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("Nigeria")
        cy.get(':nth-child(6) > .row > :nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("Lagos State")
        cy.get('.btn').click()
       
        
    

    })

    

})