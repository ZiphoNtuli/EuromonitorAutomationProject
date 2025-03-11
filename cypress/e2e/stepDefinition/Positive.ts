import { When, Then, Given, AfterAll } from "@badeball/cypress-cucumber-preprocessor";
 import {Positive} from "../PageObjects/Positive";
 import Actions from "../Accelerators/Actions"
 import data from "../../fixtures/Positive-config.json";

 const Act = new Actions();

 const PositiveTest= new Positive();

 //Add Item To Cart
 Given('Iam on "Swag Labs"  Product Page', function () {
    Act.elementContainsText(PositiveTest.ProductPage,data.ProductPage,"page validation")
});


When('Confirm "Sauce Labs Backpack" text and "Sauce Labs Backpack" price', () => {
Act.isElementVisible(PositiveTest.Backpack_txt,"validation")
 Act.isElementVisible(PositiveTest.BackPackPrice,"validation")
});

When('Click the "Sauce Labs Backpack" Add to Cart button on the Swag Labs Product Page', () => {

    Act.clickOnElement(PositiveTest.AddBackPack,"Button")
});

Then('I Confirm Cart first Product Confirm notification', () => {
    cy.wait(5000);
    Act.elementContainsText(PositiveTest.CartIcon,"1","validation")
});

When('Click the "Sauce Labs Bolt T-Shirt" Option data on the Swag Labs Products Page', () => {
    cy.wait(2000);
    Act.clickOnElement(PositiveTest.TShirt_txt,"Button")
});

When('Confirm "Sauce Labs Bolt T-Shirt" text and "Sauce Labs Bolt T-Shirt" price', () => {
    cy.wait(5000);
    Act.elementContainsText(PositiveTest.TShirt_Inventory_txt,data.Tshirt,"validation")
    Act.elementContainsText(PositiveTest.TshirtPrice,data.TshirtPrice,"validation")
 });

 When('Click the "Sauce Labs Bolt T-Shirt" Add to Cart button on the Swag Labs Item Page', () => {
    Act.clickOnElement(PositiveTest.AddTshirt,"Button")
 });

Then('I Confirm Cart second Product Confirm notification', () => {
    Act.elementContainsText(PositiveTest.CartIcon,"2","validation")
});

When('Click Back to Product button', () => {
    Act.clickOnElement(PositiveTest.BackButton,"Button")
 });

//Edit Cart

When('Click on the Cart Icon from the "Swag Labs" home page', () => {
    Act.clickOnElement(PositiveTest.Cart,"Button")
 });

 Then('Iam on Cart Page', () => {
    cy.wait(2000);
    Act.elementContainsText(PositiveTest.CartPage,data.Cart,"validation")
});

When('Confirm "Sauce Labs Backpack" and Quantity , "Sauce Labs Backpack" price', () => {
    Act.isElementVisible(PositiveTest.BackpackQuantity,"validation")
    Act.isElementVisible(PositiveTest.Backpack_txt,"validation")
 });

When('Confirm "Sauce Labs Bolt T-Shirt" and Quantity , "Sauce Labs Bolt T-Shirt" price', () => {
         Act.isElementVisible(PositiveTest.TShirtQuantity,"validation")
        Act.elementContainsText(PositiveTest.TShirt_Inventory_txt,data.Tshirt,"validation")
        Act.elementContainsText(PositiveTest.TshirtPrice,data.TshirtPrice,"validation")
 });    

When('Click on the button remove on the "Sauce Labs Backpack"', () => {
    Act.clickOnElement(PositiveTest.RemoveBackpack,"Button")
 });

 When('Click on the button remove on the "Sauce Labs Bolt T-Shirt"', () => {
    Act.clickOnElement(PositiveTest.RemoveTShirt,"Button")
 });

 When('I Click Continue Shopping button from the Cart Page', () => {
    Act.clickOnElement(PositiveTest.ContinueShopping,"Button")
 });
