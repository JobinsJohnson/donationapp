/// <reference types="cypress" />
let title = "//select[@name='title']";
let firstName = "#forename";
let lastName = "#surname";
let email = "#emailAddress";
let phoneNumber = "#phoneNumber";
let postCode = "#postalCode";
let findAddressbutton = "//button[@class='sc-hKMtZM byQprh']"
let selectAddress = "#addressSelection";
let emailOptinno = "(//*[@class='sc-bBrHrO dyrTdO'])[2]"
let submitButton = "//*[contains(text(),'Continue')]";
let emailNo = ":nth-child(1) > .OptIn__OptInFlex-sc-177kya2-4 > .sc-bBXxYQ > :nth-child(3) > .sc-bBrHrO";

//import datas from "./fixtures/dono.json";
let userdata;
before(() => {
    cy.fixture('dono').then((data) => {
        userdata = data;
    })
}
)
class personalDetails {
    validatedetailspage() {

        cy.url().should('contain', 'details')
    }
    enterTitle() {
        cy.xpath(title).select("Mr")
    }
    enterdetails() {

        cy.get(firstName).type(userdata.firstname)
        cy.get(lastName).type(userdata.lastname)
        cy.get(email).type(userdata.email)
        cy.get(phoneNumber).type(userdata.phone)

    }
    enterPostcode() {
        const homeaddress = userdata.homeAddress
        const postcde = homeaddress.postcode
        cy.get(postCode).type(postcde)

    }
    findAdress() {
        const homeaddress = userdata.homeAddress
        const address = homeaddress.address1 + ', '+ homeaddress.town + ', ' +homeaddress.postcode
        cy.xpath(findAddressbutton).click()
        cy.get(selectAddress).should('be.visible')

        cy.get(selectAddress).select(address)
        cy.get(emailNo).click()
        cy.wait(5000)
       
        cy.xpath(submitButton).click()
    }

}
export default personalDetails;