describe('/mypage/comments', () => {
  beforeEach(() => {
    cy.login()
    cy.visit('/mypage/comments')
  })
  it('render /mypage/comments', () => {
    cy.title().should('include', 'Comments | shiiinji.dev')
  })

  it('unauthenticated user', () => {
    cy.logout()
    cy.get('[data-testid="prompt-login-button"]').should(
      'have.text',
      'ログインしてマイページ機能を試す',
    )
  })

  it('include comments table', () => {
    cy.get('[data-testid="skeleton-table-view"]').should('exist')
    cy.wait(2000)
    cy.get('[data-testid="skeleton-table-view"]').should('not.exist')
    cy.get('[data-testid="comments-table"]').should('exist')
  })

  it('render comment tab', () => {
    cy.get('[aria-label="mypage-tabs"]').should('exist')
    cy.get('[aria-controls="mypage-tabpanel-comments"]').should('exist')
  })
})
