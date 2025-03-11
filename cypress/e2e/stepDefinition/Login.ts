import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { Login } from "../PageObjects/Login";
import Actions from "../Accelerators/Actions"
import data from "../../fixtures/Swag-config.json";

const Act = new Actions();
const LoginPage = new Login();

Given('I navigate to "Swag labs" login page', function () {
  
        cy.visit(data.url);
        Act.elementContainsText(LoginPage.logo,data.Logo,"logo validation")
    });


When('Click on Login button in "Swag labs" login page', () => {
    cy.wait(2000);
    Act.clickOnElement(LoginPage.login_button, "button")
});

Then('Validation errors for Username and Password are displayed', () => {
   
        Act.elementContainsText(LoginPage.validation, data.UsernameValidation_txt, "validation error message" )
    });



When('Enter valid Username', () => {
    cy.wait(2000);
    Act.typeInTextBox(LoginPage.username_txt,data.StandardUser, "username textbox")

});

Then('Validation errors for Password are displayed', () => {
   
    Act.elementContainsText(LoginPage.validation,data.PasswordValidation_txt, "validation error message" )
});

When('Enter valid Password', () => {
    cy.wait(2000);
    Act.typeInTextBox(LoginPage.password,data.password, "password textbox")
});

Then('I confirm iam on "Swag Labs" home page', () => {
   
    Act.elementContainsText(LoginPage.HomePage,data.Logo, "homepage" )
});
