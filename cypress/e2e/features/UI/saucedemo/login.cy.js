
describe('Page Validations (smoke)',{tags:'@regression'},() => {

    it('Valid user Login (smoke)', () => {
        cy.PageElements();
        const txtter =cy.get('h1').last().invoke('text')
        cy.log(txtter)

    })


})