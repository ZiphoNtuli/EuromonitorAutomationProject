@runThis @run
Feature: Negative

Scenario: Login - Locked_user
    Given I navigate to "Swag labs" login page
    When Click on Login button in "Swag labs" login page
    Then Validation errors for Username and Password are displayed
    When Enter valid LockedUser 
    And Click on Login button in "Swag labs" login page
    Then Validation errors for Password are displayed
    When Enter valid Password
    And Click on Login button in "Swag labs" login page
    Then Confirm Validation for Locked User 

Scenario: Chekout - Problem_user
    Given I navigate to "Swag labs" login page
    When Click on Login button in "Swag labs" login page
    Then Validation errors for Username and Password are displayed
    When Enter valid Problem User
    And Click on Login button in "Swag labs" login page
    Then Validation errors for Password are displayed
    When Enter valid Password
    And Click on Login button in "Swag labs" login page
    Then I confirm iam on "Swag Labs" home page 
    Given Iam on "Swag Labs"  Product Page
    When Click the "Sauce Labs Backpack" Add to Cart button on the Swag Labs Product Page
    Then I Confirm Cart first Product Confirm notification 
    When Click on the Cart Icon from the "Swag Labs" home page 
    Then Iam on Cart Page 
    And Confirm "Sauce Labs Backpack" and Quantity , "Sauce Labs Backpack" price 
    When Click on the button checkout 
    Then Iam on "Checkout Your Information" Page 
    When Click on the button Continue 
    Then I Confirm First Name required Validation
    And I Enter "Fist Name" on the "Checkout Your Information" Page 
    When Click on the button Continue 
    Then I Confirm Last Name required Validation
    And I Enter "Last Name" on the "Checkout Your Information" Page 
    Then I Confirm Last Name required Validation

    


   
     