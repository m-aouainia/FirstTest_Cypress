describe('google account login', () => {
  it('go to account page', () => {
    cy.visit('https://accounts.google.com/')
    //cy.click(email)
    //expect(false).to.equal(true)
    cy.get('input[id="identifierId"]').type('example@example.com')
    cy.get('#identifierNext > div > button').click();
  })
  it('confirm no sign in', () => {
    cy.get('#headingText > span').should('be.visible')
  }) 
  it('take screenshot', () => {
    cy.screenshot('test')
  })
  it('return to account', () => {
    cy.get('#next > div > div > a').click();
  })
  })