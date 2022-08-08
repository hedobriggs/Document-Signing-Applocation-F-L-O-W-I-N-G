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

        //Create a new contact in addtess book
        cy.get('.header-text > .d-flex > .mat-ripple').click()

        //Enter First Name
        cy.get(':nth-child(3) > .pe-md-1 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("Monk Strap")
        //Enter Last Name
        cy.get(':nth-child(3) > .ps-md-1 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("Brogues")
        //Enter email Address
        cy.get(':nth-child(4) > .pe-md-1 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("hedobriggs1@gmail.com")
        //Enter Phone number
        cy.get('.ps-md-1 > .row > :nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex').type("07099889900")

        //Enter Company Name
        cy.get(':nth-child(6) > .pe-md-1 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("Hedo Briggs Shoes")
        //Company Address
        cy.get(':nth-child(6) > .ps-md-1 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("7, Aguleri Street. Agodo-Egbe. Lagos State")
        //Company Email address
        cy.get(':nth-child(7) > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("briggs@yopmail.com")
       
        //country code drop down
       //cy.get('#mat-select-6 > .mat-select-trigger > .mat-select-arrow-wrapper').click()

        //enter phone number 
        cy.get(':nth-child(7) > :nth-child(2) > .row > :nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("09877665544")
        //wait for 1 second
        cy.wait(1000)
        //Select country drop down
        cy.get('#mat-select-8 > .mat-select-trigger > .mat-select-arrow-wrapper').click()
        //Select country (Nigeria)
        cy.get('#mat-option-186 > .mat-option-text').click()
        
        //wait for 1 second
        cy.wait(3000)

        //Click on State drop down
        cy.get('#mat-select-10 > .mat-select-trigger > .mat-select-arrow-wrapper').click()
        //select state (Lagos State)
        cy.get('#mat-option-786 > .mat-option-text').click()
        //Enter Reg Number
        cy.get(':nth-child(9) > .pe-md-1 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex').type("RG-001")
        //Enter Postal code
        cy.get(':nth-child(9) > .ps-md-1 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("23401")
        //click on Save button
        cy.get('.justify-content-end > .d-flex > .onyx-btn-flat').click()  

    })
        
})