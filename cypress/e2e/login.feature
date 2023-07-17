Feature: Validate login functionality

Scenario: Verify Login with Valid credentials

Given User launch the Application 
When User enter username as "Admin"
And User enter password as "admin123"
And User clciks on the Login button 
Then User should be navigated to dashboard Page 

Scenario: Verify Login with invalid username and Valid password

Given User launch the Application 
When User enter username as "Admnjhjuin"
And User enter password as "admin123"
And User clciks on the Login button 
Then User should get error message 

Scenario: Verify Login with valid username and InValid password

Given User launch the Application 
When User enter username as "Admin"
And User enter password as "admin1fhwhnfu23"
And User clciks on the Login button 
Then User should get error message 

Scenario: Verify Login with invalid username and InValid password

Given User launch the Application 
When User enter username as "Adwejfhbuimin"
And User enter password as "admin1fhwhnfu23"
And User clciks on the Login button 
Then User should get error message 