/// <reference types="cypress" />
let monthlyButton = "//*[contains(text(),'Yes, I’d like to give monthly')]"
const transactionApi = "https://api.pws.int.cruk.org/transaction"
let value;

class thankyouPage {

    getReferenceNumber() {
       cy.wait(20000)
        cy.waitUntil(() => cy.xpath(monthlyButton).should('be.visible'))
        cy.get('p strong').invoke('text').then((text) => {
            value = text;
            console.log(text);
        });

    }

    validateResponse() {

        cy.intercept('POST', transactionApi).as('apiRequest');
        cy.wait('@apiRequest').then((interception) => {
            const response = interception.response;
            expect(value).to.contain(response.body.id)

        });
    }

}
export default thankyouPage;