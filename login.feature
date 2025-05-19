Feature: User Login Validation

  Scenario: Attempt login with invalid credentials
    Given I navigate to the login page
    When I enter invalid username "invalid_user" and password "wrong_password"
    Then An error message "Invalid login credentials" should be displayed