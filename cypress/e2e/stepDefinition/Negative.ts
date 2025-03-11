import { When, Then, Given, AfterAll } from "@badeball/cypress-cucumber-preprocessor";
 import {Negative} from "../PageObjects/Negative";
 import Actions from "../Accelerators/Actions"
 import data from "../../fixtures/Negative-config.json";

 const Act = new Actions();

 const NegativeTest= new Negative();

 //Locked User
Given('Enter valid LockedUser', function () {
    Act.typeInTextBox(NegativeTest.username_txt,data.LockedOutUser,"page validation")
});

Then('Confirm Validation for Locked User', function () {
    cy.wait(5000)
    Act.elementContainsText(NegativeTest.ErrorMessage,data.LockedOutUserValidation,"page validation")
});

//Problem User
Then('Enter valid Problem User', function () {
    Act.typeInTextBox(NegativeTest.username_txt,data.ProblemUser,"page validation")
});

When('Click on the button checkout', function () {
    Act.clickOnElement(NegativeTest.Checkout,"Button")
});

Then('Iam on "Checkout Your Information" Page', function () {
    cy.wait(5000)
    Act.elementContainsText(NegativeTest.CheckoutHome,data.Checkout_txt,"page validation")
});

When('Click on the button Continue', function () {
    Act.clickOnElement(NegativeTest.continue,"Button")
});

Then('I Confirm First Name required Validation', function () {
    Act.elementContainsText(NegativeTest.ErrorMessage,data.ValidName,"page validation")
});

When('I Enter "Fist Name" on the "Checkout Your Information" Page', function () {
    Act.typeInTextBox(NegativeTest.FirstName,data.Name,"page validation")
});

When('I Enter "Last Name" on the "Checkout Your Information" Page', function () {
    Act.typeInTextBox(NegativeTest.LastName,data.LastName,"page validation")
});
Then('I Confirm Last Name required Validation', function () {
    Act.elementContainsText(NegativeTest.ErrorMessage,data.ValidLastName,"page validation")
});