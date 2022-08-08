describe('MyTestSuite', function()
{
    it('Verify the title of the Page - Positive Test', function()
    
    {     
        cy.visit('https://flowmono.com')
        //verify the title of the webpag
        cy.title().should('eq','Flowmono') 

    })

    it('Verify the title of the Page', function()
    
    {     
        cy.visit('https://web.facebook.com')
        //verify the title of the webpage
        cy.title().should('eq','Facebook – log in or sign up')

    })

    it('Verify the title of the Page', function()
    
    {     
        cy.visit('https://revent-onyx-webui-poc.reventholdings.com')
        //verify the title of the webpage
        cy.title().should('eq','Contract Management System')

    })

    it('Verify the title of the Page', function()
    
    {     
        cy.visit('https://www.linkedin.com')
        //verify the title of the webpage
        cy.title().should('eq','LinkedIn: Log In or Sign Up')

    })


})