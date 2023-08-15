Feature: Login to Vehicle Renting System
    Scenario: Login to the Page with Valid details
        Given I open the Vehicle Renting System app
        When I enter 'username' and 'password'
        Then I click on Submit button