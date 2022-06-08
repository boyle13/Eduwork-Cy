/// <reference types="Cypress" />

describe('Testing Saucedemo', () => {
    it('Visit the website', () => {
      cy.visit('http://www.saucedemo.com/')
    })
    it('Should clear username field', () => {
        cy.get('input[name="user-name"]').clear()
    })
    it('Should clear password field', () => {
        cy.get('input[name="password"]').clear()
    }) 
    it('Should try to log in with locked out user', () => {
        cy.fixture("user").then(user => {
        const username = user.lockedsauce
        const password = user.passsauce
        cy.get('input[name="user-name"]').type(username) 
        cy.get('input[name="password"]').type(password)
        cy.get('input[name="login-button"]').click()
        cy.get('h3').should('contain','Epic sadface: Sorry, this user has been locked out.')
      })
    })
    it('Should try to log in with the standard user', () => {
        cy.fixture("user").then(user => {
        const username = user.stdsauce
        const password = user.passsauce

        cy.get('input[name="user-name"]').clear()
        cy.get('input[name="password"]').clear()
        cy.get('input[name="user-name"]').type(username) 
        cy.get('input[name="password"]').type(password)
        cy.get('input[name="login-button"]').click()
        cy.url().should('include','/inventory')
      })
    })
    
    it('Should add items to cart and checkout', () => {
        cy.contains('button','Add to cart',{ matchCase: false }).click()
        cy.get('.shopping_cart_link').click()
        cy.get('button[name="checkout"').click()
    })
    it('Should fill user information', () => {
        cy.url().should('include','/checkout-step-one')
        cy.fixture("user").then(user => {
            const firstname = user.firstname
            const lastname = user.lastname
            const postalcode = user.postalcode
            
            cy.get('input[name="firstName"').clear()
            cy.get('input[name="lastName"').clear()
            cy.get('input[name="postalCode"').clear()
            
            cy.get('input[name="firstName"').type(firstname)
            cy.get('input[name="lastName"').type(lastname)
            cy.get('input[name="postalCode"').type(postalcode)
            
            cy.get('#continue[value="Continue"]').click()
          })
        })
    it('Should finish the purchase and reset the site', () => {
        cy.url().should('include','/checkout-step-two')
        cy.get('button[name="finish"').click()
        cy.url().should('include','/checkout-complete')
        cy.get('button[name="back-to-products"').click()
        cy.url().should('include','/inventory')
        cy.get('.bm-burger-button').click()
        cy.get('#reset_sidebar_link').click()
          })
  })
    