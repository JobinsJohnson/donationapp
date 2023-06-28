/// <reference types="cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import homepage from "./pageObjects/homepage.cy"
import personalDetails from "./pageObjects/personalDetailspage.cy"
import payments from "./pageObjects/paymentsPage.cy"
import thankyoupage from "./pageObjects/thankyouPage.cy"



const hmepage = new homepage();
const prsndtls = new personalDetails();
const pymnts = new payments();
const thnkyou = new thankyoupage();



Given("able to login to the application successfully", () => {
  hmepage.visit();
}),

  Then("user should be able to accept coockies and select the donation amount", () => {
    hmepage.donationAmount()
    cy.waitUntil(() => cy.get('#onetrust-accept-btn-handler').click(), { timeout: 10000 });
    //cy.get('#onetrust-accept-btn-handler').click();

    Then("user should be able to select the donation type", () => {
      hmepage.donationType();
    })

    When("user selects the motivation type", () => {
      hmepage.motivationDropdown();
    })

    Then("user should be able to select the donation goes to and cancer type and click continue button", () => {
      hmepage.clickdonationgoesto();
      hmepage.clickdonationContinueButton();

    })

    Then("user should be in the personal details page", () => {
      prsndtls.validatedetailspage();
    })

    And("user should be able to enter personal details and click submit button", () => {
      prsndtls.enterTitle();
      prsndtls.enterdetails();
      prsndtls.enterPostcode();
      prsndtls.findAdress();

    })

    Then("user should be able to enter payment details and click submit application button", () => {
      pymnts.selectCardtype();
      pymnts.selectGiftaid();
      pymnts.enterCarddetails()
      pymnts.clickCompletemyapplication();
      cy.wait(20000)

    })
    And("user should be in thank you page and able to see the payment reference",() => {
      thnkyou.getReferenceNumber();
      thnkyou.validateResponse();
    })




  });



