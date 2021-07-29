describe('cy.login', () => {
  before(() => {
    cy.visit('/')
  })
  it('cy loginコマンドの存在確認', () => {
    expect(cy.login).to.be.a('function')
  })
})
