describe('Add Article page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/')
  })
      
  it('brings user to http://localhost:3001/add-article when Add new article button is clicked', () => {
      cy.get('.article-add-btn').click()
      cy.url().should('include', '/add-article')
  })
    
  it('defaults published checkbox to unchecked on add article screen', () => {
      cy.get('.article-add-btn').click()
      cy.get('#published').should('not.be.checked')
  })
    
  it('adds a new article when title, body, and published state are completed and Add Article button is clicked', () => {
    cy.get('.article-add-btn').click()
    cy.get('#title').type('Test Article')
    cy.get('#body').type('This is a test article.')
    cy.get('#published').check()
    cy.wait(2000)
    cy.get('.add-article-button').click();
    cy.wait(2000)
    cy.get('.article-container').should('exist')
  })
    
  it('brings user back to home page when Go back to list articles page button is clicked on Add New Article page', () => {
    cy.get('.article-add-btn').click()
    cy.get('a').contains('Go back to list articles page').click()
    cy.url().should('eq', 'http://localhost:3001/')
  })
})