import fs from 'fs'

const koanTitle = cleanKoanName(process.argv[2])
const nextKoanId = fs.readdirSync('./koans').length + 1
const koanFileName = buildFileName(nextKoanId, koanTitle)

const output = `describe('About ${koanTitle}, () => {
  const FILL_ME_IN = null

  test(\`\`, () => {
      const foo = 'bar'
s
      expect(foo).toStrictEqual(FILL_ME_IN)
  })
})`

fs.writeFileSync(`./koans/${koanFileName}`, output)

function cleanKoanName (name:string) { 
  return name
    .replace(/\s\s+/g, ' ')
    .split(' ')
    .map(p => `${p[0].toUpperCase()}${p.substr(1)}`)
    .join('')
}

function buildFileName(nextKoanId:number, koanTitle: string) {

  const fileNamePrefix = nextKoanId >= 10
    ? nextKoanId.toString()
    : `0${nextKoanId}`

  return `${fileNamePrefix}_about${koanTitle}.test.ts`
}

