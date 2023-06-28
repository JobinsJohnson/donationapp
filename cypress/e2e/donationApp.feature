Feature: Testing of the cancer UK donation application E2E flow 
Scenario: Validate user is able to complete a donation to the organisation
Given able to login to the application successfully 
Then user should be able to accept coockies and select the donation amount
Then user should be able to select the donation type 
When user selects the motivation type 
Then user should be able to select the donation goes to and cancer type and click continue button
Then user should be in the personal details page 
And user should be able to enter personal details and click submit button
Then user should be able to enter payment details and click submit application button