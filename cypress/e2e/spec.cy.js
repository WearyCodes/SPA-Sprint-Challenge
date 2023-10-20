describe('template spec', () => {
  it('Can load the site', () => {
    cy.visit('http://localhost:3000')
  })
  it('Can visit the /pizza page', () => {
    cy.visit('http://localhost:3000/pizza')
  })
})