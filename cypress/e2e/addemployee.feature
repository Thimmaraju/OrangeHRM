Feature: Verify Add Employee functionality

    Validating Add emplohyee positive and negative tests

    Background: Navigate up to Add Employee Page

        Given User launch the Application
        When User enter username as "Admin"
        And User enter password as "admin123"
        And User clciks on the Login button
        Then User should be navigated to dashboard Page
        When User clicks on the PIM Menu
        And  User clicks on the Add Employee

    Scenario Outline: Verify add employee with valid details

        And  User Enter firstname as "<firstname>"
        And User Enter lastname as "<lastname>"
        And User clicks on Save button
        Then User should get succcessfull message

        Examples:
            | firstname | lastname |
            | Raju      | G        |
            | Kiran     | K        |
            | Harsha    | Gowda    |
            | Padeep    | Gowda    |
    Scenario: Verify add employee mandotory details

        And User clicks on Save button
        Then User get error message like Required
