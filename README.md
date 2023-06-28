# Cancer Research Donation APP 
# Cypress JavaScript Framework with BDD Cucumber Integration
This README provides an overview and guide for using the Cypress JavaScript framework with BDD (Behavior-Driven Development) Cucumber integration. Cypress is a powerful end-to-end testing framework for web applications, and when combined with Cucumber, it allows you to write your tests in a human-readable format.
## Prerequisites

Before getting started, ensure you have the following prerequisites:

Node.js installed on your machine
A code editor of your choice (e.g., Visual Studio Code)
## Writing Tests

The tests are written using the Cucumber syntax, which is based on the Gherkin language. The feature files are located in the cypress/E2E directory. feature file describes a particular feature of your application and contains scenarios. the name of the feature file used in this framework is donationapp.feature.
##StepDefinitions file name (doanationApp.cy.js)
To implement the steps defined in the feature file, i have created corresponding step definitions. Step definitions are written in JavaScript and are located in the cypress/e2e/ folder.
## Page Objects.

Page objects are used to represent the different pages or components of your application, encapsulating the elements and actions related to them. They provide a more structured and reusable approach to interact with the application under test.
## Running Tests

use the following commands to run the test 
-> **npx cypress run --headed --browser chrome**

-> **npx cypress open**

# Assumptions and other points
Added **cy.wait()** before some elements as the elements take time to respond working on a workaround to avoid waits() from the code 

while finishing with payment in the payment page an error occurs please find the snnipet below 


![error](https://github.com/JobinsJohnson/donationapp/assets/137966127/eab23384-5a34-419f-93e6-60df71e7ce01)








