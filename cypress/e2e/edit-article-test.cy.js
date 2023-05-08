describe('edit article page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/')
  })

  it('brings user to the edit article page when the edit button is clicked on the home page', () => {
    cy.get('.article-container')
      .first()
      .find('.article-edit-btn')
      .wait(1000)
      .click()
    cy.url().should('include', '/edit-article/')
  })

  it('displays the details of the first article to be edited on the edit page', () => {
    cy.get('.article-container')
      .first()
      .find('.article-edit-btn')
      .wait(1000)
      .click()
    cy.url().should('include', '/edit-article/')
    cy.get('.edit-article-form') 
    .find('.article-title')
    .should('have.value', 'The Importance of Exercise')
    cy.get('#body').should('have.value', 'Exercise is crucial for maintaining good health and preventing chronic diseases. It can help you maintain a healthy weight, reduce your risk of heart disease and stroke, and improve your mental health. Whether you prefer running, swimming, or practicing yoga, incorporating regular exercise into your routine can help you feel and look your best.')
    cy.get('#published').should('be.checked')
  })
    
  it('allows user to edit the title, body, and published state', () => {
    cy.visit('/edit-article/1')
    cy.get('#title').clear().type('Edited Article')
    cy.get('#body').clear().type('This is the edited article.')
    cy.get('#published').uncheck()
    cy.get('#published').should('not.be.checked')
  })
    
  it('updates the article details when user clicks the save button', () => {
    cy.visit('/edit-article/8')
    cy.get('#title').clear().type('Edited Article')
    cy.get('#body').clear().type('This is the edited article.')
    cy.get('#published').uncheck()
    cy.get('#save-article-btn').click()
    cy.url().should('eq', 'http://localhost:3001/')
    cy.get('.article:first .title').should('have.text', 'Edited Article')
    cy.get('.article:first .body').should('have.text', 'This is the edited article.')
    cy.get('.article:first .status').should('have.text', 'Unpublished')
  }) 
})