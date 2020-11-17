@outline
Feature: Home Page Title

Scenario Outline: Page title <URL>
    Given I open "<URL>"
    Then Page title should be "<Title>"
        And Page title should not be "EPAM Title"
    When I wait 4 seconds

    Examples:
        | URL                     | Title                                                        |
        | https://www.epam.com/   | EPAM \| Enterprise Software Development, Design & Consulting |
        | https://www.google.com/ | Google                                                       |