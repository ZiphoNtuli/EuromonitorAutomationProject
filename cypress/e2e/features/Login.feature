@runThis @run
Feature: Login

    Scenario: Login 
        Given I navigate to "Swag labs" login page
        When Click on Login button in "Swag labs" login page
        Then Validation errors for Username and Password are displayed
        When Enter valid Username 
        When Click on Login button in "Swag labs" login page
        Then Validation errors for Password are displayed
        When Enter valid Password
        And Click on Login button in "Swag labs" login page
        Then I confirm iam on "Swag Labs" home page 

