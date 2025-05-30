/// <reference types="cypress" />

describe('Home Page', () => {

    it('should display product details correctly', () => {
        // Set cookies to prevent redirect to localized page
        cy.setCookie('Airalo.locale', 'en');
        cy.setCookie('Airalo.currency', 'USD');
        cy.setCookie('airalo_browser_language', 'en');
       
        cy.visit('https://www.airalo.com/')
        // Wait up to 10 sec for spinner to dissapear
        cy.selectByDataTestId('search-hydration-loader', { timeout: 10000 }).should('not.exist')
        
        cy.selectByDataTestId('search-input')
        .click()
        .type('Japan')

        cy.get('.countries-list-loader').should('not.exist') // Wait until list loaded
        cy.get('.countries-list').within( () => { // Make sure clicked on the element in the search results list
            cy.selectByDataTestId('Japan-name')
            .click()
        })


        cy.url().should('include','/japan-esim')
        // The first "Buy now" button is the second in the DOM by its data-testId
        cy.selectByDataTestId('esim-button').eq(1).click() 

        cy.selectByDataTestId('sim-detail-header').should('be.visible')
        cy.selectByDataTestId('sim-detail-header').within( () => {
            cy.selectByDataTestId('sim-detail-operator-title').should('contain.text','Moshi Moshi')
            cy.selectByDataTestId('COVERAGE-value').should('contain.text','Japan')
            cy.selectByDataTestId('DATA-value').should('contain.text','1 GB')
            cy.selectByDataTestId('VALIDITY-value').should('contain.text','7 Days')
            cy.selectByDataTestId('PRICE-value').should('contain.text','$4.50 USD')    
        }) 
    })
})