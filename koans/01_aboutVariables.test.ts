describe('About Variables', () => {
    const FILL_ME_IN = 'fill me in!'

    test(`const declares a variable`, () => {
        const name = 'Morty'

        expect(name).toStrictEqual(FILL_ME_IN)
    })

    /* In most cases, we should avoid changing the value of (mutating) variables.
    Code that mutates state can be difficult to follow, and can cause unwanted
    side effects. */
    test(`a const containing a primitive types cannot be reassigned`, () => {
        // the primitive types available:
        const name = 'Rick'
        expect(typeof(name)).toBe(FILL_ME_IN)

        const isAPickle = true
        expect(typeof(isAPickle)).toBe(FILL_ME_IN)

        const totalAlternateUniversesRuined = 23932
        expect(typeof(totalAlternateUniversesRuined)).toBe(FILL_ME_IN)

        // try uncommenting the following line:
        // foo = 'baz'
    })

    test(`if you really must re-assign a variable, you can use let`, () => {
        let foo = 'bar'
        foo = 'baz'

        expect(foo).toStrictEqual(FILL_ME_IN)
    })
})
