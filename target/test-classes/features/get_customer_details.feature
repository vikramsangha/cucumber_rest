
Feature: Adequate Shop API Test

@test_post

	Scenario: Create customer
		Given I set the base URL
    When Add user with 'abc' and 'efgh@gmail.com' and location 'pune'
    Then Status code is 201
    
  Scenario: Verify Customer Details
    Given I set the base URL
    When I get the Customer details with id 216749
    Then the response code should be 200
    And the customer name should be 'Vikram'
    And the product location should be 'pune'