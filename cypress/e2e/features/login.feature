Feature: Login Functionality

  Scenario: Successful login with valid credentials
    Given I visit the login page
    When I enter valid email "pogba@gmail.com"
    And I enter valid password "34343434"
    And I click the sign in button
    Then I should be logged in successfully

  Scenario: Failed login with invalid credentials
    Given I visit the login page
    When I enter invalid email "wrong@thisshouldnotwork.com"
    And I enter invalid password "wrongPassword"
    And I click the sign in button
    Then I should see an error message