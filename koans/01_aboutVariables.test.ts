describe('About Variables', () => {
    const FILL_ME_IN = 'fill me in!'

    test(`const declares a variable`, () => {
        const name = 'Morty'

        expect(name).toStrictEqual(FILL_ME_IN)
    })

    /* In most cases, we should avoid changing the value of (mutating) variables.
    Code that mutates state can be difficult to follow, and can cause unwanted
    side effects. */
    test(`a variable declared with const cannot be reassigned`, () => {
        const name = 'Rick'

        // try uncommenting the following line:
        // name = 'Jerry' 
    })

    test(`if you really must re-assign a variable, you can use let`, () => {
        let sidekick = 'Morty'
        sidekick = 'Summer'

        expect(sidekick).toStrictEqual(FILL_ME_IN)
    })
})
