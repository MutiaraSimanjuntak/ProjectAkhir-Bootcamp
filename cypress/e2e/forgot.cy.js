import { loginPage, forgotPage } from "../support/pageObject"

describe('Forgot Password', () => {

beforeEach(()=>{

    cy.visit('/web/index.php/auth/login', {
        failOnStatusCode: false
    })

    cy.get(loginPage.forgotBtn).click({ force: true })

    cy.url().should('include','requestPasswordResetCode')

    cy.get('input[name="username"]').should('be.visible')

})

it('TC09 - Reset password valid', ()=>{

    cy.intercept('POST','**/auth/sendPasswordReset').as('reset')

    cy.get(forgotPage.username).type('Admin')

    cy.get(forgotPage.resetBtn).click()

    cy.wait('@reset')

    cy.contains('Reset Password').should('exist')

})

it('TC10 - Reset password tanpa username', ()=>{

    cy.get(forgotPage.resetBtn).click()

    cy.contains('Required').should('exist')

})

it('TC11 - Reset password username tidak terdaftar', ()=>{

    cy.intercept('POST','**/auth/sendPasswordReset').as('reset')

    cy.get(forgotPage.username).type('abc123')

    cy.get(forgotPage.resetBtn).click()

    cy.wait('@reset')

})

it('TC12 - Reset password username spasi', ()=>{

    cy.get(forgotPage.username).type('   ')

    cy.get(forgotPage.resetBtn).click()

    cy.contains('Required').should('exist')

})

it('TC13 - Cancel forgot password', ()=>{

    cy.get(forgotPage.cancelBtn).click()

    cy.url().should('include','login')

})

it('TC14 - Reload halaman', ()=>{

    cy.reload()

    cy.get('input[name="username"]').should('be.visible')

})

})