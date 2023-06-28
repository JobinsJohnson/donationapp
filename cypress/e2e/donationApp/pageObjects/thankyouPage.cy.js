/// <reference types="cypress" />

let value;
class thankyouPage {

    waitUntilpageloads() {
        cy.waitUntil(() => {
            cy.url().should('include', 'https://app.pws.int.cruk.org/support-us/thanks');
        }, { timeout: 10000, interval: 1000 });


    }

    getReferenceNumber() {

        cy.contains(':nth-child(3) > .sc-bjUoiL > :nth-child(2)').then(($element) => {
            value = $element.text();
        })

    }

    validateResponse() {

        cy.intercept('POST', 'https://api.pws.int.cruk.org/transaction').as('apiRequest');

        // Perform actions that trigger the API call

        cy.wait('@apiRequest').then((interception) => {
            const response = interception.response;
            expect(response.body.id).to.contain(value)

        });
    }

}
export default thankyouPage;