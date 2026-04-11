import { directoryPage } from "../support/pageObject"

describe('Directory OrangeHRM', () => {

beforeEach(()=>{

    cy.visit('/web/index.php/auth/login')

    cy.intercept('POST','**/auth/validate').as('login')

    cy.login('Admin','admin123')

    cy.wait('@login')

})

it('TC21 - Buka menu directory', ()=>{
    cy.get(directoryPage.menuDirectory).click()
})

it('TC22 - Search employee valid', ()=>{
    cy.get(directoryPage.menuDirectory).click()

    cy.intercept('GET','**/directory/employees*').as('search')

    cy.get(directoryPage.searchName).type('Linda')
    cy.get(directoryPage.searchBtn).click()

    cy.wait('@search')
})

it('TC23 - Search kosong', ()=>{
    cy.get(directoryPage.menuDirectory).click()
    cy.get(directoryPage.searchBtn).click()
})

it('TC24 - Reset search', ()=>{
    cy.get(directoryPage.menuDirectory).click()
    cy.get(directoryPage.searchName).type('Admin')
    cy.get(directoryPage.resetBtn).click()
})

it('TC25 - Search partial', ()=>{
    cy.get(directoryPage.menuDirectory).click()

    cy.intercept('GET','**/directory/employees*').as('search')

    cy.get(directoryPage.searchName).type('Lin')
    cy.get(directoryPage.searchBtn).click()

    cy.wait('@search')
})

it('TC26 - Reload directory', ()=>{
    cy.get(directoryPage.menuDirectory).click()
    cy.reload()
})

it('TC27 - Search huruf kecil', ()=>{
    cy.get(directoryPage.menuDirectory).click()

    cy.intercept('GET','**/directory/employees*').as('search')

    cy.get(directoryPage.searchName).type('linda')
    cy.get(directoryPage.searchBtn).click()

    cy.wait('@search')
})

it('TC28 - Search angka', ()=>{
    cy.get(directoryPage.menuDirectory).click()

    cy.intercept('GET','**/directory/employees*').as('search')

    cy.get(directoryPage.searchName).type('123')
    cy.get(directoryPage.searchBtn).click()

    cy.wait('@search')
})

it('TC29 - Search spasi', ()=>{
    cy.get(directoryPage.menuDirectory).click()
    cy.get(directoryPage.searchName).type('   ')
    cy.get(directoryPage.searchBtn).click()
})

it('TC30 - Open directory lalu refresh', ()=>{
    cy.get(directoryPage.menuDirectory).click()
    cy.reload()
})

})