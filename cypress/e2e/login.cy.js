import { loginPage } from "../support/pageObject"

describe('Login OrangeHRM', () => {

beforeEach(() => {
    cy.visit('/web/index.php/auth/login')
    cy.fixture('user').as('user')
})

it('TC01 - Login valid', function () {
    cy.intercept('POST','**/auth/validate').as('login')
    cy.login(this.user.username,this.user.password)
    cy.wait('@login')
})

it('TC02 - Password salah', function(){
    cy.intercept('POST','**/auth/validate').as('login')
    cy.login(this.user.username,this.user.wrongPassword)
    cy.wait('@login')
})

it('TC03 - Username salah', function(){
    cy.intercept('POST','**/auth/validate').as('login')
    cy.login(this.user.wrongUsername,this.user.password)
    cy.wait('@login')
})

it('TC04 - Tanpa username password', ()=>{
    cy.get(loginPage.loginBtn).click()
    cy.contains('Required').should('exist')
})

it('TC05 - Hanya username', ()=>{
    cy.get(loginPage.username).type('Admin')
    cy.get(loginPage.loginBtn).click()
    cy.contains('Required').should('exist')
})

it('TC06 - Hanya password', ()=>{
    cy.get(loginPage.password).type('admin123')
    cy.get(loginPage.loginBtn).click()
    cy.contains('Required').should('exist')
})

it('TC07 - Username spasi', ()=>{
    cy.get(loginPage.username).type('   ')
    cy.get(loginPage.password).type('admin123')
    cy.get(loginPage.loginBtn).click()
})

it('TC08 - Klik forgot password', ()=>{
    cy.get(loginPage.forgotBtn).click()
})

it('TC09 - Username huruf kecil', ()=>{
    cy.intercept('POST','**/auth/validate').as('login')
    cy.login('admin','admin123')
    cy.wait('@login')
})

it('TC10 - Password huruf besar', ()=>{
    cy.intercept('POST','**/auth/validate').as('login')
    cy.login('Admin','ADMIN123')
    cy.wait('@login')
})

it('TC11 - Username panjang', ()=>{
    cy.intercept('POST','**/auth/validate').as('login')
    cy.login('AdminAdmin','admin123')
    cy.wait('@login')
})

it('TC12 - Login tekan enter', ()=>{
    cy.get(loginPage.username).type('Admin')
    cy.get(loginPage.password).type('admin123{enter}')
})

})