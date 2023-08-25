describe('Parsing and Accessing JSON Data', () => {
    let table;
  
    before(() => {
      cy.fixture('singlecountry.json').then((data) => {
        table = data;
      });
    });
  
    it('Accesses and Logs JSON Data', () => {
      const value = table[0].name.common;
      cy.log(value);
      cy.wrap(value).should('eq', 'South Africa');
    });
  });
  