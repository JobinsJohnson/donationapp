/// <reference types="cypress" />

let value;
class thankyouPage {

    
    getReferenceNumber() {
        cy.waitUntil(() =>  cy.contains(':nth-child(3) > .sc-bjUoiL > :nth-child(2)'), { timeout: 500000 });
        cy.contains(':nth-child(3) > .sc-bjUoiL > :nth-child(2)').then(($element) => {
            value = $element.text();
        })

    }

    validateResponse() {

        cy.intercept('POST', 'https://api.pws.int.cruk.org/transaction').as('apiRequest');
        cy.wait('@apiRequest').then((interception) => {
            const response = interception.response;
            expect(response.body.id).to.contain(value)

        });
    }

}
export default thankyouPage;