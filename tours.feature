Feature: Tour Management and Booking

  Background:
    Given The application is on the home page

  @guest
  Scenario: Book a tour as a guest
    When I select a tour named "Paris City Tour"
    And I fill guest details: name "John Doe", email "john@example.com"
    And I confirm the booking
    Then A ticket is generated with booking reference

  @admin
  Scenario: Admin creates a new tour
    Given I am logged in as an admin
    When I navigate to the tour creation page
    And I create a tour with:
      | Name             | Amazon Rainforest Tour |
      | Destination      | Brazil                |
      | Available Slots  | 30                    |
      | Price            | 2000                  |
      | Description      | 7-day jungle adventure|
    Then The tour "Amazon Rainforest Tour" is listed

  @admin
  Scenario: View all bookings
    Given I am logged in as an admin
    When I navigate to the bookings page
    Then I see a list of all user bookings

  @admin
  Scenario: View all tickets
    Given I am logged in as an admin
    When I navigate to the tickets page
    Then I see all generated tickets