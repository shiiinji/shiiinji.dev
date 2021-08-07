describe('cy.login', () => {
  before(() => {
    cy.visit('/login')
  })
  it('ページタイトル', () => {
    cy.title().should('eq', 'ログインページ | shiiinji.dev')
  })

  it('cy loginコマンドの存在確認', () => {
    expect(cy.login).to.be.a('function')
  })
})
