// @ts-ignore
describe('トップページ', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000')
  })

  it('SEOタイトル', async () => {
    await expect(page.title()).resolves.toMatch(
      'shiiinjiののブログ&ポートフォリオサイトです。',
    )
  })
})
