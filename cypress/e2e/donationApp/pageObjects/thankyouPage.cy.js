/// <reference types="cypress" />
let monthlyButton = "//*[contains(text(),'Yes, I’d like to give monthly')]"
let value;

class thankyouPage {


    getReferenceNumber() {
        cy.wait(20000)
        cy.waitUntil(() => cy.xpath(monthlyButton).should('be.visible'))
        //cy.contains(':nth-child(3) > .sc-bjUoiL > :nth-child(2)').then(($element) => {
        //    value = $element.text();
        //  })

        cy.get('p strong').invoke('text').then((text) => {
            value = text;
            console.log(text);
        });

    }

    validateResponse() {

        cy.intercept('POST', 'https://api.pws.int.cruk.org/transaction').as('apiRequest');
        cy.wait('@apiRequest').then((interception) => {
            const response = interception.response;
            expect(value).to.contain(response.body.id)

        });
    }

}
export default thankyouPage;