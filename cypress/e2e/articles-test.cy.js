describe('Article App Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/')
  })

  it('renders at http://localhost:3001/', () => {
    cy.get('h2').should('contain', 'Articles')
  })

  it('filters articles based on All radio button', () => {
    cy.get('input[value="all"]').check()
    cy.get('.article-title').should('exist')
  })

  it('displays the status of each article when All radio button is selected', () => {
    cy.get('input[value="all"]').check()
    cy.get('.article-container').each(($article) => {
      const status = $article.find('.article-status').text()
      expect(status).to.match(/^(Published|Unpublished)$/)
    })
  })
    
  it('shows only published articles when Published is selected', () => {
    cy.get('input[value="published"]').check()
    cy.get('.article-container').should('exist')
    cy.get('.article-status').each(($el) => {
      expect($el.text()).to.equal('Published')
    })
  })
    
  it('shows only unpublished articles when Unpublished is selected', () => {
    cy.get('input[value="unpublished"]').check()
    cy.get('.article-container').should('exist')
    cy.get('.article-status').each(($el) => {
      expect($el.text()).to.equal('Unpublished')
    })
  })
  
  it('expands the body of the article when the expand button is selected', () => {
    cy.wait(2000) // wait for page to load
    cy.get('.article-container').eq(0).find('.article-expand-btn').click()
    cy.get('.article-container').eq(0).find('.article-body').should('be.visible')
  })

  it('deletes the selected article from the list when the delete button is clicked', () => {
    cy.get('.article-container').last(0).find('.article-delete-btn').click()
    cy.get('.article-container').should('exist')
  })
})