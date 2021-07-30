import fs from 'fs'

const nextKoanId = fs.readdirSync('./koans').length + 1

const koanTitle = process.argv[2]
  .replace(/\s\s+/g, ' ')
  .split(' ')
  .map(p => `${p[0].toUpperCase()}${p.substr(1)}`)
  .join('')

const fileNamePrefix = nextKoanId >= 10
  ? nextKoanId.toString()
  : `0${nextKoanId}`

const koanFileName = `${fileNamePrefix}_about${koanTitle}.test.ts`

const output = `describe('About ${koanTitle}', () => {
  const FILL_ME_IN = null

  test('', () => {
      const foo = 'bar'

      expect(foo).toStrictEqual(FILL_ME_IN)
  })
})`

fs.writeFileSync(`./koans/${koanFileName}`, output)
