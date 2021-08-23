describe('/', () => {
  before(() => {
    cy.logout()
  })
  beforeEach(() => {
    cy.visit('/')
  })
  it('ページタイトル', () => {
    cy.title().should('eq', 'shiiinjiのブログ&ポートフォリオサイトです。')
  })

  it('Page transition, / → /blog/[id] → /login', () => {
    cy.url().should('include', '/')
    cy.get('ul li:first').click()
    cy.wait(1000)
    cy.url().should('include', '/blog')
    cy.wait(1000)
    cy.get('[data-testid="prompt-login-button"]').click()
    cy.url().should('include', '/login')
  })
})
