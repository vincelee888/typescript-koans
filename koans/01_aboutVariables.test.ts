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
        let errorThrown = false
        
        try {
            const foo = 'bar'
            foo = 'baz' // your IDE should highlight this as incorrect!
        } catch {
            errorThrown = true
        }

        expect(errorThrown).toStrictEqual(FILL_ME_IN)
    })

    test(`be careful! using const doesn't ensure immutability`, () => {
        const foo = {
            bar: 'baz'
        }
        const foos = ['bar', 'baz']

        const fn = () => {
            foo.bar = 'qux' // this is ok!
            foos[1] = 'qux' // this is ok!
        } 

        expect(fn).not.toThrow()
    })

    test(`if you really must re-assign a variable, you can use let`, () => {
        let foo = 'bar'
        foo = 'baz'

        expect(foo).toStrictEqual(FILL_ME_IN)
    })

    // TODO: scope?
})
