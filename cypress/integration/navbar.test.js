/// <reference types="cypress" />

describe('Navbar Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })
    it('Should display online banking content', () => {
        cy.get('#onlineBankingMenu').click()
        cy.get('#onlineBankingMenu').should('have.class', 'active')
    });
    it('Should display feedback content', () => {
        cy.get('#feedback').click()
        cy.get('#feedback-title').should('have.text', 'Feedback')
        cy.get('input[name="name"]').should('exist')
    });

    it('Should display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.get('#homeMenu').should('have.class', 'active')
    });



})