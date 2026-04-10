import { loginPage } from "./pageObject"

Cypress.Commands.add('login',(username,password)=>{

cy.get(loginPage.username).type(username)
cy.get(loginPage.password).type(password)
cy.get(loginPage.loginBtn).click()

})