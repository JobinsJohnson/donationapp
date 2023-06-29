/// <reference types="cypress" />
const url = 'https://app.pws.int.cruk.org/support-us/your-donation';
let motivationDropdown = "//*[@name='motivation']";
let donationAmt = "[data-cy='amount-sel-10']";
let donationGoes = "#destinationRadioGroup > .qosxO > .sc-kgflAQ > .sc-bBrHrO";
let cancerTyp = "//*[@data-testid='restrictionSelect']";
let donationContinueButton = "//button[@class = 'sc-hKMtZM iEeNAa']";
let donationName = "//input[@id='inMemoryName']"
let pageUrl = "https://app.pws.int.cruk.org/support-us/your-donation"

let userdata;
before(() => {
    cy.fixture('dono').then((data) => {
        userdata = data;

    })
}
)
class homepage {
    visit() {
        cy.visit(url);
        cy.url(url).should('eq', pageUrl)

    }
    donationAmount() {
        cy.get(donationAmt).click();
    }
    donationType() {
        cy.contains('Yes, this donation is my own money').click();
    }

    motivationDropdown() {
        cy.xpath(motivationDropdown).select(userdata.motivation);
        cy.xpath(donationName).type("tester")

    }

    clickdonationgoesto() {
        //cy.xpath(donationGoes).click()
        cy.get(donationGoes).click();
        cy.xpath(cancerTyp).select(userdata.cancerType);

    }

    clickdonationContinueButton() {
        cy.xpath(donationContinueButton).click();

    }










}
export default homepage;