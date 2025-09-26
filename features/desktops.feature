Feature: Desktops
  As a shopper
  I want to browse all desktop products
  So I can verify names and prices

  Scenario: Desktop -> Show All Desktops shows products with names and prices
    Given I open the OpenCart demo home page
    When I navigate to "Desktops" and click Show All
    Then I should see at least 1 product(s) with name and price
