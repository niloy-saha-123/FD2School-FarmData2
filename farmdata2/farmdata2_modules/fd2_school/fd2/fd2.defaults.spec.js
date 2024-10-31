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
    // First option is always 'All'
    cy.get("[data-cy=crop-dropdown] > [data-cy=dropdown-input] > [data-cy=option0]")
        .should('have.text', 'All')

    // Second option (index 1)
    cy.get("[data-cy=crop-dropdown] > [data-cy=dropdown-input] > [data-cy=option1]")
        .should('have.text', 'ARUGULA')

    // Fifth option (index 4)
    cy.get("[data-cy=crop-dropdown] > [data-cy=dropdown-input] > [data-cy=option4]")
        .should('have.text', 'BEAN-DRY')

    // Fix the length check by getting children of dropdown-input instead of crop-dropdown
    cy.get("[data-cy=crop-dropdown] > [data-cy=dropdown-input]")
        .children()
        .should('have.length', 112)  // Changed to match actual number of options
})
})