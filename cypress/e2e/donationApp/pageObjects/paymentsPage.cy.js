/// <reference types="cypress" />
import 'cypress-iframe';
let cardtype = "Credit / Debit card";
let cardholdername = "//*[@id='cardholderName']";
let giftAidcheckbox = "Yes I would like Cancer Research UK to claim Gift Aid on my donation"


let userdata;
before(() => {
    cy.fixture('dono').then((data) => {
        userdata = data;
    })
}
)

class payments {
    selectCardtype() {
        cy.contains(cardtype).click()
    }

    selectGiftaid() {
        cy.contains(giftAidcheckbox).click()
    }
    enterCarddetails() {
        cy.xpath(cardholdername).type(userdata.firstname)
        let intNumber = parseInt(userdata.cardNumber)

        //Code to manage iframes in payment portal ..........................
        cy.wait(5000)
        cy.get('#braintree-hosted-field-number').then($element => {
            const $body = $element.contents().find('body')
            let stripe = cy.wrap($body)
            stripe.eq(0).click().type(intNumber)
        })
        let expNumber = parseInt(userdata.cardExpiry)
        cy.get('#braintree-hosted-field-expirationDate').then($element => {
            const $body = $element.contents().find('body')
            let stripe = cy.wrap($body)
            stripe.eq(0).click().type(expNumber)
        })
        let cvvNumber = parseInt(userdata.cvv) 
        cy.get('#braintree-hosted-field-cvv').then($element => {
            const $body = $element.contents().find('body')
            let stripe = cy.wrap($body)
            stripe.eq(0).click().type(cvvNumber)
        })



    }
    clickCompletemyapplication() {
        cy.contains('Complete my donation').click()

    }


}
export default payments;