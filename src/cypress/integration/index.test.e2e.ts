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
    cy.location('pathname').should((pathname) => expect(pathname).to.equal('/'))
    cy.get('ul li:first').click()
    cy.wait(1000)
    cy.location('pathname').should((pathname) =>
      expect(pathname).to.match(/blog/),
    )
    cy.wait(1000)
    cy.get('[data-testid="prompt-login-button"]').click()
    cy.location('pathname').should((pathname) =>
      expect(pathname).to.equal('/login'),
    )
  })
})
