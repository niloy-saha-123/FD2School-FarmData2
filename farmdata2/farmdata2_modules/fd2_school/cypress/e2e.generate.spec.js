describe("Test harvest report generation", () => {
  beforeEach(() => {
    cy.login("manager1", "farmdata2")
    cy.visit("/farm/fd2-school/e2e")
  })

  it("Generate report when button is clicked", () => {
    it("Generate report when button is clicked", () => {
      // Check header is not visible before clicking
      cy.get('[data-cy=report-title]').should('not.be.visible')
      
      // Click the generate report button
      cy.get('[data-cy=generate-report-button]').click()
      
      // Wait for the report title to become visible
      cy.get('[data-cy=report-title]').should('be.visible')
    })    
  })
})
