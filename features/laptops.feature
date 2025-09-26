Feature: Laptops & Notebooks
  Scenario: Laptops & Notebooks -> Show All shows products with names and prices
    Given I open the OpenCart demo home page
    When I navigate to "Laptops & Notebooks" and click Show All
    Then I should see at least 1 product(s) with name and price
