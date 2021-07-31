const FILL_ME_IN = 'fill me in!'

describe('About Variables', () => {
    test(`const declares a variable`, () => {
        const foo = 'bar'

        expect(foo).toStrictEqual(FILL_ME_IN)
    })

    /* In most cases, we should avoid changing the value of (mutating) variables.
    Code that mutates state can be difficult to follow, and can cause unwanted
    side effects. */
    test(`a const cannot be reassigned`, () => {
            const foo = 'bar'

            // try uncommenting the following line:
            // foo = 'baz'
    })

    test(`if you really must re-assign a variable, you can use let`, () => {
        let foo = 'bar'
        foo = 'baz'

        expect(foo).toStrictEqual(FILL_ME_IN)
    })
})
