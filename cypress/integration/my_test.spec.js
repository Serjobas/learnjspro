describe('main scenarious', () => {
  it('true should be equal true', () => {
    cy.visit('/');
    cy.click('.elementId');
    expect(1)to.eqaual(2);
  })
})
