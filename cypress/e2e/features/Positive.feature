@runThis @run
Feature: Positive
     Background:
         Given I navigate to "Swag labs" login page
        When Click on Login button in "Swag labs" login page
        Then Validation errors for Username and Password are displayed
        When Enter valid Username 
        When Click on Login button in "Swag labs" login page
        Then Validation errors for Password are displayed
        When Enter valid Password
        And Click on Login button in "Swag labs" login page
        Then I confirm iam on "Swag Labs" home page 

     Scenario:  Add Item To Cart 
     Given Iam on "Swag Labs"  Product Page 
     And Confirm "Sauce Labs Backpack" text and "Sauce Labs Backpack" price
     When Click the "Sauce Labs Backpack" Add to Cart button on the Swag Labs Product Page 
     Then I Confirm Cart first Product Confirm notification 
     When Click the "Sauce Labs Bolt T-Shirt" Option data on the Swag Labs Products Page 
     And Confirm "Sauce Labs Bolt T-Shirt" text and "Sauce Labs Bolt T-Shirt" price
     When Click the "Sauce Labs Bolt T-Shirt" Add to Cart button on the Swag Labs Item Page 
     Then I Confirm Cart second Product Confirm notification 
     And Click Back to Product button

     Scenario:  Edit Cart 
     Given Iam on "Swag Labs"  Product Page
     When Click the "Sauce Labs Backpack" Add to Cart button on the Swag Labs Product Page
     Then I Confirm Cart first Product Confirm notification 
     When Click the "Sauce Labs Bolt T-Shirt" Option data on the Swag Labs Products Page
     And  Click the "Sauce Labs Bolt T-Shirt" Add to Cart button on the Swag Labs Item Page
     Then I Confirm Cart second Product Confirm notification 
     When Click on the Cart Icon from the "Swag Labs" home page 
     Then Iam on Cart Page 
     And Confirm "Sauce Labs Backpack" and Quantity , "Sauce Labs Backpack" price 
     And Confirm "Sauce Labs Bolt T-Shirt" and Quantity , "Sauce Labs Bolt T-Shirt" price
     When Click on the button remove on the "Sauce Labs Backpack" 
     When Click on the button remove on the "Sauce Labs Bolt T-Shirt"
     And I Click Continue Shopping button from the Cart Page 
     Given Iam on "Swag Labs"  Product Page 

     

          

          

    