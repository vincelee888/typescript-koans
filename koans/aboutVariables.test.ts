describe('About Variables', () => {
    test('const declares constants', () => {
        const foo = 'bar'

        const FILL_ME_IN = null;
        expect(foo).toStrictEqual('bar')
    })

})