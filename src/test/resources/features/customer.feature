Feature: Adequate Shop API Test

  @test_scenario
  Scenario Outline: Create customer with <name> and <location>
    Given I set the base URL
    When I Add user with '<name>' and location '<location>'
    Then the response code should be 201

    Examples:
      | name  | location |
      | abc   | pune     |
      | def   | mumbai   |

  @test_scenario
  Scenario Outline: Verify Customer Details with <id>
    Given I set the base URL
    When I get the Customer details with id <id>
    Then the response code should be 200
    And the customer name should be '<name>'
    And the product location should be '<location>'

    Examples:
      | id    | name    | location |
      | 216749| Vikram  | pune     |
      | 216927| Abegail   | Bulacan   |
