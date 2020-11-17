@epam
Feature: Home Page Title

Scenario: Page title
    Given I open "https://www.epam.com/"
    Then Page title should be "EPAM | Enterprise Software Development, Design & Consulting"
        And Page title should not be "EPAM Title"
    When I wait 4 seconds
