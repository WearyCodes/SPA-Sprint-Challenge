describe('template spec', () => {
  it('Can load the site', () => {
    cy.visit('http://localhost:3000')
  })
  it('Can visit the /pizza page and type name', () => {
    cy.visit('http://localhost:3000/pizza')
    cy.get('#name-input').click().type('Testing')
  })
  it('Can select toppings and submit form', () => {
    cy.visit('http://localhost:3000/pizza')
    cy.get('#name-input').click().type('Testing')
    cy.get('#pepperoni').click().click().should('be.checked')
    cy.get('#order-button').click()
  })
})