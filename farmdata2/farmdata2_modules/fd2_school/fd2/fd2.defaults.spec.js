describe("Test the harvest report default values", () => {
  beforeEach(() => {
    cy.login("manager1", "farmdata2")
    cy.visit("/farm/fd2-school/fd2")
  })

  it("Check the page header", () => {
    cy.get('[data-cy=page-header]')
      .should('have.text', 'Harvest Report')
  })

  it("Check the default dates", () => {
    cy.get('[data-cy=start-date]')
      .should('have.value', '2020-05-05')
    
    cy.get('[data-cy=end-date]')
      .should('have.value', '2020-05-15')
  })

  it("Check the crop dropdown", () => {
    cy.get('[data-cy=crop-dropdown]')
  })
})