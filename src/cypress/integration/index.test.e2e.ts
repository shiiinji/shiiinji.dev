describe('/', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('ページタイトル', () => {
    cy.title().should('eq', 'shiiinjiののブログ&ポートフォリオサイトです。')
  })
})
