describe('MyTestSuite', function()
{
    it('Verify the title of the Page - Positive Test', function()
    
    {     
        cy.visit('https://flowmono.com')
        //verify the title of the webpag
        cy.title().should('eq','Flowmono')

    })

    it('Verify the title of the Page - Negative Test', function()
    
    {     
        cy.visit('https://flowmono.com')
        //verify the title of the webpag
        cy.title().should('eq','flowmono')

    })




  })