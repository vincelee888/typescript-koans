describe('About Strings', () => {
  const FILL_ME_IN = 'fill me in!'

  test(`strings can be declared with single or double quotes`, () => {
      const r = 'Rick'
      const m = "Morty"

      expect(typeof(r)).toStrictEqual(FILL_ME_IN)
      expect(typeof(m)).toStrictEqual(FILL_ME_IN)
  })

  test(`strings can be concatenated to make new strings`, () => {
    const firstName = 'Rick'
    const lastName = 'Sanchez'
    const fullName = firstName + ' ' + lastName

    expect(fullName).toStrictEqual(FILL_ME_IN)
  })

  test(`you can use backticks to create template strings`, () => {
    const firstName = 'Rick'
    const lastName = 'Sanchez'
    const fullName = `${firstName} ${lastName}`

    expect(fullName).toStrictEqual(FILL_ME_IN)
  })
})
