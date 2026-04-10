import { loginPage } from "../support/pageObject"

describe('Login OrangeHRM', () => {

beforeEach(() => {
    cy.visit('/web/index.php/auth/login')
    cy.fixture('user').as('user')
})

it('TC01 - Login dengan credential valid', function () {

    cy.intercept('POST','**/auth/validate').as('login')

    cy.login(this.user.username,this.user.password)

    cy.wait('@login')
    cy.url().should('include','dashboard')

})

it('TC02 - Login dengan password salah', function(){

    cy.intercept('POST','**/auth/validate').as('login')

    cy.login(this.user.username,this.user.wrongPassword)

    cy.wait('@login')
    cy.get(loginPage.errorMsg).should('exist')

})

it('TC03 - Login dengan username salah', function(){

    cy.intercept('POST','**/auth/validate').as('login')

    cy.login(this.user.wrongUsername,this.user.password)

    cy.wait('@login')

})

it('TC04 - Login tanpa username dan password', ()=>{

    cy.intercept('POST','**/auth/validate').as('login')

    cy.get(loginPage.loginBtn).click()

    cy.contains('Required').should('exist')

})

it('TC05 - Login hanya mengisi username', ()=>{

    cy.intercept('POST','**/auth/validate').as('login')

    cy.get(loginPage.username).type('Admin')
    cy.get(loginPage.loginBtn).click()

    cy.contains('Required').should('exist')

})

it('TC06 - Login hanya mengisi password', ()=>{

    cy.intercept('POST','**/auth/validate').as('login')

    cy.get(loginPage.password).type('admin123')
    cy.get(loginPage.loginBtn).click()

    cy.contains('Required').should('exist')

})

it('TC07 - Login dengan username spasi', ()=>{

    cy.intercept('POST','**/auth/validate').as('login')

    cy.login('   ','admin123')

    cy.contains('Required').should('exist')

})

it('TC08 - Klik forgot password dari halaman login', ()=>{

    cy.get(loginPage.forgotBtn).click()
    cy.url().should('include','requestPasswordResetCode')

})

})