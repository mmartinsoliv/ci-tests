Feature: Playwright site

    Scenario: Check title
        Given I open url "https://playwright.dev"
        When I click link "Get startesdfd"
        Then I see in title "Playwright"
