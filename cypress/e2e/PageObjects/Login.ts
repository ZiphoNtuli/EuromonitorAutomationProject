export class Login {

    get login_button(){
        return cy.get('[data-test="login-button')
    } 
    get logo(){
        return cy.get('.login_logo')
    } 
    get username_txt(){
        return cy.get('[data-test="username"]')
    } 
    get password(){
        return cy.get('[data-test="password"]')
    } 

    get validation(){
        return cy.get('[data-test="error"]')
    } 
    get HomePage(){
        return cy.get('.app_logo')
    } 
}