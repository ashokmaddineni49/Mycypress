describe('template spec', () => {
  it('passes', {
    retries: {
      runMode: 2,
      openMode: 1,
    },
  }, () => {
    cy.PageElements();
  })
})