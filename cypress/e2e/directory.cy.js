import { directoryPage } from "../support/pageObject"

describe('Directory Menu', () => {

beforeEach(()=>{

    cy.visit('/web/index.php/auth/login')

    cy.intercept('POST','**/auth/validate').as('login')

    cy.login('Admin','admin123')

    cy.wait('@login')

})

it('TC15 - Membuka menu Directory', ()=>{

    cy.get(directoryPage.menuDirectory).click()

})

it('TC16 - Search employee valid', ()=>{

    cy.get(directoryPage.menuDirectory).click()

    cy.intercept('GET','**/directory/employees*').as('search')

    cy.get(directoryPage.searchName).type('Linda')
    cy.get(directoryPage.searchBtn).click()

    cy.wait('@search')

})

it('TC17 - Search employee tanpa input', ()=>{

    cy.get(directoryPage.menuDirectory).click()

    cy.intercept('GET','**/directory/employees*').as('search')

    cy.get(directoryPage.searchBtn).click()

    cy.wait('@search')

})

it('TC18 - Reset search directory', ()=>{

    cy.get(directoryPage.menuDirectory).click()

    cy.get(directoryPage.searchName).type('Admin')
    cy.get(directoryPage.resetBtn).click()

})

it('TC19 - Search employee partial name', ()=>{

    cy.get(directoryPage.menuDirectory).click()

    cy.intercept('GET','**/directory/employees*').as('search')

    cy.get(directoryPage.searchName).type('Lin')
    cy.get(directoryPage.searchBtn).click()

    cy.wait('@search')

})

it('TC20 - Reload lalu buka directory', ()=>{

    cy.reload()
    cy.get(directoryPage.menuDirectory).click()

})

})