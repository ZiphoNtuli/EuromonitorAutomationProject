export class Negative {
    get Checkout(){
     return cy.get('[data-test="checkout"]')
  } 
  get CheckoutHome(){
     return cy.get('[data-test="title"]')
  } 
 get FirstName(){
     return cy.get('[data-test="firstName"]')
  } 
    get LastName(){
     return cy.get('[data-test="lastName"]')
 } 
 get PostalCode(){
     return cy.get('[data-test="postalCode"]')
 } 
 get ErrorMessage(){
     return cy.get('[data-test="error"]')
 } 
 get Finish(){
     return cy.get('[data-test="finish"]')
 }
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
get continue(){
    return cy.get('[data-test="continue"]')
} 

get validation(){
    return cy.get('[data-test="error"]')
} 
get HomePage(){
    return cy.get('.app_logo')
} 
 }