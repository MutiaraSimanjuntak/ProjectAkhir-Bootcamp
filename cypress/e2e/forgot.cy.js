import { loginPage, forgotPage } from "../support/pageObject"

describe('Forgot Password', () => {

beforeEach(()=>{
    cy.visit('/web/index.php/auth/login')
    cy.get(loginPage.forgotBtn).click()
})

it('TC13 - Reset password valid', ()=>{
    cy.intercept('POST','**/auth/sendPasswordReset').as('reset')
    cy.get(forgotPage.username).type('Admin')
    cy.get(forgotPage.resetBtn).click()
})

it('TC14 - Reset tanpa username', ()=>{
    cy.get(forgotPage.resetBtn).click()
    cy.contains('Required').should('exist')
})

it('TC15 - Username tidak terdaftar', ()=>{
    cy.intercept('POST','**/auth/sendPasswordReset').as('reset')
    cy.get(forgotPage.username).type('abc123')
    cy.get(forgotPage.resetBtn).click()
})

it('TC16 - Username spasi', ()=>{
    cy.get(forgotPage.username).type('   ')
    cy.get(forgotPage.resetBtn).click()
})

it('TC17 - Cancel forgot password', ()=>{
    cy.get(forgotPage.cancelBtn).click()
})

it('TC18 - Refresh halaman', ()=>{
    cy.reload()
})

it('TC19 - Username huruf kecil', ()=>{
    cy.intercept('POST','**/auth/sendPasswordReset').as('reset')
    cy.get(forgotPage.username).type('admin')
    cy.get(forgotPage.resetBtn).click()
})

it('TC20 - Username panjang', ()=>{
    cy.intercept('POST','**/auth/sendPasswordReset').as('reset')
    cy.get(forgotPage.username).type('AdminAdmin')
    cy.get(forgotPage.resetBtn).click()
})

})