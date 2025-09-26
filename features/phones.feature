Feature: Phones & PDAs
  Scenario: Phones & PDAs category shows products with names and prices
    Given I open the OpenCart demo home page
    When I navigate to the "Phones & PDAs" category page
    Then every listed product shows a name and a price
